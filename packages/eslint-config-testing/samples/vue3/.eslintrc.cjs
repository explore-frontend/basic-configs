// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    root: true,
    extends: ['@kwai-explore/eslint-config/preset/vue3-ts'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.mts', '**/*.vue'],
            extends: ['../../.eslint-config-common.cjs'],
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: __dirname,
            },
        },
    ],
});
