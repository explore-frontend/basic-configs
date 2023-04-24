// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    extends: ['plugin:sonar/recommended', 'plugin:sonarjs/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/await-thenable': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': [
            'error',
            {
                allowPrivateClassPropertyAccess: true,
                allowProtectedClassPropertyAccess: true,
                allowIndexSignaturePropertyAccess: true,
            },
        ],
        /**
         * TODO: 定一个命名要求吧
         */
        '@typescript-eslint/naming-convention': 'off',
        /**
         * This rule has some overlap with restrict-plus-operands and restrict-template-expressions.
         */
        '@typescript-eslint/no-base-to-string': 'off',

        '@typescript-eslint/no-confusing-void-expression': ['error', {}],
        /**
         * 禁止对 Promise 不使用 then
         *
         * 暂时关闭，因为开启错误就太多了
         */
        '@typescript-eslint/no-floating-promises': ['off', { ignoreVoid: true, ignoreIIFE: true }],
        /**
         * 禁止对 array 使用 for in 循环
         */
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        /**
         * 避免错误的使用 Promise
         */
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],

        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         */
        '@typescript-eslint/no-throw-literal': 'error',
        /**
         * 当其只可能是 boolean 时候，没必要进行 === true
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // FIXME: 暂时没法开，因为遇到了 bug
        /**
         * 被下一条规则覆盖了
         */
        'no-constant-condition': 'off',
        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         */
        '@typescript-eslint/no-unnecessary-condition': [
            'off', // 关闭的原因是，需要考虑 tagged union 扩展的问题
        ],
        '@typescript-eslint/no-unnecessary-type-arguments': 'off', // TODO: 研究是否可以开启
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         *
         * 好像不是很重要
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off',

        /**
         * 禁止无用的类型断言
         *
         * 因为 Vue 的原因暂时关闭
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        /**
         * 如果启用了，那些老代码就都得重写了
         */
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off', // FIXME: 这条貌似得开启

        /**
         * 使用 includes 而不是 indexOf
         */
        '@typescript-eslint/prefer-includes': 'error',

        /**
         * 使用 ?? 替代 ||
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        /**
         * 暂时没法用
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         *
         * 暂时没那么多精力开启（缺少单测）
         */
        '@typescript-eslint/prefer-readonly': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter': 'off',
        /**
         * 使用 RegExp#exec 而不是 String#match
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',
        /**
         * 使用 String#startsWith 而不是其他方式
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        /**
         * 返回值是 Promise 的函数必须是 async 函数
         */
        '@typescript-eslint/promise-function-async': 'off',
        /**
         * 使用 sort 时必须传入比较函数
         */
        '@typescript-eslint/require-array-sort-compare': 'error',

        /**
         * 使用加号时，两者必须同为数字或同为字符串
         */
        '@typescript-eslint/restrict-plus-operands': [
            'error',
            {
                checkCompoundAssignments: true,
            },
        ],
        /**
         * 模版字符串中的变量类型必须是字符串
         */
        '@typescript-eslint/restrict-template-expressions': [
            'error',
            {
                allowNumber: true,
                allowBoolean: true,
                allowAny: false,
                allowNullish: false,
                allowRegExp: false,
            },
        ],
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off', // TODO: 调查是否可以开启
        /**
         * async 函数在 try catch 中遇到 promise 返回值，必须 await
         */
        '@typescript-eslint/return-await': 'error',

        /**
         * 尽可能严格使用 boolean 类型
         */
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
            {
                allowString: true,
                allowNumber: true,
                allowNullableObject: true,
                allowNullableBoolean: true,
                allowNullableString: true,
                allowNullableNumber: true,
                allowAny: true,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
            },
        ],

        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        /**
         * 方法调用时需要绑定到正确的 this 上
         */
        '@typescript-eslint/unbound-method': 'error',

        'sonar/function-name': 'off', // React 的函数名是大写开头
        'sonar/deprecation': 'error',
        'sonar/no-dead-store': 'off',
        'sonar/no-useless-intersection': 'off', // FIXME: 存在 bug，临时关闭
        'sonar/max-union-size': 'off',
        /**
         * 可以通过 tsconfig 的 noUnusedLocals 来控制
         */
        'sonar/unused-import': 'off',
        'sonar/different-types-comparison': 'off',
        'sonar/no-unused-function-argument': 'off',
        /**
         * 和 tsconfig 的 exactOptionalPropertyTypes 冲突
         */
        'sonar/no-redundant-optional': 'off',
        'sonar/sonar-no-unused-vars': 'off',
        'sonar/destructuring-assignment-syntax': 'off',
        /**
         * 太慢了
         */
        'sonar/arguments-order': 'off',
        /**
         * ts 会查
         */
        'sonar/non-number-in-arithmetic-expression': 'off',
        'sonarjs/no-collapsible-if': 'off',
        'sonarjs/no-identical-functions': 'off',
        'sonarjs/no-redundant-jump': 'off',
        'sonarjs/prefer-immediate-return': 'off',
    },
});
