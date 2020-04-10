(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{228:function(t,e,s){"use strict";s.r(e);var a=s(17),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" Vuex")]),t._v(" "),s("h2",{attrs:{id:"_1-数据持久化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据持久化"}},[t._v("#")]),t._v(" 1.  数据持久化")]),t._v(" "),s("p",[t._v("解决浏览器刷新后数据消失问题")]),t._v(" "),s("p",[t._v("利用vuex-persistedstate插件，将vuex的数据存储到浏览器中，刷新后重新拿出来导入vuex中")]),t._v(" "),s("ul",[s("li",[t._v("安装")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuex-persistedstate  --save\nor\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuex-persistedstate\n")])])]),s("ul",[s("li",[t._v("API\n"),s("ul",[s("li",[s("code",[t._v("key<String>")]),t._v(": The key to store the persisted state under. Defaults to "),s("code",[t._v("vuex")]),t._v(".（设置存储key值）")]),t._v(" "),s("li",[s("code",[t._v("paths<Array>")]),t._v(': An array of any paths to partially persist the state. If no paths are given, the complete state is persisted. If an empty array is given, no state is persisted. Paths must be specified using dot notation. If using modules, include the module name. eg: "auth.user" Defaults to '),s("code",[t._v("undefined")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("reducer<Function>")]),t._v(": A function that will be called to reduce the state to persist based on the given paths. Defaults to include the values.（设置需求数据进行数据持久化）")]),t._v(" "),s("li",[s("code",[t._v("subscriber<Function>")]),t._v(": A function called to setup mutation subscription. Defaults to "),s("code",[t._v("store => handler => store.subscribe(handler)")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("storage<Object>")]),t._v(": Instead for (or in combination with) "),s("code",[t._v("getState")]),t._v(" and "),s("code",[t._v("setState")]),t._v(". Defaults to localStorage.（设置存储位置）")]),t._v(" "),s("li",[s("code",[t._v("getState<Function>")]),t._v(": A function that will be called to rehydrate a previously persisted state. Defaults to using "),s("code",[t._v("storage")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("setState<Function>")]),t._v(": A function that will be called to persist the given state. Defaults to using "),s("code",[t._v("storage")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("filter<Function>")]),t._v(": A function that will be called to filter any mutations which will trigger "),s("code",[t._v("setState")]),t._v(" on storage eventually. Defaults to "),s("code",[t._v("() => true")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("overwrite<Boolean>")]),t._v(": When rehydrating, whether to overwrite the existing state with the output from "),s("code",[t._v("getState")]),t._v(" directly, instead of merging the two objects with "),s("code",[t._v("deepmerge")]),t._v(". Defaults to "),s("code",[t._v("false")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("arrayMerger<Function>")]),t._v(": A function for merging arrays when rehydrating state. Defaults to "),s("code",[t._v("function (store, saved) { return saved }")]),t._v(" (saved state replaces supplied state).")]),t._v(" "),s("li",[s("code",[t._v("rehydrated<Function>")]),t._v(": A function that will be called when the rehydration is finished. Useful when you are using Nuxt.js, which the rehydration of the persisted state happens asynchronously. Defaults to "),s("code",[t._v("store => {}")])]),t._v(" "),s("li",[s("code",[t._v("fetchBeforeUse<Boolean>")]),t._v(": A boolean indicating if the state should be fetched from storage before the plugin is used. Defaults to "),s("code",[t._v("false")]),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("assertStorage<Function>")]),t._v(": An overridable function to ensure storage is available, fired on plugins's initialization. Default one is performing a Write-Delete operation on the given Storage instance. Note, default behaviour could throw an error (like "),s("code",[t._v("DOMException: QuotaExceededError")]),t._v(").")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" createPersistedState "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuex-persistedstate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认存储到localStorage")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPersistedState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPersistedState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改存储key值")]),t._v("\n      key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module-vuex-key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改存储位置")]),t._v("\n      storage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sessionStorage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置需要的数据进行持久化")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          userInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("ul",[s("li",[t._v("vuex引用多个插件的写法")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugins1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugins2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("hr"),t._v(" "),s("Vue")],1)}),[],!1,null,null,null);e.default=n.exports}}]);