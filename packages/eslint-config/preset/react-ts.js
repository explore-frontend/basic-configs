// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: ['../javascript', '../typescript-requiring-type-checking', '../typescript', '../react'],
            env: {
                browser: true,
                node: true,
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            settings: {
                react: {
                    version: 'detect',
                },
            },

            globals: {
                React: true,
                JSX: true,
            },
        },
    ],
});
