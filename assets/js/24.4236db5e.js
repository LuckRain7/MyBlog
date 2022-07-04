(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{298:function(e,s,t){"use strict";t.r(s);var v=t(10),_=Object(v.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[e._v("#")]),e._v(" VuePress")]),e._v(" "),s("blockquote",[s("p",[e._v("Vue 驱动的静态网站生成器")])]),e._v(" "),s("h3",{attrs:{id:"_1-4-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-目录结构"}},[e._v("#")]),e._v(" 1.4 目录结构")]),e._v(" "),s("p",[e._v("VuePress 遵循 “约定优于配置” 的原则，推荐的目录结构如下：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])])]),s("p",[e._v("注意：请留意目录名的大写。")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("docs/.vuepress")]),e._v(": 用于存放全局的配置、组件、静态资源等。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/components")]),e._v(": 该目录中的 "),s("code",[e._v("Vue")]),e._v(" 组件将会被自动注册为全局组件。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/theme")]),e._v(": 用于存放本地主题。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles")]),e._v(": 用于存放样式相关的文件。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles/index.styl")]),e._v(": 将会被自动应用的全局样式文件，会生成在最终的 "),s("code",[e._v("CSS")]),e._v(" 文件结尾，具有比默认样式更高的优先级。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/styles/palette.styl")]),e._v(": 用于重写默认颜色常量，或者设置新的 "),s("code",[e._v("stylus")]),e._v(" 颜色常量。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/public")]),e._v(": 静态资源目录。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates")]),e._v(": 存储 "),s("code",[e._v("HTML")]),e._v(" 模板文件。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates/dev.html")]),e._v(": 用于开发环境的 "),s("code",[e._v("HTML")]),e._v(" 模板文件。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/templates/ssr.html")]),e._v(": 构建时基于 "),s("code",[e._v("Vue SSR")]),e._v(" 的 "),s("code",[e._v("HTML")]),e._v(" 模板文件。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/config.js")]),e._v(": 配置文件的入口文件，也可以是 "),s("code",[e._v("YML")]),e._v(" 或 "),s("code",[e._v("toml")]),e._v("。")]),e._v(" "),s("li",[s("code",[e._v("docs/.vuepress/enhanceApp.js")]),e._v(": 客户端应用的增强。")])]),e._v(" "),s("p",[s("strong",[e._v("注意")]),e._v("：")]),e._v(" "),s("ol",[s("li",[e._v("当你想要去自定义 "),s("code",[e._v("templates/ssr.html")]),e._v(" 或 "),s("code",[e._v("templates/dev.html")]),e._v(" 时，最好基于 "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("默认的模板文件"),s("OutboundLink")],1),e._v(" 来修改，否则可能会导致构建出错。")]),e._v(" "),s("li",[e._v("还有就是笔者的  "),s("code",[e._v("templates/ssr.html")]),e._v(" 和 "),s("code",[e._v("templates/dev.html")]),e._v(" 是有添加如下这一行代码的：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<meta id="referrer" name="referrer" content="never" />\n')])])]),s("p",[e._v("因为笔者的图片都是存在简书上的，所以为了可以访问第三方图床的图片，才添加了这句代码，如果你的图片是存在本地的，去掉这句代码即可，至于具体原因请看笔者写的文章："),s("a",{attrs:{href:"https://github.com/biaochenxuying/blog/issues/31",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端解决第三方图片防盗链的办法 - html referrer 访问图片资源403问题"),s("OutboundLink")],1),e._v(" 。")]),e._v(" "),s("ol",[s("li",[e._v("笔者的目录也是按官方推荐的来的，如下：")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://segmentfault.com/img/remote/1460000021234363",alt:"img"}})])])}),[],!1,null,null,null);s.default=_.exports}}]);