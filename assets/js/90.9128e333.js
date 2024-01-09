(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{379:function(t,s,n){"use strict";n.r(s);var a=n(10),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" Vue")]),t._v(" "),s("h2",{attrs:{id:"_1、v-if、v-for绑定在同一元素怎么办-优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、v-if、v-for绑定在同一元素怎么办-优先级"}},[t._v("#")]),t._v(" 1、v-if、v-for绑定在同一元素怎么办，优先级？")]),t._v(" "),s("p",[t._v("2.x 版本中在一个元素上同时使用 "),s("code",[t._v("v-if")]),t._v(" 和 "),s("code",[t._v("v-for")]),t._v(" 时， "),s("code",[t._v("v-for")]),t._v(" 会优先作用。")]),t._v(" "),s("p",[t._v("3.x 版本中 "),s("code",[t._v("v-if")]),t._v(" 总是优先于 "),s("code",[t._v("v-for")]),t._v(" 生效。")]),t._v(" "),s("p",[t._v("eslint 可以设置规则 "),s("code",[t._v("vue/no-use-v-if-with-v-for")]),t._v(" 进行避免。")]),t._v(" "),s("p",[t._v("参考文章：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://v3-migration.vuejs.org/zh/breaking-changes/v-if-v-for.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("v-if 与 v-for 的优先级对比 | Vue 3 迁移指南"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://eslint.vuejs.org/rules/no-use-v-if-with-v-for",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue/no-use-v-if-with-v-for"),s("OutboundLink")],1)])]),t._v(" "),s("p",[s("strong",[t._v("为什么这么处理")])]),t._v(" "),s("p",[t._v("在 Vue 3 源码中，处理 "),s("code",[t._v("v-for")]),t._v(" 和 "),s("code",[t._v("v-if")]),t._v(" 指令的逻辑主要位于编译器部分，这包括将模板编译成渲染函数的代码。这些功能通常分布在几个不同的文件中，主要集中在编译器（compiler）目录下。关键文件和代码部分主要包括：")]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[s("code",[t._v("parse")]),t._v(" 函数")]),t._v("（位于 "),s("code",[t._v("compiler-core/src/parse.ts")]),t._v("）: 这个函数负责解析模板，将模板字符串转换成抽象语法树（AST）。在这个阶段，"),s("code",[t._v("v-for")]),t._v(" 和 "),s("code",[t._v("v-if")]),t._v(" 作为指令被识别，并附加到相应的 AST 节点上。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("指令处理")]),t._v("（可能分布在如 "),s("code",[t._v("compiler-core/src/transforms/vFor.ts")]),t._v(" 和 "),s("code",[t._v("compiler-core/src/transforms/vIf.ts")]),t._v("）: 这些文件包含用于处理 "),s("code",[t._v("v-for")]),t._v(" 和 "),s("code",[t._v("v-if")]),t._v(" 的特定逻辑。这些转换函数会检查 AST 节点，应用相应的逻辑，并可能修改或增强 AST。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("优先级处理")]),t._v("：Vue 的编译器在处理指令时遵循特定的优先级。通常，"),s("code",[t._v("v-for")]),t._v(" 指令的处理会在 "),s("code",[t._v("v-if")]),t._v(" 之前，这是因为在 AST 转换阶段，处理 "),s("code",[t._v("v-for")]),t._v(" 的逻辑会先于 "),s("code",[t._v("v-if")]),t._v(" 执行。这反映在它们在代码中的调用顺序上。")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("代码生成")]),t._v("（位于 "),s("code",[t._v("compiler-core/src/codegen.ts")]),t._v("）: 在 AST 转换后，编译器将 AST 转换成渲染函数的代码。在这个阶段，"),s("code",[t._v("v-for")]),t._v(" 和 "),s("code",[t._v("v-if")]),t._v(" 的处理结果被转换成 JavaScript 代码。")])])]),t._v(" "),s("p",[t._v("关键代码示例（概念性说明，非实际代码）：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue3-core/packages/compiler-core/src/compile.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBaseTransformPreset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prefixIdentifiers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TransformPreset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            transformOnce"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            transformIf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            transformMemo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            transformFor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__COMPAT__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("transformFilter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("__BROWSER__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" prefixIdentifiers "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// order is important")]),t._v("\n                    trackVForSlotScopes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    transformExpression\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                __BROWSER__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" __DEV__ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("transformExpression"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            transformSlotOutlet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            transformElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            trackSlotScopes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            transformText\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" transformOn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bind")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" transformBind"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("model")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" transformModel\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue2-core/src/compiler/parser/index.ts")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inVPre"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processRawAttrs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("processed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// structural directives")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结构指示")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processFor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processIf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("processOnce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parse.ts ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对 if for 进行 warn 提示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hasIf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" hasFor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("warnDeprecation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        CompilerDeprecationTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("COMPILER_V_IF_V_FOR_PRECEDENCE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("要完全理解这些代码的工作原理，建议查阅 Vue 3 的官方源码库，特别是编译器部分的代码。由于 Vue 的源代码经常更新，最准确的方法是直接查看最新版本的代码库。")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("讲讲v-model的原理")]),t._v(" "),s("p",[t._v("vue的最佳实践是什么？")]),t._v(" "),s("p",[t._v("如果需要你起一个新的vue项目，你会怎么去做，会用哪些工具、框架，需要怎么组织文件结构？")])])}),[],!1,null,null,null);s.default=r.exports}}]);