// @ts-check
const { defineConfig } = require('eslint/config');
const eslintPrettier = require('eslint-config-prettier/flat');

module.exports = defineConfig(eslintPrettier, {
    rules: {
        /**
         * See https://github.com/prettier/eslint-config-prettier/blob/main/README.md#curly
         *
         */
        curly: ['error', 'all'],
    },
});
