// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    rules: {
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/require-description': 'error',
    },
});
