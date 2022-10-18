// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy

    // Rules order is important, please avoid shuffling them
    extends: ['plugin:vue/vue3-recommended', './internal/vue-common', 'prettier'],

    // add your custom rules here
    rules: {
        'vue/define-props-declaration': 'error',
        'vue/define-emits-declaration': 'error',
    },
});
