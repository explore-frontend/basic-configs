import vueSpecificRules from 'stylelint-config-recommended-vue/lib/vue-specific-rules.js';

const presets = {
    // 样式，写法，不推荐
    'at-rule-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'declaration-empty-line-before': null,
    'media-feature-range-notation': null,
    'no-duplicate-selectors': null,
    'number-max-precision': null,
    'rule-empty-line-before': null,
    'scss/dollar-variable-colon-space-before': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/double-slash-comment-whitespace-inside': null,
    'selector-attribute-quotes': null,
    'custom-property-empty-line-before': null,
    'declaration-block-single-line-max-declarations': null, // 单行声明块最多只能有1个声明
    'length-zero-no-unit': null, // 0后面不带单位
    'no-empty-source': null,
    'block-no-empty': null,
    'font-family-name-quotes': null, // 需要使用引号包裹字体名称
    'keyframe-block-no-duplicate-selectors': null, // 关键帧是否有重复的选择器
    'shorthand-property-no-redundant-values': null,
    'alpha-value-notation': null, // 指定 rgba的alpha为数字
    'color-hex-length': null, // 颜色16进制写法的长度统一为6位

    // 后续都是打开的 rule
    'selector-pseudo-element-colon-notation': 'double', // 伪类单冒号，伪元素双冒号
    'declaration-block-no-shorthand-property-overrides': true, // 禁止缩写属性覆盖普通属性
    'font-family-no-duplicate-names': true, // 检查字体族名称是否重复
    'declaration-block-no-duplicate-properties': true, // 禁止有重复的属性
    'media-feature-name-no-unknown': true,
    'scss/at-import-partial-extension': 'always', // @import 路径不需要扩展名
    'media-feature-range-notation': 'prefix', // 媒体查询利用前缀方式m, >=存在浏览器兼容性问题
    'no-duplicate-selectors': true, // 禁止重复的选择器
    'function-name-case': 'lower', // css函数名称, 统一编码风格
    'selector-not-notation': 'simple', // 禁止列表写法使用:not, 存在兼容性问题
    'hue-degree-notation': 'angle', // 色调度数使用角度表示法
    'import-notation': 'string', // 指定@import 规则使用字符串表示法
    'color-function-notation': ['legacy', { ignore: ['with-var-inside'] }], // 颜色统一使用逗号分隔
    'plugin/no-unsupported-browser-features': [
        true,
        {
            browsers: ['iOS >= 12', 'Chrome >= 70'],
            // 打开代表不进行ignore  不打开代表可ignore
            ignore: [
                // todo
                'css-descendant-gtgt', // todo
                'css-paged-media', // todo
                'css-when-else', // @todo需要打开，但是会对scss等的if else 语法有影响

                // 需要ignore
                'css-caret-color', // 不打开, 不兼容时设置的光标颜色失效
                'css-font-rendering-controls', // 不打开, 不兼容时对页面影响较小, 比如font-display:swap
                'css-nesting', //不打开,scss, less 等预处理器能处理
                'css-not-sel-list', // 不打开, 已通过selector-not-notation禁止使用css4的属性
                'css-overscroll-behavior', // 不打开, 增强性体验, 不生效保持现状, 可大胆使用
                'css-scroll-behavior', // 不打开,ios兼容性差，设置不生效只影响过渡动画, 不影响页面加载
                'css-text-align-last', // 不打开, 最后一行文本的对齐方式, ios兼容性差, 设置不生效对页面影响较小
                'css-text-justify', // 不打开, 设置后失效对页面布局无影响
                'css3-cursors', // 不打开,js逻辑会做是否可点击的判断, ios不生效对页面无影响
                'css3-cursors-grab', // 不打开,不生效使用默认样式
                'text-decoration', // 不打开, 设置不生效对页面影响较小, 且安卓 和 ios兼容性良好
                'font-family-system-ui', // 不打开, 兼容性良好, 且不生效也能继续展示
                'font-variant-numeric', // 不打开, 字体相同宽度设置, 且不生效也能继续展示
                'css-env-function', // 不打开，css中环境变量, 不得不用的功能, 编写时考虑失效后方案，避免页面展示出错

                // 不需要ignore,stylelint正常检测并提示
                'css-backdrop-filter', // 打开,不兼容时设置的背景失效影响面广
                // 'css-rrggbbaa', // 打开,存在兼容性问题, 可通过其他方式实现颜色表示
                // 'flexbox-gap', // 打开, 存在兼容性问题,设置不生效会导致布局问题, 可通过其他方式代替gap，比如margin
                // 'justify-content-space-evenly', // 打开,失效会影响布局，可通过设置padding + space between的方式实现
                'mdn-text-decoration-line', // 不打开,兼容性良好 chrome > 57 ios>8
                'mdn-text-decoration-shorthand', // 不打开,兼容性良好 chrome > 57 ios>8
            ],
            ignorePartialSupport: true,
        },
    ],
    'plugin/no-low-performance-animation-properties': true, // 禁止使用低性能动画 和 过渡属性 & 耗时长，新增项目可打开

    'csstree/validator': {
        syntaxExtensions: ['sass'],
    },
    'plugin/declaration-block-no-ignored-properties': true,
    'font-family-no-missing-generic-family-keyword': [
        true,
        {
            ignoreFontFamilies: [],
        },
    ],
};

export default {
    plugins: [
        'stylelint-high-performance-animation',
        'stylelint-no-unsupported-browser-features',
        // 'stylelint-csstree-validator',
        '@carlosjeurissen/stylelint-csstree-validator',
        'stylelint-declaration-block-no-ignored-properties',
    ],
    extends: ['stylelint-config-recommended-scss'],
    // 规则
    rules: {
        ...vueSpecificRules,
        ...presets,
        // 后续disable的规则
        'function-no-unknown': null, // scss 兼容性问题
    },
};
