// @ts-check
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
    rules: {
        'import-isolation/isolation': [
            'error',
            {
                isolationGroups: [
                    {
                        directories: ['isolation/*'],
                    },
                ],
            },
        ],
        'eslint-comments/no-unlimited-disable': 'error',
        'eslint-comments/require-description': 'error',
    },
});
