// @ts-check
const { defineConfig } = require('eslint/config');

module.exports = defineConfig({
    rules: {
        // babel inserts `'use strict';` for us
        strict: ['error', 'never'],
    },
});
