// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    plugins: ['import-isolation'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.mts', '**/*.vue'],
            extends: ['../javascript', '../typescript', '../typescript-requiring-type-checking', '../vue2'],
            env: {
                browser: true,
                es2022: true,
            },
            parserOptions: {
                extraFileExtensions: ['.vue'],
                parser: '@typescript-eslint/parser',
                ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
                sourceType: 'module', // Allows for the use of imports
            },
            settings: {
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
                    'vue-eslint-parser': ['.vue'],
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
