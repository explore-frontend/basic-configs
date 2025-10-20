// @ts-check
const { defineConfig } = require('eslint/config');

const babelParser = require('@babel/eslint-parser')

const eslintAirbnbBase = require('./airbnb');
const eslintComments = require('@eslint-community/eslint-plugin-eslint-comments/configs');
const eslintPrettier = require('./prettier');
const js = require('@eslint/js')

const sonar = require('eslint-plugin-sonarjs')

/**
 * @type {Partial<import('eslint/rules').ESLintRules>}
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
 * @type {Partial<import('eslint/rules').ESLintRules>}
 */
const deprecatedRules = {
    'lines-around-directive': 'off',
    'no-buffer-constructor': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
};

/**
 * @type {Partial<import('eslint/rules').ESLintRules>}
 */
const eslintCommentsRules = {
    '@eslint-community/eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
    '@eslint-community/eslint-comments/no-unlimited-disable': 'off',
    /**
     * related: https://github.com/eslint/eslint/issues/15466
     */
    '@eslint-community/eslint-comments/no-unused-disable': 'error',
};

/**
 * @type {Partial<import('eslint/rules').ESLintRules>}
 */
const sonarjsRules = {
    'sonarjs/function-name': 'off', // React 的函数名是大写开头
    'sonarjs/deprecation': 'warn',
    'sonarjs/no-dead-store': 'off',
    'sonarjs/no-useless-intersection': 'off', // FIXME: 存在 bug，临时关闭
    'sonarjs/max-union-size': 'off',
    /**
     * 可以通过 tsconfig 的 noUnusedLocals 来控制
     */
    'sonarjs/unused-import': 'off',
    'sonarjs/different-types-comparison': 'off',
    'sonarjs/no-unused-function-argument': 'off',
    /**
     * 和 tsconfig 的 exactOptionalPropertyTypes 冲突
     */
    'sonarjs/no-redundant-optional': 'off',
    'sonarjs/sonar-no-unused-vars': 'off',
    'sonarjs/destructuring-assignment-syntax': 'off',
    /**
     * 太慢了
     */
    'sonarjs/arguments-order': 'off',
    /**
     * ts 会查
     */
    'sonarjs/non-number-in-arithmetic-expression': 'off',
    'sonarjs/no-collapsible-if': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-redundant-jump': 'off',
    'sonarjs/prefer-immediate-return': 'off',

    // 重复字符串检查，其实真没啥用=。=
    'sonarjs/no-duplicate-string': 'off',
    // 检测注释Code 的，及其浪费时间=
    'sonarjs/no-commented-code': 'off',
    'sonarjs/todo-tag': 'warn',
    'sonarjs/no-selector-parameter': 'off',
}

const configs = [
    js.configs.recommended,
    eslintAirbnbBase,
    eslintComments.recommended,
    eslintPrettier,
    sonar.configs.recommended
];

// @ts-expect-error eslint-plugin-comments 类型没写对
module.exports = defineConfig(...configs, {
    languageOptions: {
        parser: babelParser,
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
    },
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
         * 嵌套的三元表达式不是良好的编程习惯
         */
        'no-nested-ternary': 'error',
        /**
         * 用于 exhaustiveCheck
         */
        'no-case-declarations': 'off',
        'no-plusplus': 'off',
        'no-else-return': 'error',
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
        'no-param-reassign': ["error", { "props": false }],
        ...tsCheckRules,
        ...deprecatedRules,
        ...eslintCommentsRules,
        ...sonarjsRules,
    },
});
