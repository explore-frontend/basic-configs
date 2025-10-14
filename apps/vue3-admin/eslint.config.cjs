// @ts-check
/* eslint-env node */

const preset = require('@kwai-explore/eslint-config/preset/vue3-ts');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig(preset, {
    files: ['**/*.ts', '**/*.vue'],
    ignores: [
        'dist',
        'node_modules',
        'public',
        '*.cjs',

        'gen',

    ]
});
