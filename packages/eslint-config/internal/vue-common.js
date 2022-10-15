module.exports = {
    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // required to lint *.vue files
        'vue',
        'vue-scoped-css',
        'unicorn',
    ],
    rules: {
        'vue/component-name-in-template-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style'],
            },
        ],
        /**
         * volar will check no-export-in-script-setup
         */
        'vue/no-export-in-script-setup': 'off',
        'vue/no-undef-components': ['error', { ignorePatterns: [] }],
        'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped'] }],
        'vue/v-on-event-hyphenation': 'off',

        'no-restricted-syntax': [
            'error',
            {
                selector: 'TSEnumDeclaration[const=true]',
                message: 'Do not declare const enums, use enums instead.',
            },
            {
                selector: "CallExpression[callee.name='defineProps']:not([typeParameters])",
                message: 'defineProps must always be invoked with a type parameter.',
            },
            {
                selector: "CallExpression[callee.name='defineEmits']:not([typeParameters])",
                message: 'defineEmits must always be invoked with a type parameter.',
            },
        ],

        'unicorn/filename-case': [
            'error',
            {
                case: 'pascalCase',
                ignore: [/.*(?<!\.vue)$/],
            },
        ],
    },
};
