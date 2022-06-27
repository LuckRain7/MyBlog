(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{491:function(t,s,a){"use strict";a.r(s);var n=a(35),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[t._v("#")]),t._v(" 事件")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/LuckRain7/Web-FEDSE/blob/master/docs/module-1/3.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("迁移文档"),a("OutboundLink")],1)])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#事件和事件绑定的底层机制-40-42"}},[t._v("事件和事件绑定的底层机制(40+42)")]),a("ul",[a("li",[a("a",{attrs:{href:"#什么是事件-什么是事件绑定"}},[t._v("什么是事件？什么是事件绑定？")])]),a("li",[a("a",{attrs:{href:"#浏览器自带的事件"}},[t._v("浏览器自带的事件")])]),a("li",[a("a",{attrs:{href:"#事件绑定-dom0-事件绑定-dom2-事件绑定"}},[t._v("事件绑定 DOM0 事件绑定/DOM2 事件绑定")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"事件和事件绑定的底层机制-40-42"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件和事件绑定的底层机制-40-42"}},[t._v("#")]),t._v(" 事件和事件绑定的底层机制(40+42)")]),t._v(" "),a("h3",{attrs:{id:"什么是事件-什么是事件绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件-什么是事件绑定"}},[t._v("#")]),t._v(" 什么是事件？什么是事件绑定？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("事件：")]),t._v(" "),a("p",[t._v("浏览器赋予元素天生默认的一些行为，不论是否绑定相关的方法，只要行为操作进行了，那么一定会触发相关的事件行为")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("事件绑定：")]),t._v(" "),a("p",[t._v("给元素的某一个事件行为绑定方法，目的是行为触发会可以做点自己想做的事情")])]),t._v(" "),a("h3",{attrs:{id:"浏览器自带的事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器自带的事件"}},[t._v("#")]),t._v(" 浏览器自带的事件")]),t._v(" "),a("blockquote",[a("p",[t._v("https://developer.mozilla.org/zh-CN/docs/Web/Events")])]),t._v(" "),a("ul",[a("li",[t._v("鼠标事件 (MouseEvent)")]),t._v(" "),a("li",[t._v("键盘事件 (KeyboardEvent)")]),t._v(" "),a("li",[t._v("表单元素常用事件")]),t._v(" "),a("li",[t._v("移动端手指事件 (TouchEvent)")]),t._v(" "),a("li",[t._v("音视频常用事件")]),t._v(" "),a("li",[t._v("其它常用事件")])]),t._v(" "),a("h3",{attrs:{id:"事件绑定-dom0-事件绑定-dom2-事件绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定-dom0-事件绑定-dom2-事件绑定"}},[t._v("#")]),t._v(" 事件绑定 DOM0 事件绑定/DOM2 事件绑定")]),t._v(" "),a("h4",{attrs:{id:"_1、【dom0-事件绑定】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、【dom0-事件绑定】"}},[t._v("#")]),t._v(" 1、【DOM0 事件绑定】")]),t._v(" "),a("p",[t._v("元素.onxxx=function(){}")]),t._v(" "),a("p",[t._v("元素.onxxx=null;")]),t._v(" "),a("p",[t._v("原理：给 DOM 元素对象的某一个私有事件属性赋值函数值，当用户触发这个事件行为，JS 引擎会帮助我们把之前绑定的方法执行的")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("不是所有的事件类型都支持这种方式，元素有哪些 onxxx 事件属性，才能给其绑定方法（例如：DOMContentLoaded 事件就不支持这种绑定方案）")])]),t._v(" "),a("li",[a("p",[t._v("只能给当前元素的某一个事件行为绑定一个方法（绑定多个也只能识别最后一个）")])])]),t._v(" "),a("h4",{attrs:{id:"_2、【dom2-事件绑定】"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、【dom2-事件绑定】"}},[t._v("#")]),t._v(" 2、【DOM2 事件绑定】")]),t._v(" "),a("p",[t._v("元素.addEventListener([事件类型],[方法],[传播模式])")]),t._v(" "),a("p",[t._v("元素.removeEventListener([事件类型],[方法],[传播模式])")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("​"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("anonymous")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n​   console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ok'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n​"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n​box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n​box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("anonymous"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("原理：")]),t._v(" 基于原型链查找机制，找到 EventTarget.prototype 上的 addEventListener 方法执行，它是基于浏览器事件池机制完成事件绑定的。如果是鼠标操作，获取的是 MouseEvent 类的实例 -> 鼠标事件对象 -> MouseEvent.prototype -> UIEvent.prototype -> Event.prototype -> Object.prototype")]),t._v(" "),a("p",[t._v("每次一事件触发，浏览器都会这样处理一下")]),t._v(" "),a("p",[t._v("捕获到当前操作的行为（把操作信息获取到），通过创建 MouseEvent 等类的实例，得到事件对象 EV\n通知所有绑定的方法（符合执行条件的）开始执行，并且把 EV 当做实参传递给每个方法，所以在每个方法中得到的事件对象其实是一个\n后面再重新触发这个事件行为，会重新获取本次操作的信息，用新的信息替换老的信息，然后继续之前的步骤。\n可以同一个元素绑定多个方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOM0-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ev")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOM2-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("\\_")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOM2-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DOM0-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 点击后打印")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM2-1 true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM2-2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM0-2")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);