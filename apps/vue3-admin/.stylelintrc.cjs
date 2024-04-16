module.exports = {
    overrides: [
        {
            files: ['**/*.(css)'],
            extends: ['@kwai-explore/stylelint-config/scss'],
        },
        {
            files: ['**/*.(scss)'],
            customSyntax: 'postcss-scss',
            extends: ['@kwai-explore/stylelint-config/scss'],
        },
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html',
            extends: ['@kwai-explore/stylelint-config/vue'],
        },
    ],
    rules: {},
};
