// @ts-check
const { defineConfig } = require('eslint/config');

module.exports = defineConfig({
    rules: {
        /**
         * 和 script setup 冲突
         */
        'import/first': 'off',
        'vue/component-name-in-template-casing': 'error',
        'vue/require-default-prop': 'off',
        'vue/block-order': [
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
        'vue-scoped-css/enforce-style-type': ['error', { allows: ['scoped', 'module'] }],
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
