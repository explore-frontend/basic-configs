// @ts-check
const { defineConfig } = require('eslint/config');
const reactHooks = require('eslint-plugin-react-hooks')

// eslint-config-alloy 的 react 配置不支持 eslint 9.x
// const alloyReact = require('eslint-config-alloy')

const configs = [
    // @ts-expect-error react-hooks 类型没写对
    reactHooks.configs.flat.recommended
]

module.exports = defineConfig(...configs);
