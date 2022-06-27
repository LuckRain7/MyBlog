---
sidebar: auto
---

# 事件

> [迁移文档](https://github.com/LuckRain7/Web-FEDSE/blob/master/docs/module-1/3.md)

[[toc]]

## 事件和事件绑定的底层机制(40+42)

### 什么是事件？什么是事件绑定？

::: tip 事件：
浏览器赋予元素天生默认的一些行为，不论是否绑定相关的方法，只要行为操作进行了，那么一定会触发相关的事件行为
:::

::: tip 事件绑定：
给元素的某一个事件行为绑定方法，目的是行为触发会可以做点自己想做的事情
:::

### 浏览器自带的事件

> https://developer.mozilla.org/zh-CN/docs/Web/Events

- 鼠标事件 (MouseEvent)
- 键盘事件 (KeyboardEvent)
- 表单元素常用事件
- 移动端手指事件 (TouchEvent)
- 音视频常用事件
- 其它常用事件

### 事件绑定 DOM0 事件绑定/DOM2 事件绑定

#### 1、【DOM0 事件绑定】

元素.onxxx=function(){}

元素.onxxx=null;

原理：给 DOM 元素对象的某一个私有事件属性赋值函数值，当用户触发这个事件行为，JS 引擎会帮助我们把之前绑定的方法执行的

1. 不是所有的事件类型都支持这种方式，元素有哪些 onxxx 事件属性，才能给其绑定方法（例如：DOMContentLoaded 事件就不支持这种绑定方案）

2. 只能给当前元素的某一个事件行为绑定一个方法（绑定多个也只能识别最后一个）

#### 2、【DOM2 事件绑定】

元素.addEventListener([事件类型],[方法],[传播模式])

元素.removeEventListener([事件类型],[方法],[传播模式])

```js
​function anonymous(){
​   console.log('ok');
​}
​box.addEventListener('click',anonymous,false);
​box.removeEventListener('click',anonymous,false);
```

**原理：** 基于原型链查找机制，找到 EventTarget.prototype 上的 addEventListener 方法执行，它是基于浏览器事件池机制完成事件绑定的。如果是鼠标操作，获取的是 MouseEvent 类的实例 -> 鼠标事件对象 -> MouseEvent.prototype -> UIEvent.prototype -> Event.prototype -> Object.prototype

每次一事件触发，浏览器都会这样处理一下

捕获到当前操作的行为（把操作信息获取到），通过创建 MouseEvent 等类的实例，得到事件对象 EV
通知所有绑定的方法（符合执行条件的）开始执行，并且把 EV 当做实参传递给每个方法，所以在每个方法中得到的事件对象其实是一个
后面再重新触发这个事件行为，会重新获取本次操作的信息，用新的信息替换老的信息，然后继续之前的步骤。
可以同一个元素绑定多个方法

```js
let AA = null;
box.onclick = function(ev) {
  console.log("DOM0-1", ev);
  AA = ev;
};
box.addEventListener("click", (ev) => {
  console.log("DOM2-1", ev === AA);
});
box.addEventListener("click", (\_) => {
  console.log("DOM2-2");
});
box.onclick = function() {
  console.log("DOM0-2");
};

// 点击后打印
// DOM2-1 true
// DOM2-2
// DOM0-2
```
