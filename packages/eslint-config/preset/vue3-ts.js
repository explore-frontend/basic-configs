module.exports = {
    overrides: [
        {
            files: ['**/*.ts', '**/*.vue'],
            extends: [
                '../javascript',
                '../typescript',
                '../typescript-requiring-type-checking',
                '../vue3',
            ],
            env: {
                browser: true,
                es2022: true,
            },
            parserOptions: {
                extraFileExtensions: ['.vue'],
                parser: '@typescript-eslint/parser',
                ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
                sourceType: 'module', // Allows for the use of imports
            },
        },
    ],
};
