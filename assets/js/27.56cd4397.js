(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{413:function(v,e,_){"use strict";_.r(e);var t=_(28),r=Object(t.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"面试题联盟之-vue-篇"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试题联盟之-vue-篇"}},[v._v("#")]),v._v(" 面试题联盟之 VUE 篇")]),v._v(" "),_("h3",{attrs:{id:"_1-spa-单页面的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-spa-单页面的理解"}},[v._v("#")]),v._v(" 1. SPA 单页面的理解")]),v._v(" "),_("p",[v._v("SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。")]),v._v(" "),_("p",[v._v("优点：")]),v._v(" "),_("p",[v._v("用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；")]),v._v(" "),_("p",[v._v("基于上面一点，SPA 相对对服务器压力小；")]),v._v(" "),_("p",[v._v("前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；")]),v._v(" "),_("p",[v._v("缺点：")]),v._v(" "),_("p",[v._v("初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；")]),v._v(" "),_("p",[v._v("前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；")]),v._v(" "),_("p",[v._v("SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。")]),v._v(" "),_("h3",{attrs:{id:"_2-v-show-与-v-if-有何区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-v-show-与-v-if-有何区别"}},[v._v("#")]),v._v(" 2.v-show 与 v-if 有何区别？")]),v._v(" "),_("p",[v._v("v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是短路的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。")]),v._v(" "),_("p",[v._v("v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。")]),v._v(" "),_("p",[v._v("所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。")]),v._v(" "),_("h3",{attrs:{id:"_3-computed-和-watch-的区别和运用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-computed-和-watch-的区别和运用场景"}},[v._v("#")]),v._v(" "),_("strong",[v._v("3.computed 和 watch 的区别和运用场景？")])]),v._v(" "),_("p",[v._v("computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；")]),v._v(" "),_("p",[v._v("需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；")]),v._v(" "),_("p",[v._v("watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；")]),v._v(" "),_("p",[v._v("需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。")]),v._v(" "),_("h3",{attrs:{id:"_4-组件中-data-为什么是函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-组件中-data-为什么是函数"}},[v._v("#")]),v._v(" "),_("strong",[v._v("4. 组件中 data 为什么是函数")])]),v._v(" "),_("p",[v._v("组件中的data写成一个函数, 数据以函数返回值形式定义, 这样每复用一次组件, 就会返回一份新的data, 类似于给每个组件实例创建一个私有的数据空间, 让各个组件实例维护各自的数据。")]),v._v(" "),_("p",[v._v("而单纯的写成对象形式, 就使得所有组件实例共用了一份data, 就会造成一个变了全都会变的结果。")]),v._v(" "),_("h3",{attrs:{id:"_5-谈谈你对-vue-生命周期的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-谈谈你对-vue-生命周期的理解"}},[v._v("#")]),v._v(" "),_("strong",[v._v("5. 谈谈你对 Vue 生命周期的理解？")])]),v._v(" "),_("p",[v._v("Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。")]),v._v(" "),_("p",[v._v("生命周期函数：")]),v._v(" "),_("p",[v._v("beforeCreate：组件实例被创建之初，组件的属性生效之前")]),v._v(" "),_("p",[v._v("created：组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用")]),v._v(" "),_("p",[v._v("beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用")]),v._v(" "),_("p",[v._v("mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子")]),v._v(" "),_("p",[v._v("beforeUpdate：组件数据更新之前调用，发生在虚拟 DOM 打补丁之前")]),v._v(" "),_("p",[v._v("update：组件数据更新之后")]),v._v(" "),_("p",[v._v("activited：keep-alive 专属，组件被激活时调用")]),v._v(" "),_("p",[v._v("deactivated：keep-alive 专属，组件被销毁时调用")]),v._v(" "),_("p",[v._v("beforeDestory：组件销毁前调用")]),v._v(" "),_("p",[v._v("destoryed：组件销毁后调用")]),v._v(" "),_("h3",{attrs:{id:"_6-组件间的通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-组件间的通信"}},[v._v("#")]),v._v(" "),_("strong",[v._v("6. 组件间的通信")])]),v._v(" "),_("p",[v._v("父子 props/event children ref provide/inject")]),v._v(" "),_("p",[v._v("兄弟 bus vuex")]),v._v(" "),_("p",[v._v("跨级 bus vuex provide inject")]),v._v(" "),_("h3",{attrs:{id:"_7-双向绑定原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-双向绑定原理"}},[v._v("#")]),v._v(" "),_("strong",[v._v("7. 双向绑定原理")])]),v._v(" "),_("p",[v._v("这个问题几乎是面试必问的，回答也是有深有浅，如果本身对这个原理理解不深没必要长篇大论给自己挖坑，基本上要知道核心的 API 是通过 Object.defineProperty() 来劫持各个属性的setter / getter，在数据变动时发布消息给订阅者，触发相应的监听回调，这也是为什么 Vue.js 2.x 不支持 IE8 的原因（IE 8 不支持此 API，且无法通过 polyfill 实现）")]),v._v(" "),_("h3",{attrs:{id:"_8-介绍nexttick"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-介绍nexttick"}},[v._v("#")]),v._v(" "),_("strong",[v._v("8. 介绍nextTick()")])]),v._v(" "),_("p",[v._v("在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后，立即使用这个回调函数，获取更新后的 DOM。")]),v._v(" "),_("ul",[_("li",[v._v("ounter(line")]),v._v(" "),_("li",[v._v("ounter(line")]),v._v(" "),_("li",[v._v("ounter(line")]),v._v(" "),_("li",[v._v("ounter(line")]),v._v(" "),_("li",[v._v("ounter(line")]),v._v(" "),_("li",[v._v("ounter(line")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("// 修改数据复制代码vm.msg = 'Hello'复制代码// DOM 还未更新复制代码Vue.nextTick(function () {复制代码  // DOM 更新复制代码})复制代码\n")])])]),_("h3",{attrs:{id:"_9-在哪个生命周期内调用异步请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-在哪个生命周期内调用异步请求"}},[v._v("#")]),v._v(" "),_("strong",[v._v("9. 在哪个生命周期内调用异步请求？")])]),v._v(" "),_("p",[v._v("可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：")]),v._v(" "),_("p",[v._v("能更快获取到服务端数据，减少页面 loading 时间；")]),v._v(" "),_("p",[v._v("ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；")]),v._v(" "),_("h3",{attrs:{id:"_10-vue-router有哪几种导航钩子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_10-vue-router有哪几种导航钩子"}},[v._v("#")]),v._v(" "),_("strong",[v._v("10.vue-router有哪几种导航钩子？")])]),v._v(" "),_("p",[v._v("三种，")]),v._v(" "),_("p",[v._v("第一种：是全局导航钩子：router.beforeEach(to, from, next)，作用：跳转前进行判断拦截。")]),v._v(" "),_("p",[v._v("第二种：组件内的钩子")]),v._v(" "),_("p",[v._v("第三种：单独路由独享组件")]),v._v(" "),_("h3",{attrs:{id:"_11-mvvm框架是什么-哪些场景适合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_11-mvvm框架是什么-哪些场景适合"}},[v._v("#")]),v._v(" "),_("strong",[v._v("11.mvvm框架是什么？哪些场景适合？")])]),v._v(" "),_("p",[v._v("一个model+view+viewModel框架，数据模型model，viewModel连接两个")]),v._v(" "),_("p",[v._v("区别：vue数据驱动，通过数据来显示视图层而不是节点操作。")]),v._v(" "),_("p",[v._v("场景：数据操作比较多的场景，更加便捷")]),v._v(" "),_("h3",{attrs:{id:"_12-简单介绍一下vuex"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_12-简单介绍一下vuex"}},[v._v("#")]),v._v(" "),_("strong",[v._v("12. 简单介绍一下Vuex")])]),v._v(" "),_("p",[v._v("Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。")]),v._v(" "),_("p",[v._v("（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。")]),v._v(" "),_("p",[v._v("（2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。")]),v._v(" "),_("p",[v._v("主要包括以下几个模块：")]),v._v(" "),_("p",[v._v("State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。")]),v._v(" "),_("p",[v._v("Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。")]),v._v(" "),_("p",[v._v("Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。")]),v._v(" "),_("p",[v._v("Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。")]),v._v(" "),_("p",[v._v("Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。")]),v._v(" "),_("h3",{attrs:{id:"_13-vue-router-路由模式有几种"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_13-vue-router-路由模式有几种"}},[v._v("#")]),v._v(" "),_("strong",[v._v("13.vue-router 路由模式有几种？")])]),v._v(" "),_("p",[v._v("vue-router 有 3 种路由模式：hash、history、abstract，3 种路由模式的说明如下：")]),v._v(" "),_("p",[v._v("hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；")]),v._v(" "),_("p",[v._v("history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；")]),v._v(" "),_("p",[v._v("abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.")]),v._v(" "),_("h3",{attrs:{id:"_14-proxy-与-object-defineproperty-优劣对比-vue3-0使用的就是porxy"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_14-proxy-与-object-defineproperty-优劣对比-vue3-0使用的就是porxy"}},[v._v("#")]),v._v(" "),_("strong",[v._v("14. Proxy 与 Object.defineProperty 优劣对比（vue3.0使用的就是porxy）")])]),v._v(" "),_("p",[v._v("Proxy 的优势如下:")]),v._v(" "),_("p",[v._v("Proxy 可以直接监听对象而非属性；")]),v._v(" "),_("p",[v._v("Proxy 可以直接监听数组的变化；")]),v._v(" "),_("p",[v._v("Proxy 有多达 13 种拦截方法, 不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；")]),v._v(" "),_("p",[v._v("Proxy 返回的是一个新对象, 我们可以只操作新的对象达到目的, 而 Object.defineProperty 只能遍历对象属性直接修改；")]),v._v(" "),_("p",[v._v("Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；")]),v._v(" "),_("p",[v._v("Object.defineProperty 的优势如下:")]),v._v(" "),_("p",[v._v("兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题, 而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。")]),v._v(" "),_("h3",{attrs:{id:"_15-vue-怎么解决对象新增属性不能响应的问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_15-vue-怎么解决对象新增属性不能响应的问题"}},[v._v("#")]),v._v(" "),_("strong",[v._v("15. Vue 怎么解决对象新增属性不能响应的问题 ？")])]),v._v(" "),_("p",[v._v("Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。")]),v._v(" "),_("p",[v._v("但是 Vue 提供了 Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value)  来实现为对象添加响应式属性")]),v._v(" "),_("h3",{attrs:{id:"_16-vue-项目可以进行哪些优化-加分项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_16-vue-项目可以进行哪些优化-加分项"}},[v._v("#")]),v._v(" "),_("strong",[v._v("16. Vue 项目可以进行哪些优化？（加分项）")])]),v._v(" "),_("p",[v._v("（1）代码层面的优化")]),v._v(" "),_("p",[v._v("v-if 和 v-show 区分使用场景")]),v._v(" "),_("p",[v._v("computed 和 watch  区分使用场景")]),v._v(" "),_("p",[v._v("v-for 遍历必须为 item 添加 key，且避免同时使用 v-if")]),v._v(" "),_("p",[v._v("长列表性能优化")]),v._v(" "),_("p",[v._v("事件的销毁")]),v._v(" "),_("p",[v._v("图片资源懒加载")]),v._v(" "),_("p",[v._v("路由懒加载")]),v._v(" "),_("p",[v._v("第三方插件的按需引入")]),v._v(" "),_("p",[v._v("优化无限列表性能")]),v._v(" "),_("p",[v._v("服务端渲染 SSR or 预渲染")]),v._v(" "),_("p",[v._v("（2）Webpack 层面的优化")]),v._v(" "),_("p",[v._v("Webpack 对图片进行压缩")]),v._v(" "),_("p",[v._v("减少 ES6 转为 ES5 的冗余代码")]),v._v(" "),_("p",[v._v("提取公共代码")]),v._v(" "),_("p",[v._v("模板预编译")]),v._v(" "),_("p",[v._v("提取组件的 CSS")]),v._v(" "),_("p",[v._v("优化 SourceMap")]),v._v(" "),_("p",[v._v("构建结果输出分析")]),v._v(" "),_("p",[v._v("Vue 项目的编译优化")]),v._v(" "),_("p",[v._v("（3）基础的 Web 技术的优化")]),v._v(" "),_("p",[v._v("开启 gzip 压缩")]),v._v(" "),_("p",[v._v("浏览器缓存")]),v._v(" "),_("p",[v._v("CDN 的使用")]),v._v(" "),_("p",[v._v("使用 Chrome Performance 查找性能瓶颈")])])}),[],!1,null,null,null);e.default=r.exports}}]);