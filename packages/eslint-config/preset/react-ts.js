// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
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
            plugins: ['simple-import-sort'],
            rules: {
                // import 排序
                'simple-import-sort/imports': 2,
            },
        },
    ],
});
