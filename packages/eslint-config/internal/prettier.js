// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    extends: ['prettier'],
    rules: {
        /**
         * See https://github.com/prettier/eslint-config-prettier/blob/main/README.md#curly
         * 
         */
        curly: ['error', 'all'],
    },
});
