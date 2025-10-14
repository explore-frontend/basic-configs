// @ts-check
const preset = require('@kwai-explore/eslint-config/preset/vue3-ts');
const { defineConfig } = require('eslint/config');

module.exports = defineConfig(preset, {
    files: ['**/*.ts', '**/*.vue'],
    ignores: [
        'dist',
        'node_modules',
        'public',
        '*.js',
        '*.mjs',
        'mocks',
        '/src/swagger/open-api-docs/**/*.ts',
    ],
});
