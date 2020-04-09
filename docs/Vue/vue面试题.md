## 面试题联盟之 VUE 篇

### 1.SPA 单页面的理解

SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

优点：

用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；

基于上面一点，SPA 相对对服务器压力小；

前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

缺点：

初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；

前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；

SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

### 2.v-show 与 v-if 有何区别？

v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是短路的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 “display” 属性进行切换。

所以，v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。

### **3.computed 和 watch 的区别和运用场景？**

computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；

需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；

watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作；

需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。

### **4.组件中 data 为什么是函数**

组件中的data写成一个函数,数据以函数返回值形式定义,这样每复用一次组件,就会返回一份新的data,类似于给每个组件实例创建一个私有的数据空间,让各个组件实例维护各自的数据。

而单纯的写成对象形式,就使得所有组件实例共用了一份data,就会造成一个变了全都会变的结果。

### **5.谈谈你对 Vue 生命周期的理解？**

Vue 实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模版、挂载 Dom -> 渲染、更新 -> 渲染、卸载等一系列过程，我们称这是 Vue 的生命周期。

生命周期函数：

beforeCreate：组件实例被创建之初，组件的属性生效之前

created：组件实例已经完全创建，属性也绑定，但真实 dom 还没有生成，$el 还不可用

beforeMount：在挂载开始之前被调用：相关的 render 函数首次被调用

mounted：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子

beforeUpdate：组件数据更新之前调用，发生在虚拟 DOM 打补丁之前

update：组件数据更新之后

activited：keep-alive 专属，组件被激活时调用

deactivated：keep-alive 专属，组件被销毁时调用

beforeDestory：组件销毁前调用

destoryed：组件销毁后调用

### **6.组件间的通信**

父子 props/event children ref provide/inject

兄弟 bus vuex

跨级 bus vuex provide inject

### **7.双向绑定原理**

这个问题几乎是面试必问的，回答也是有深有浅，如果本身对这个原理理解不深没必要长篇大论给自己挖坑，基本上要知道核心的 API 是通过 Object.defineProperty() 来劫持各个属性的setter / getter，在数据变动时发布消息给订阅者，触发相应的监听回调，这也是为什么 Vue.js 2.x 不支持 IE8 的原因（IE 8 不支持此 API，且无法通过 polyfill 实现）

### **8.介绍nextTick()**

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后，立即使用这个回调函数，获取更新后的 DOM。

- ounter(line
- ounter(line
- ounter(line
- ounter(line
- ounter(line
- ounter(line

```
// 修改数据复制代码vm.msg = 'Hello'复制代码// DOM 还未更新复制代码Vue.nextTick(function () {复制代码  // DOM 更新复制代码})复制代码
```

### **9.在哪个生命周期内调用异步请求？**

可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：

能更快获取到服务端数据，减少页面 loading 时间；

ssr 不支持 beforeMount 、mounted 钩子函数，所以放在 created 中有助于一致性；

### **10.vue-router有哪几种导航钩子？**

三种，

第一种：是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。

第二种：组件内的钩子

第三种：单独路由独享组件

### **11.mvvm框架是什么？哪些场景适合？**

一个model+view+viewModel框架，数据模型model，viewModel连接两个

区别：vue数据驱动，通过数据来显示视图层而不是节点操作。

场景：数据操作比较多的场景，更加便捷

### **12.简单介绍一下Vuex**

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个 Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。

（1）Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。

（2）改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化。

主要包括以下几个模块：

State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。

Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。

Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。

Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。

Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

### **13.vue-router 路由模式有几种？**

vue-router 有 3 种路由模式：hash、history、abstract，3 种路由模式的说明如下：

hash:  使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器；

history :  依赖 HTML5 History API 和服务器配置。具体可以查看 HTML5 History 模式；

abstract :  支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

### **14.Proxy 与 Object.defineProperty 优劣对比（vue3.0使用的就是porxy）**

Proxy 的优势如下:

Proxy 可以直接监听对象而非属性；

Proxy 可以直接监听数组的变化；

Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；

Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；

Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；

Object.defineProperty 的优势如下:

兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。

### **15.Vue 怎么解决对象新增属性不能响应的问题 ？**

Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的。

但是 Vue 提供了 Vue.set (object, propertyName, value) / vm.$set (object, propertyName, value)  来实现为对象添加响应式属性

### **16.Vue 项目可以进行哪些优化？（加分项）**

（1）代码层面的优化

v-if 和 v-show 区分使用场景

computed 和 watch  区分使用场景

v-for 遍历必须为 item 添加 key，且避免同时使用 v-if

长列表性能优化

事件的销毁

图片资源懒加载

路由懒加载

第三方插件的按需引入

优化无限列表性能

服务端渲染 SSR or 预渲染

（2）Webpack 层面的优化

Webpack 对图片进行压缩

减少 ES6 转为 ES5 的冗余代码

提取公共代码

模板预编译

提取组件的 CSS

优化 SourceMap

构建结果输出分析

Vue 项目的编译优化

（3）基础的 Web 技术的优化

开启 gzip 压缩

浏览器缓存

CDN 的使用

使用 Chrome Performance 查找性能瓶颈

