---
sidebar: auto
---

# Event Loop

## 什么是事件循环

在了解事件循环前，需要一些有关 JavaScript 特性的前置知识。

JavaScript 引擎是单线程的，直白来说就是一个时间点下 JavaScript 引擎只能去做一件事情，而 Java 这种多线程语言，可以同时做几件事情。

JavaScript 做的任务分为同步和异步两种，所谓 "异步"，简单说就是一个任务不是连续完成的，先执行第一段，等做好了准备，再回过头执行第二段，第二段也被叫做回调；同步则是连贯完成的。

像读取文件、网络请求这种任务属于异步任务：花费时间很长，但中间的操作不需要 JavaScript 引擎自己完成，它只用等别人准备好了，把数据给他，他再继续执行回调部分。

如果没有特殊处理，JavaScript 引擎在执行异步任务时，应该是存在等待的，不去做任何其他事情。用一个图来展示这个过程，可以看出，在执行异步任务时有大量的空闲时间被浪费。

实际上这是大多数多线程语言的处理办法。但对于 JavaScript 这种单线程语言来说，这种长时间的空闲等待是不可接受的：遇到其他紧急任务，Java 可以再开一个线程去处理，JavaScript 却只能等。

所以采取了以下的“异步任务回调通知”模式：

![JavaScript 线程](/img/js-thread.png)

在等待异步任务准备的同时，JavaScript 引擎去执行其他同步任务，等到异步任务准备好了，再去执行回调。这种模式的优势显而易见，完成相同的任务，花费的时间大大减少，这种方式也被叫做非阻塞式。

而实现这个“通知”的，正是事件循环，把异步任务的回调部分交给事件循环，等时机合适交还给 JavaScript 线程执行。事件循环并不是 JavaScript 首创的，它是计算机的一种运行机制。

事件循环是由一个队列组成的，异步任务的回调遵循先进先出，在 JavaScript 引擎空闲时会一轮一轮地被取出，所以被叫做循环。

根据队列中任务的不同，分为宏任务和微任务。

## 宏任务和微任务

事件循环由宏任务和在执行宏任务期间产生的所有微任务组成。完成当下的宏任务后，会立刻执行所有在此期间入队的微任务。

这种设计是为了给紧急任务一个插队的机会，否则新入队的任务永远被放在队尾。区分了微任务和宏任务后，本轮循环中的微任务实际上就是在插队，这样微任务中所做的状态修改，在下一轮事件循环中也能得到同步。

常见的宏任务有：

- script（整体代码）
- setTimout
- setInterval
- setImmediate(node 独有)
- requestAnimationFrame(浏览器独有)
- IO
- UI render（浏览器独有）

常见的微任务有：

- process.nextTick(node 独有)
- Promise.then()
- Object.observe
- MutationObserver

### 宏任务 setTimeout 的误区

setTimeout 的回调不一定在指定时间后能执行。而是在指定时间后，将回调函数放入事件循环的队列中。

如果时间到了，JavaScript 引擎还在执行同步任务，这个回调函数需要等待；如果当前事件循环的队列里还有其他回调，需要等其他回调执行完。

另外，setTimeout 0ms 也不是立刻执行，它有一个默认最小时间，为 4ms。

所以下面这段代码的输出结果不一定：

```javascript
// node
setTimeout(() => {
  console.log("setTimeout");
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});
复制代码;
```

因为取出第一个宏任务之前在执行全局 Script，如果这个时间大于 4ms，这时 setTimeout 的回调函数已经放入队列，就先执行 setTimeout；如果准备时间小于 4ms，就会先执行 setImmediate。

## 浏览器的事件循环

浏览器的事件循环由一个宏任务队列+多个微任务队列组成。

首先，执行第一个宏任务：全局 Script 脚本。产生的的宏任务和微任务进入各自的队列中。执行完 Script 后，把当前的微任务队列清空。完成一次事件循环。

接着再取出一个宏任务，同样把在此期间产生的回调入队。再把当前的微任务队列清空。以此往复。

宏任务队列只有一个，而每一个宏任务都有一个自己的微任务队列，每轮循环都是由一个宏任务+多个微任务组成。

下面的 Demo 展示了微任务的插队过程：

```javascript
Promise.resolve().then(() => {
  console.log("第一个回调函数：微任务1");
  setTimeout(() => {
    console.log("第三个回调函数：宏任务2");
  }, 0);
});
setTimeout(() => {
  console.log("第二个回调函数：宏任务1");
  Promise.resolve().then(() => {
    console.log("第四个回调函数：微任务2");
  });
}, 0);
// 第一个回调函数：微任务1
// 第二个回调函数：宏任务1
// 第四个回调函数：微任务2
// 第三个回调函数：宏任务2
复制代码;
```

打印的结果不是从 1 到 4，而是先执行第四个回调函数，再执行第三个，因为它是一个微任务，比第三个回调函数有更高优先级。

