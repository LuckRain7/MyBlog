(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{486:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正则"}},[t._v("#")]),t._v(" 正则")]),t._v(" "),a("p",[t._v("用来处理字符串的规则")]),t._v(" "),a("ul",[a("li",[t._v("只能处理字符串")]),t._v(" "),a("li",[t._v("他是一个规则：可以验证字符串是否符合某些规则（test），也可以吧字符串中符合规则的内容捕捉到（exec/match）")])]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"good good study, day day up!"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\d+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-07-25"')]),t._v("\nreg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// ["2021", index: 0, input: "2021-07-25", groups: undefined]')]),t._v("\n")])])]),a("h2",{attrs:{id:"编写正则表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写正则表达式"}},[t._v("#")]),t._v(" 编写正则表达式")]),t._v(" "),a("p",[t._v("创建方式有两种")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自变量方式常见（两个斜杠之间抱起来，描述规则的元字符）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\d+")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数模式创建 参数（元字符字符串，修饰符字符串）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\d+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("正则表达式由两部分组成")]),t._v(" "),a("ul",[a("li",[t._v("元字符")]),t._v(" "),a("li",[t._v("修饰符")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/* 常用元字符 */\n# 1. 量词元字符 设置出现的次数\n*       // 零到多次\n+       // 一到多次\n?       // 零次或者一次\n{n}     // 出现n次\n{n,}    // 出现n到多次\n{n,m}   // 出现n到m次\n\n# 2. 特殊元字符 单个或者组合再一起代表特殊的含义\n\\       // 转义字符\n.       // 除\\n(换行符)意外的任意字符\n^       // 以哪一个元字符作为开始\n$       // 以哪一个元字符作为结束\n\\n      // 换行符\n\\d      // 0-9 之间的一个数字\n\\D      // 非0-9之间的一个数字（大写和小写的意思相反）\n\\w      // 数字、字符、下划线中任意一个字符\n\\s      // 一个空白字符(包含空格、制表符、换页符等)\n\\t      // 一个制表符（一个TAB键：四个空格）\n\\b      // 匹配一个单词的边界\nx|y     // x或y中的一个字符\n[xyz]   // xyz中的一个字符\n[^]     // 除了xy以外的任意字符\n[a-z]   // 指定a-z这个范围中的任意字符 [0-9a-zA-Z_]===\\w\n[^a-z]  // 除了a-\n()      // 正则中的分组符号\n(?:)    // 只匹配不捕获\n(?=)    // 正向预查\n(?!)    // 负向预查\n\n# 3. 普通元字符：代表本身含义的\n/rain/  // 此正则匹配的是rain\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/* 正则表达式常用的修饰符 */\ni       // 忽略大小写匹配\nm       // 进行多次匹配\ng       // 全局匹配\n")])])]),a("h2",{attrs:{id:"常用正则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用正则"}},[t._v("#")]),t._v(" 常用正则")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("d+$/    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配是否是纯数字")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("+?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 匹配对象")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("测试用例:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export default definePageConfig({\n   navigationBarTitleText: '反馈页',\n   enableShareAppMessage: true,\n   fixTitle: true\n});\n")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);