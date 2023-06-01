// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
            extends: ['../javascript', '../typescript', '../typescript-requiring-type-checking', '../react'],
            env: {
                browser: true,
                es2022: true,
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
        },
    ],
});
