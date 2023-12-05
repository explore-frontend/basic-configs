# eslint-plugin-import-isolation

## The Problem

Suppose you have two subdirectories under `pages`:

```
my-project
└── pages
   └── a
   └── b
```

You don't want modules under `a` to import anything from `b`. Existing plugins like [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md) and [eslint-plugin-code-import-patterns](https://www.npmjs.com/package/eslint-plugin-code-import-patterns) address this issue well. However, when you have tens of subdirectories under `pages`, configuring the rules becomes burdensome. This plugin is designed to solve this problem.

## Usage

To use this plugin, configure ESLint as following:

```js
plugins: ['import-isolation'],
rules: {
    'import-isolation/isolation': [
        'error',
        {
            isolationGroups: [
                {
                    directories: [
                        "modules/*",
                        // equivalent to
                        // "modules/a"
                        // "modules/b"
                        // ...
                    ]
                },
                {
                    directories: [
                        "modules/*/pages/*",
                        // equivalent to
                        // "modules/a/pages/aa",
                        // "modules/a/pages/ab",
                        // "modules/b/pages/ba",
                        // ...
                    ]
                },
            ]
        }
    ]
}
```

- `isolationGroups` includes several "isolation groups", where each group uses `directories` to specify multiple directories.
- All directories inside one isolation group cannot import from each other.
- You can use the wildcard `*` to specify multiple directories.
- Taking the example above, `modules/a/a.js` cannot import from `modules/b/b.js`, and `modules/a/pages/pa.js` cannot import from either `modules/a/pages/pb.js` or `modules/b/pages/pa.js`.
