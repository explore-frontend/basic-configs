// @ts-check
const { defineConfig } = require('eslint-define-config');

/**
 * @type {import('eslint-define-config').Rules}
 */
const tsCheckRules = {
    'import/no-webpack-loader-syntax': 'off',
    'dot-notation': 'off',
    'no-unsafe-optional-chaining': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'lines-between-class-members': 'off',
    'default-param-last': 'off',
    'no-array-constructor': 'off',
    'no-dupe-class-members': 'off',
    'no-empty-function': 'off',
    'no-implied-eval': 'off',
    'no-new-func': 'off',
    'no-loss-of-precision': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-redeclare': 'off',
    'no-shadow': 'off',
    'no-throw-literal': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'require-await': 'off',
    'no-return-await': 'off',
    // The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
    // Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'valid-typeof': 'off',
    'import/named': 'off',
};

/**
 * @type {import('eslint-define-config').Rules}
 */
const deprecatedRules = {
    'lines-around-directive': 'off',
    'no-buffer-constructor': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
};

module.exports = defineConfig({
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
        },
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false,
    },
    extends: ['eslint-config-airbnb-base', './internal/prettier'],
    rules: {
        /**
         * 依赖注入可能没用到 this
         */
        'class-methods-use-this': 'off',
        /**
         * 和 Angular， Vue 等大家习惯性的编码风格冲突
         */
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'spaced-comment': 'off',
        /**
         * 交给 prettier 处理
         */
        'prefer-template': 'off',
        /**
         * 一般不用 require
         */
        'global-require': 'off',
        /**
         * 嵌套的三元表达式是良好的编程习惯
         */
        'no-nested-ternary': 'off',
        /**
         * 用于 exhaustiveCheck
         */
        'no-case-declarations': 'off',
        'no-plusplus': 'off',
        'no-else-return': 'off',
        yoda: 'off',
        'no-extra-boolean-cast': 'off',
        camelcase: 'off',
        'import/no-deprecated': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/newline-after-import': 'off',
        // 有额外的很正常，可能是二次依赖
        'import/no-extraneous-dependencies': 'off',
        'no-undef-init': 'off',
        'prefer-destructuring': 'off',
        'no-bitwise': 'off',
        'max-classes-per-file': 'off',
        'no-continue': 'off',
        'arrow-body-style': 'off',
        'no-await-in-loop': 'off',
        'no-lonely-if': 'off',
        'no-empty': 'off',
        'no-template-curly-in-string': 'off',
        'import/order': [
            'warn',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                groups: [['external', 'builtin'], 'internal', ['parent', 'sibling', 'index'], 'object'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'require-atomic-updates': 'off', // FIXME: 看起来是需要开启的
        'no-undefined': 'off',
        'no-extra-parens': 'off',
        'max-params': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-useless-return': 'off',
        /**
         * 应该允许 for of
         */
        'no-restricted-syntax': 'off',
        'no-unneeded-ternary': 'off',
        /**
         * 有时候会遇到有的分支想提前返回 undefined，但是不想显式写 undefined
         * @yutianxiang
         *
         * 有 ts 标注就没必要，ts 会查
         * @lihongda03
         */
        'consistent-return': 'off',
        'func-names': 'error',
        ...tsCheckRules,
        ...deprecatedRules,
    },
});
