/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['@kwai-explore/eslint-config/preset/vue3-ts'],
    overrides: [
        {
            files: ['**/*.ts', '**/*.vue'],
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: __dirname,
            },
        },
    ],
    rules: {},
};
