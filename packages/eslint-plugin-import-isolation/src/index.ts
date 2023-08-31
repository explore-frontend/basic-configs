import type { ESLint } from 'eslint';
import { createImportRuleListener, isRelative } from './utils';
import { dirname, resolve } from 'node:path';

type Option = { isolationGroups: ReadonlyArray<{ directories: ReadonlyArray<string> }> };

const plugin: ESLint.Plugin = {
    rules: {
        isolation: {
            meta: {
                type: 'problem',
                schema: [
                    {
                        type: 'object',
                        properties: {
                            isolationGroups: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        directories: {
                                            type: 'array',
                                            items: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    required: ['directories'],
                                },
                            },
                        },
                        required: ['isolationGroups'],
                    },
                ],
                messages: {
                    forbidden: 'Imports from {{importeeDir}} in {{importerDir}} are forbidden.',
                },
            },
            create(ctx) {
                const option: Option = ctx.options[0];
                // Convert string patterns in an isolation group into a single RegExp
                // e.g. ['modules/*'] -> new RegExp('(modules/.+?(/|$))')
                // e.g. ['modules/a', 'modules/b'] -> new RegExp('(modules/a(/|$))|(modules/b(/|$))')
                const directoryPatterns = option.isolationGroups.map(
                    ({ directories }) =>
                        new RegExp(
                            directories.map((directory) => `(${directory.replace(/\*/g, '.+?')}(/|$))`).join('|'),
                        ),
                );
                const importer = ctx.filename ?? ctx.getFilename();
                if (!directoryPatterns.some((pattern) => pattern.test(importer))) {
                    return {};
                }
                return createImportRuleListener((node, importee) => {
                    if (isRelative(importee)) {
                        importee = resolve(dirname(importer), importee);
                    }
                    for (const pattern of directoryPatterns) {
                        const importerDir = importer.match(pattern)?.[0];
                        const importeeDir = importee.match(pattern)?.[0];
                        if (importerDir && importeeDir && importerDir !== importeeDir) {
                            ctx.report({
                                node,
                                messageId: 'forbidden',
                                data: {
                                    importerDir,
                                    importeeDir,
                                },
                            });
                        }
                    }
                });
            },
        },
    },
};
export = plugin;
