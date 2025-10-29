// @ts-check
const { defineConfig } = require('eslint/config');
const eslintPrettier = require('eslint-config-prettier/flat');
const eslintPluginPrettier = require('eslint-plugin-prettier/recommended');

const configs = [
    eslintPrettier,
    eslintPluginPrettier,
]

module.exports = defineConfig(...configs, {
    rules: {
        /**
         * See https://github.com/prettier/eslint-config-prettier/blob/main/README.md#curly
         *
         */
        curly: ['error', 'all'],
    },
});
