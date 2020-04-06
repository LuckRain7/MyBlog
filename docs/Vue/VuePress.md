# VuePress

>  Vue 驱动的静态网站生成器 

### 1.4 目录结构

VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：

```
├── docs
│   ├── .vuepress (可选的)
│   │   ├── components (可选的)
│   │   ├── theme (可选的)
│   │   │   └── Layout.vue
│   │   ├── public (可选的)
│   │   ├── styles (可选的)
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── templates (可选的, 谨慎配置)
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── config.js (可选的)
│   │   └── enhanceApp.js (可选的)
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

注意：请留意目录名的大写。

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的 `Vue` 组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`: 用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关的文件。
- `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 `CSS` 文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 `stylus` 颜色常量。
- `docs/.vuepress/public`: 静态资源目录。
- `docs/.vuepress/templates`: 存储 `HTML` 模板文件。
- `docs/.vuepress/templates/dev.html`: 用于开发环境的 `HTML` 模板文件。
- `docs/.vuepress/templates/ssr.html`: 构建时基于 `Vue SSR` 的 `HTML` 模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

**注意**：

1. 当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html) 来修改，否则可能会导致构建出错。
2. 还有就是笔者的  `templates/ssr.html` 和 `templates/dev.html` 是有添加如下这一行代码的：

```
<meta id="referrer" name="referrer" content="never" />
```

因为笔者的图片都是存在简书上的，所以为了可以访问第三方图床的图片，才添加了这句代码，如果你的图片是存在本地的，去掉这句代码即可，至于具体原因请看笔者写的文章：[前端解决第三方图片防盗链的办法 - html referrer 访问图片资源403问题](https://github.com/biaochenxuying/blog/issues/31) 。

1. 笔者的目录也是按官方推荐的来的，如下：

![img](https://segmentfault.com/img/remote/1460000021234363)