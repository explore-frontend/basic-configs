// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    plugins: ['import-isolation'],
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
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
                },
                'import/resolver': {
                    typescript: {
                        alwaysTryTypes: true,
                        // project 的默认值是 ["./tsconfig.json"]
                        // project: ['./tsconfig.json'],
                    },
                },
            },
        },
    ],
});
