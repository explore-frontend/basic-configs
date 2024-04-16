export default {
    '**/*.{ts,vue}': ['prettier --write', 'eslint --cache --fix'],
    '**/*.{js,mts,mjs,css,json,md}': 'prettier --write',
};
