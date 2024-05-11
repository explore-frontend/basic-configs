import type { Plugin, UserConfig } from 'vite';

type OutputOptions<
    T = NonNullable<NonNullable<NonNullable<UserConfig['build']>['rollupOptions']>['output']>,
    O = T extends (infer O)[] ? O : never,
> = O;
type GetManualChunk = Extract<OutputOptions['manualChunks'], Function>;

type StrategyWithOptions = ['default'] | ['loose-common'] | [stategy: 'single-main', options: { mainModule: string }];

export function chunk(...args: StrategyWithOptions): Plugin {
    const [strategy, options] = args;

    const looseCommon: GetManualChunk = (id, { getModuleInfo }) => {
        // 有多个入口引用的东西放进 common
        const dependentEntryPoints: string[] = [];

        const idsToHandle = new Set([id]);

        for (const moduleId of idsToHandle) {
            const info = getModuleInfo(moduleId);
            if (!info) continue;
            const { isEntry, dynamicImporters, importers } = info;
            if (isEntry || dynamicImporters.length > 0) dependentEntryPoints.push(moduleId);
            if (dependentEntryPoints.length > 1) return 'common';
            for (const importerId of importers) idsToHandle.add(importerId);
        }
    };

    const singleMain = (mainModule: string): GetManualChunk => {
        // 适用于只有一个主路由入口，有一些零散的动态加载的模块的场景
        return (id, meta) => {
            const idsToHandle = new Set([id]);
            for (const moduleId of idsToHandle) {
                if (moduleId.includes(mainModule)) return 'main';
                for (const importerId of meta.getModuleInfo(moduleId)?.importers ?? []) idsToHandle.add(importerId);
            }
        };
    };

    return {
        name: 'pex-chunk',
        config: (config) => {
            const ourHook =
                strategy === 'loose-common'
                    ? looseCommon
                    : strategy === 'single-main'
                      ? singleMain(options.mainModule)
                      : undefined;
            if (!ourHook) return;
            let outputs = config?.build?.rollupOptions?.output;
            if (outputs) {
                outputs = Array.isArray(outputs) ? outputs : [outputs];
                for (const output of outputs) {
                    if (output.manualChunks) {
                        if (typeof output.manualChunks === 'function') {
                            const userHook = output.manualChunks;
                            output.manualChunks = (id, api) => {
                                return ourHook(id, api) ?? userHook(id, api);
                            };
                        }
                    } else {
                        output.manualChunks = ourHook;
                    }
                }
            } else {
                return {
                    build: {
                        rollupOptions: {
                            output: {
                                manualChunks: ourHook,
                            },
                        },
                    },
                };
            }
        },
    };
}
