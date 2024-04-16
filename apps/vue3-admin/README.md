# template

forked from [vitesse](https://github.com/antfu/vitesse)

## 需要准备的 vscode 插件

打开项目的时候会自动提示安装。

## TLDR

-   pages 文件夹：约定式路由，会自动根据 pages 文件夹下面生成
-   layout 与 page 分离，默认的 page 都会自动使用 layouts/default.vue，使用其他 layout 的方法参见 [layouts/README.md](./src/layouts)
-   通过 unocss 内置了 [tailwind](https://tailwindcss.com/docs) preset 写样式的时候可以优先按照这种风格来
-   集成了 [VueUse](https://github.com/antfu/vueuse) 可能找到一些有用的工具
-   SSG by [vite-ssg](https://github.com/antfu/vite-ssg).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
pnpx degit xx my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Checklist

When you use this template, try follow the checklist to update your info properly

-   [ ] Rename `name` field in `package.json`
-   [ ] Change the author name in `LICENSE`
-   [ ] Change the title in `App.vue`
-   [ ] Change the favicon in `public`
-   [ ] Remove the `.github` folder which contains the funding info
-   [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3333

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that ready to be served.
