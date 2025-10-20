// @ts-check
const { defineConfig } = require('eslint/config');

const tsEslint = require('typescript-eslint')

const globals = require('globals');
const eslintJS = require('../rules/javascript');
const eslintTS = require('../rules/typescript');
const eslintVue2 = require('../rules/vue2');

const vueEslintParser = require('vue-eslint-parser')

const configs = [
    eslintJS,
    eslintTS,
    eslintVue2
]

module.exports = defineConfig(...configs, {
    files: ['**/*.ts', '**/*.mts', '**/*.tsx','**/*.vue'],
    ignores: ['node_modules'],
    languageOptions: {
        parser: vueEslintParser,
        parserOptions: {
            extraFileExtensions: ['.vue'],
            parser: tsEslint.parser,
            ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
            sourceType: 'module', // Allows for the use of imports
        },
        // 原 env
        globals: {
            ...globals.browser,
            ...globals.es2022
        }
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.mts', '.tsx', '.vue'],
            },
        },
        'import/extensions': ['.ts', '.mts', '.tsx', '.vue'],
    }
});
