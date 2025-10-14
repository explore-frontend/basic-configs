// @ts-check
const config = require('@kwai-explore/eslint-config/preset/vue2-ts')
const { defineConfig } = require('eslint/config');

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
