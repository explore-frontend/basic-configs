// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    plugins: [
        // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
        // required to lint *.vue files
        'vue',
        'vue-scoped-css',
    ],
    rules: {
        /**
         * 和 script setup 冲突
         */
        'import/first': 'off',
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
        ],
        'vue/no-required-prop-with-default': [
            'error',
            {
                autofix: false,
            },
        ],
        'vue/define-props-declaration': ['error', 'type-based'],
        'vue/define-emits-declaration': ['error', 'type-based'],
        'vue/comment-directive': ['error', { reportUnusedDisableDirectives: true }],
        'vue/multi-word-component-names': 'off',
    },
});
