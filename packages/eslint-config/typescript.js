// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        /**
         * 重载的函数必须写在一起
         * @reason 增加可读性
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @reason 允许灵活运用两者
         */
        '@typescript-eslint/array-type': 'off',
        /**
         * @reason 既然已经使用注释来忽略编译错误了，说明已经清楚可能带来的后果
         */
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-tslint-comment': 'error',
        /**
         * 禁止使用指定的类型
         */
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],

        /**
         * @reason 其实没必要用 getter，直接 readonly 就够了
         */
        '@typescript-eslint/class-literal-property-style': 'off',

        /**
         * 有时候需要留着 interface 等待外界通过 declaration merging 提供更详细的实现，所以需要关闭
         */
        '@typescript-eslint/consistent-indexed-object-style': 'off',

        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'never',
            },
        ],
        /**
         * 优先使用 interface 而不是 type
         * @reason interface 可以 implement, extend 和 merge
         *
         * 两者各有用途
         */
        '@typescript-eslint/consistent-type-definitions': ['off', 'interface'],

        /**
         * TypeScript 5.0 有 verbatimModuleSyntax，所以这里不需要再检查了
         */
        '@typescript-eslint/consistent-type-imports': 'off',
        'default-param-last': 'off',
        /**
         * @reason 没啥必要限制最后的才能是 default，这种错误也不常见
         */
        '@typescript-eslint/default-param-last': 'off',
        /**
         * 函数返回值必须与声明的类型一致
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/explicit-function-return-type': 'off',
        /**
         * 必须设置类的成员的可访问性
         * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
         *
         * 暂时没精力开启
         */
        '@typescript-eslint/explicit-member-accessibility': 'off',
        /**
         * @reason 没必要写类型
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'init-declarations': 'off',
        '@typescript-eslint/init-declarations': ['off'],
        /**
         * 指定类成员的排序规则
         * @reason 优先级：
         * 1. static > instance
         * 2. field > constructor > method
         * 3. public > protected > private
         */
        '@typescript-eslint/member-ordering': [
            'off', // TODO: 临时性关闭这规则
            {
                default: [
                    'signature',

                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'static-field',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'static-method',

                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-field',
                    'protected-field',
                    'private-field',
                    'instance-field',
                    'field',

                    'constructor',

                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'public-method',
                    'protected-method',
                    'private-method',
                    'instance-method',
                    'method',
                ],
            },
        ],
        /**
         * 有点太严格了，咱还不敢开
         */
        '@typescript-eslint/method-signature-style': 'off',
        /**
         * 禁止使用 Array 构造函数
         */
        '@typescript-eslint/no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        /**
         * `const isEqualsNum = 1 + foo.num! == 2;` 这种场景可能会出现需要用。
         *
         * prettier 不会允许我们加括号，所以只能关闭这条规则
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',

        'no-duplicate-imports': 'off',

        /**
         *
         * @reason ts 默认就有检查了
         */
        '@typescript-eslint/no-dupe-class-members': 'off',
        /**
         * 禁止 delete 时传入的 key 是动态的
         */
        '@typescript-eslint/no-dynamic-delete': 'error',
        /**
         * 不允许有空函数
         * @reason 有时需要将一个空函数设置为某个项的默认值
         */
        '@typescript-eslint/no-empty-function': 'off',
        /**
         * 禁止定义空的接口
         */
        '@typescript-eslint/no-empty-interface': 'off',
        /**
         * 禁止使用 any
         */
        '@typescript-eslint/no-explicit-any': 'off',
        /**
         * 禁止多余的 non-null 断言
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        /**
         * 禁止定义没必要的类，比如只有静态方法的类
         */
        '@typescript-eslint/no-extraneous-class': 'off',
        /**
         * 禁止调用 Promise 时没有处理异常情况
         */
        '@typescript-eslint/no-floating-promises': 'off',
        /**
         * 禁止对 array 使用 for in 循环
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-for-in-array': 'off',
        /**
         * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
         * @reason 可以简化代码
         */
        '@typescript-eslint/no-inferrable-types': 'error',
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-void-type': 'off', // TODO: 调研是否可以打开
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': 'off',
        /**
         *
         * @reason 兼容不合法的类型
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        /**
         * 禁止使用 magic numbers
         */
        '@typescript-eslint/no-magic-numbers': 'off',
        /**
         * 禁止在接口或类中定义自指的冗余 new
         */
        '@typescript-eslint/no-misused-new': 'error',
        /**
         * 避免错误的使用 Promise
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-misused-promises': 'off',
        /**
         * 禁止使用 namespace 来定义命名空间
         * @reason 使用 es6 引入模块，才是更标准的方式。
         * 但是允许使用 declare namespace ... {} 来定义外部命名空间
         */
        '@typescript-eslint/no-namespace': 'off',
        /**
         * 禁止使用 non-null 断言（感叹号）
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off',

        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'off',

        /**
         * 禁止使用 require
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         */
        '@typescript-eslint/no-require-imports': 'error',

        'no-shadow': 'off',
        /**
         * vue 里常用 shadow
         */
        '@typescript-eslint/no-shadow': [
            'off',
            {
                ignoreTypeValueShadow: true,
                ignoreFunctionTypeParameterNameValueShadow: true,
            },
        ],
        /**
         * 禁止将 this 赋值给其他变量，除非是解构赋值
         */
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true,
                allowedNames: ['self', 'mutableThis'],
            },
        ],
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-throw-literal': 'off',
        /**
         * 禁止使用类型别名
         */
        '@typescript-eslint/no-type-alias': 'off',
        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-condition': 'off',
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        /**
         * 禁止无用的类型断言
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',

        '@typescript-eslint/no-unnecessary-type-constraint': 'off',
        'no-unused-expressions': 'off',
        /**
         * 禁止无用的表达式
         *
         * 暂时关闭，待细查
         */
        '@typescript-eslint/no-unused-expressions': ['off', {}],
        /**
         * 已定义的变量必须使用
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/no-unused-vars': 'off',
        /**
         * 禁止在定义变量之前就使用它
         */
        '@typescript-eslint/no-use-before-define': ['error'],
        /**
         * 禁止出现没必要的 constructor
         */
        '@typescript-eslint/no-useless-constructor': 'error',
        /**
         * 禁止使用 require 来引入模块
         * @reason no-require-imports 规则已经约束了 require
         */
        '@typescript-eslint/no-var-requires': 'off',
        /**
         * @reason as const 是好的做法
         */
        '@typescript-eslint/prefer-as-const': 'error',

        '@typescript-eslint/prefer-enum-initializers': 'off',
        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @reason for of 循环更加易读
         */
        '@typescript-eslint/prefer-for-of': 'error',
        /**
         * 使用函数类型别名替代包含函数调用声明的接口
         *
         * 因为 vue 的 event 需要，所以关闭
         */
        '@typescript-eslint/prefer-function-type': 'off',
        /**
         * 使用 includes 而不是 indexOf
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-literal-enum-member': 'off',
        /**
         * 禁止使用 module 来定义命名空间
         * @reason module 已成为 js 的关键字
         */
        '@typescript-eslint/prefer-namespace-keyword': 'off',
        /**
         * 使用 ?? 替代 ||
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        /**
         * 使用 optional chaining 替代 &&
         */
        '@typescript-eslint/prefer-optional-chain': 'error',
        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-readonly': 'off',
        /**
         * 使用 RegExp#exec 而不是 String#match
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',
        /**
         * 使用 String#startsWith 而不是其他方式
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        /**
         * @reason ts-expect-error 是好的做法
         */
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        'lines-between-class-members': 'off',
        /**
         * 代码风格问题不涉及语义，因此关闭
         */
        '@typescript-eslint/lines-between-class-members': ['off'],
        /**
         * 返回值是 Promise 的函数必须是 async 函数
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/promise-function-async': 'off',
        /**
         * 使用 sort 时必须传入比较函数
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/require-array-sort-compare': 'off',
        /**
         * async 函数中必须存在 await 语句
         */
        '@typescript-eslint/require-await': 'off',
        /**
         * 使用加号时，两者必须同为数字或同为字符串
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/restrict-plus-operands': 'off',
        /**
         * 模版字符串中的变量类型必须是字符串
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/restrict-template-expressions': 'off',
        /**
         * async 函数在 try catch 中遇到 promise 返回值，必须 await
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/return-await': 'off',
        /**
         * 条件判断必须传入布尔值
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',
        /**
         * 禁止使用三斜杠导入文件
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'never',
                types: 'always',
                lib: 'always',
            },
        ],
        /**
         * interface 和 type 定义时必须声明成员的类型
         * 开启了 strict，不需要它
         */
        '@typescript-eslint/typedef': 'off',
        /**
         * 方法调用时需要绑定到正确的 this 上
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/unbound-method': 'off',
        /**
         * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         */
        '@typescript-eslint/unified-signatures': 'off',
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
});
