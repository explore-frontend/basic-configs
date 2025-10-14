// @ts-check
const { defineConfig } = require('eslint/config');

module.exports = defineConfig({
    rules: {
        '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
        '@eslint-community/eslint-comments/require-description': 'error',
    },
    ignores: [
        "dist",
        "node_modules",
        "*.js",
        "*.mjs",
        "*.cjs",
    ]
});
