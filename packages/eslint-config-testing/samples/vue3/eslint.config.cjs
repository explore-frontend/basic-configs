// @ts-check
const { defineConfig } = require('eslint/config');

const config = require('@kwai-explore/eslint-config/preset/vue3-ts')
const common = require('../../eslint-config-common.cjs')

const configs = [config, common]

module.exports = defineConfig(...configs, {
    files: ['**/*.ts', '**/*.mts', '**/*.vue'],
    languageOptions: {
        parserOptions: {
            project: ['./tsconfig.json'],
            tsconfigRootDir: __dirname,
        },
    }
});
