// @ts-check
const { defineConfig } = require('eslint/config');
const vueEslint = require('eslint-plugin-vue')
const vueScopedCss = require('eslint-plugin-vue-scoped-css')
const vueCommon = require('./vue-common')
const prettier = require('./prettier')

const configs = [
    vueEslint.configs['flat/recommended'],
    vueScopedCss.configs['flat/recommended'],
    vueCommon,
    prettier,
]

// @ts-expect-error scoped css 类型没写对
module.exports = defineConfig(...configs, {
    // add your custom rules here
    rules: {
        'vue/define-props-declaration': 'error',
        'vue/define-emits-declaration': 'error',
    },
});
