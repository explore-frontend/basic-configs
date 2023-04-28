// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
    // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy

    // Rules order is important, please avoid shuffling them
    extends: ['alloy/react', 'plugin:react-hooks/recommended'],
});
