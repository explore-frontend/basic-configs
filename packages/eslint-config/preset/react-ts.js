// @ts-check
const { defineConfig } = require('eslint/config');
const javascript = require('../rules/javascript')
const typescript = require('../rules/typescript')
const react = require('../rules/react');
const globals = require('globals');
const tsEslint = require('typescript-eslint');

const configs = [
    javascript,
    typescript,
    react,
]

module.exports = defineConfig(...configs, {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    languageOptions: {
        parser: tsEslint.parser,
        globals: {
            ...globals.browser,
            ...globals.es2022,
        },
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        react: {
            version: 'detect',
        },
    },
});
