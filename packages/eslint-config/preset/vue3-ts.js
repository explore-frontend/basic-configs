// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    overrides: [
        {
            files: ['**/*.ts', '**/*.mts', '**/*.vue'],
            extends: ['../javascript', '../typescript', '../typescript-requiring-type-checking', '../vue3'],
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
        },
    ],
});