## Node 的事件循环

node 的事件循环比浏览器复杂很多。由 6 个宏任务队列+6 个微任务队列组成。

宏任务按照优先级从高到低依次是：

![/img/node-evnet-loop](/img/node-evnet-loop.png)

其执行规律是：在一个宏任务队列全部执行完毕后，去清空一次微任务队列，然后到下一个等级的宏任务队列，以此往复。一个宏任务队列搭配一个微任务队列。

六个等级的宏任务全部执行完成，才是一轮循环。

其中需要关注的是：Timers、Poll、Check 阶段，因为我们所写的代码大多属于这三个阶段。

1. Timers：定时器 setTimeout/setInterval；
2. Poll ：获取新的 I/O 事件, 例如操作读取文件等；
3. Check：setImmediate 回调函数在这里执行；

除此之外，node 端微任务也有优先级先后：

1. process.nextTick;
2. promise.then 等;

清空微任务队列时，会先执行 process.nextTick，然后才是微任务队列中的其他。

下面这段代码可以佐证浏览器和 node 的差异：

```javascript
console.log('Script开始')
setTimeout(() => {
  console.log('第一个回调函数，宏任务1')
  Promise.resolve().then(function() {
    console.log('第四个回调函数，微任务2')
  })
}, 0)
setTimeout(() => {
  console.log('第二个回调函数，宏任务2')
  Promise.resolve().then(function() {
    console.log('第五个回调函数，微任务3')
  })
}, 0)
Promise.resolve().then(function() {
  console.log('第三个回调函数，微任务1')
})
console.log('Script结束')
复制代码
node端：
Script开始
Script结束
第三个回调函数，微任务1
第一个回调函数，宏任务1
第二个回调函数，宏任务2
第四个回调函数，微任务2
第五个回调函数，微任务3

浏览器
Script开始
Script结束
第三个回调函数，微任务1
第一个回调函数，宏任务1
第四个回调函数，微任务2
第二个回调函数，宏任务2
第五个回调函数，微任务3
复制代码
```

可以看出，在 node 端要等当前等级的所有宏任务完成，才能轮到微任务：`第四个回调函数，微任务2`在两个 setTimeout 完成后才打印。

因为浏览器执行时是一个宏任务+一个微任务队列，而 node 是一整个宏任务队列+一个微任务队列。

### node11.x 前后版本差异

node11.x 之前，其事件循环的规则就如上文所述：先取出完一整个宏任务队列中全部任务，然后执行一个微任务队列。

但在 11.x 之后，node 端的事件循环变得和浏览器类似：先执行一个宏任务，然后是一个微任务队列。但依然保留了宏任务队列和微任务队列的优先级。

可以用下面的 Demo 佐证：

```javascript
console.log("Script开始");
setTimeout(() => {
  console.log("宏任务1（setTimeout)");
  Promise.resolve().then(() => {
    console.log("微任务promise2");
  });
}, 0);
setImmediate(() => {
  console.log("宏任务2");
});
setTimeout(() => {
  console.log("宏任务3（setTimeout)");
}, 0);
console.log("Script结束");
Promise.resolve().then(() => {
  console.log("微任务promise1");
});
process.nextTick(() => {
  console.log("微任务nextTick");
});

复制代码;
```

在 node11.x 之前运行：

```
Script开始
Script结束
微任务nextTick
微任务promise1
宏任务1（setTimeout)
宏任务3（setTimeout)
微任务promise2
宏任务2（setImmediate)
复制代码
```

在 node11.x 之后运行：

```
Script开始
Script结束
微任务nextTick
微任务promise1
宏任务1（setTimeout)
微任务promise2
宏任务3（setTimeout)
宏任务2（setImmediate)
复制代码
```

可以发现，在不同的 node 环境下：

1. 微任务队列中 process.nextTick 都有更高优先级，即使它后进入微任务队列，也会先打印`微任务nextTick`再`微任务promise1`;
2. 宏任务 setTimeout 比 setImmediate 优先级更高，`宏任务2(setImmediate)`是三个宏任务中最后打印的；
3. 在 node11.x 之前，微任务队列要等当前优先级的所有宏任务先执行完，在两个 setTimeout 之后才打印`微任务promise2`；在 node11.x 之后，微任务队列只用等当前这一个宏任务先执行完。

## 结语

事件循环中的任务被分为宏任务和微任务，是为了给高优先级任务一个插队的机会：微任务比宏任务有更高优先级。

node 端的事件循环比浏览器更复杂，它的宏任务分为六个优先级，微任务分为两个优先级。node 端的执行规律是一个宏任务队列搭配一个微任务队列，而浏览器是一个单独的宏任务搭配一个微任务队列。但是在 node11 之后，node 和浏览器的规律趋同。

如果觉得这篇文章对你有帮助，给我点个赞呗～这对我很重要
