# @kwai-explore/stylelint-config

[![NPM license](https://img.shields.io/npm/l/@kwai-explore/stylelint-config.svg)](https://www.npmjs.com/package/@kwai-explore/stylelint-config)
[![NPM version](https://img.shields.io/npm/v/@kwai-explore/stylelint-config.svg)](https://www.npmjs.com/package/@kwai-explore/stylelint-config)
[![NPM downloads](https://img.shields.io/npm/dw/@kwai-explore/stylelint-config.svg)](http://www.npmtrends.com/@kwai-explore/stylelint-config)
[![NPM downloads](https://img.shields.io/npm/dm/@kwai-explore/stylelint-config.svg)](http://www.npmtrends.com/@kwai-explore/stylelint-config)

## 💿 Installation

```shell
pnpm install --save-dev stylelint @kwai-explore/stylelint-config
# or
npx install-peerdeps --pnpm --dev @kwai-explore/stylelint-config
```

## 📖 Usage

Set your `.stylelintrc.mjs` to:

```js
export default {
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
```

## 💻 Third party tool integrations

### lintstaged

add this line to your lintstaged config

```js
{
    // ↓ Add stylelint for css.
    "**/*.{css,scss,vue}": ["stylelint --cache --fix --allow-empty-input"]
}
```

### Visual Studio Code integration

Use the [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) extension that [Stylelint] provides officially.

You have to configure the `stylelint.validate` option of the extension to check `.vue` files, because the extension does not check the `*.vue` file by default.

Example **.vscode/settings.json**:

```jsonc
{
  "stylelint.validate": [
      ...,
      // ↓ Add "vue" language.
      "vue"
  ]
```

### npm script

```json
{
    "scripts": {
        "lint:css": "stylelint './**/*.{vue,css,scss}'"
    }
}
```

## 🔒 License

See the [LICENSE](LICENSE) file for license rights and limitations (MIT).

[Stylelint]: https://stylelint.io/
