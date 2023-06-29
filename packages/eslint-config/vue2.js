// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy

    // Rules order is important, please avoid shuffling them
    extends: ['plugin:vue/recommended', './internal/vue-common', './internal/prettier'],

    // add your custom rules here
    rules: {
        'vue/require-explicit-emits': 'error',
        'vue/no-deprecated-data-object-declaration': 'error',
        'vue/no-deprecated-filter': 'error',
        'vue/no-deprecated-functional-template': 'error',
        'vue/no-deprecated-html-element-is': 'error',
        'vue/no-deprecated-inline-template': 'error',
        'vue/no-deprecated-props-default-this': 'error',
        'vue/no-deprecated-router-link-tag-prop': 'error',
        'vue/no-deprecated-scope-attribute': 'error',
        'vue/no-deprecated-slot-attribute': 'error',
        'vue/no-deprecated-slot-scope-attribute': 'error',
        'vue/no-deprecated-v-is': 'error',
        'vue/no-deprecated-v-on-number-modifiers': 'error',
        'vue/no-deprecated-vue-config-keycodes': 'error',
        'vue/no-lifecycle-after-await': 'error',
        'vue/no-ref-as-operand': 'error',
        'vue/no-setup-props-destructure': 'error',
        'vue/no-watch-after-await': 'error',
        'vue/require-toggle-inside-transition': 'error',
        'vue/return-in-emits-validator': 'error',
        'vue/valid-define-emits': 'error',
        'vue/valid-define-props': 'error',
        'vue/valid-v-is': 'error',
        'vue/valid-v-memo': 'error',
        'vue/no-deprecated-dollar-listeners-api': 'off',
        'vue/no-deprecated-dollar-scopedslots-api': 'off',
        'vue/v-on-event-hyphenation': 'off',
        'vue/no-deprecated-destroyed-lifecycle': 'off',
        'vue/no-deprecated-events-api': 'off',
        'vue/no-deprecated-v-bind-sync': 'off',
        'vue/no-export-in-script-setup': 'off',
        'vue/no-v-for-template-key-on-child': 'off',
        'vue/require-slots-as-functions': 'off',
        'vue/no-deprecated-v-on-native-modifier': 'off',
        'vue/no-undef-components': [
            'error',
            {
                /**
                 * 这条rule检测不了全局注册的组件
                 */
                ignorePatterns: ['RouterView', 'RouterLink'],
            },
        ],
        'vue/define-props-declaration': 'error',
        'vue/define-emits-declaration': 'error',
    },
});
