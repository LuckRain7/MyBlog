---
sidebar: auto
---

# 异步编程

## 一、理解异步

### 1、首先大家了解几个概念

#### (1) JavaScript 单线程

Why？-> 与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？

#### (2) 浏览器是多个线程

- GUI 渲染线程（webkit 内核）：渲染页面 HTML CSS
- JS 引擎线程（单线程）：执行 JS 代码
- 事件触发线程 ：控制交互
- 定时触发器线程 ： setTimeout 和 setInteval
- 异步 http 请求线程 ：处理 ajax 请求等
- 事件轮询处理线程 ： 轮询消息队列，event loop

#### (3) 执行模式 ：同步（Synchronous）和 异步（Asynchronous）

同步（Synchronous）模式：任务依次执行，后一个任务需等待前一任务解说，然后再执行。

获取后台数据，若是同步的话，需要等到数据返回，才能做其他事情，此时若是网络不好，接下来的操作也无法执行了，所以出现了异步解决方案。

异步（Asynchronous）模式：每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。

#### (4) 微任务 宏任务

微任务包括 `process.nextTick` ， `promise` ， `MutationObserver` ，其中 `process.nextTick` 为 Node 独有。

宏任务包括 `script` ， `setTimeout` ， `setInterval` ， `setImmediate` ， `I/O` ， `UI rendering` 。

这里很多人会有个误区，认为微任务快于宏任务，其实是错误的。因为宏任务中包括了 `script` ，浏览器会先执行一个宏任务，接下来有异步代码的话才会先执行微任务。

#### (5) Event Loop（事件轮询）

Event Loop 是一个程序结构，用于等待和发送消息和事件。

Event Loop 执行顺序如下所示：

- 首先执行同步代码，这属于宏任务
- 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
- 执行所有微任务
- 当执行完所有微任务后，如有必要会渲染页面
- 然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 `setTimeout` 中的回调函数

**综上大家是否理解**

## 二、异步解决方案

### (1) 回调函数

```js
console.log(1);

function ajax(callback) {
  setTimeout(function() {
    const data = "已拿到数据";
    callback(data);
  }, 2000);
}
console.log(2);
ajax(function(data) {
  console.log(data);
});
console.log(3);
//结果 1 -> 2 -> 3 -> 已拿到数据
```

### (2) Promise

> Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了 `Promise` 对象。

```js
const getAjaxData = new Promise(function(resolve, reject) {
  axios.get("/data").then(({ data }) => {
    if (data.code === 1) {
      //成功 resolve()出数据
      resolve(data.data);
    } else {
      // 失败reject() 出错误信息
      reject(error);
    }
  });
});

getAjaxData.then(function(value) {
  // 使用拿到的数据
  render(value);
});
```

### (3) Generator

> Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同

```js
const fs = require("fs");

const readFile = function(fileName) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function*() {
  const f1 = yield readFile("/etc/fstab");
  const f2 = yield readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};
```

### (4) Async/Await

> ES2017 标准引入了 async 函数，使得异步操作变得更加方便。
>
> async 函数是什么？一句话，它就是 Generator 函数的语法糖。

```js
const asyncReadFile = async function() {
  const f1 = await readFile("/etc/fstab");
  const f2 = await readFile("/etc/shells");
  console.log(f1.toString());
  console.log(f2.toString());
};
```

---

参考文章：

[Javascript 异步编程的 4 种方法- 阮一峰](http://www.ruanyifeng.com/blog/2012/12/asynchronous＿javascript.html)

[《ECMAScript 6 入门教程》](https://es6.ruanyifeng.com/)
