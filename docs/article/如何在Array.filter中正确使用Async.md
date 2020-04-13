---
sidebar: auto
---

# 如何在 Array.filter 中正确使用 Async

![](/img/article/20200413/header.png)

> 本文译自[How to use async functions with Array.filter in Javascript -  **Tamás Sallai** ]( https://advancedweb.hu/how-to-use-async-functions-with-array-filter-in-javascript/ )。 

## 0.  如何仅保留满足异步条件的元素 

在[第一篇文章中](https://advancedweb.hu/asynchronous-array-functions-in-javascript/)，我们介绍了 async / await 如何帮助处理异步事件，但在异步处理集合时却无济于事。在本文中，我们将研究该`filter`函数，它可能是支持异步函数的最直观的方法。

## 1.  Array.filter

该`filter`函数仅保留通过条件的元素。它得到一个断言( *predicate* )函数，并且此函数返回 true / false 值。结果集合仅包含断言( *predicate* )返回 true 的元素。

```javascript
const arr = [1, 2, 3, 4, 5];

const syncRes = arr.filter((i) => {
	return i % 2 === 0;
});

console.log(syncRes);
// 2,4
```

## 2.  filter 结合 map 使用

这次的异步版本要复杂一些，它分为两个阶段。第一个通过断言函数异步地映射数组，从而生成true / false 值。然后第二步是利用第一步的结果同步 `filter`

![](/img/article/20200413/Async-filter.png)

```javascript
const arr = [1, 2, 3, 4, 5];

const asyncFilter = async (arr, predicate) => {
	const results = await Promise.all(arr.map(predicate));

	return arr.filter((_v, index) => results[index]);
}

const asyncRes = await asyncFilter(arr, async (i) => {
	await sleep(10);
	return i % 2 === 0;
});

console.log(asyncRes);
// 2,4
```

或单行实现：

```javascript
const asyncFilter = async (arr, predicate) => Promise.all(arr.map(predicate))
	.then((results) => arr.filter((_v, index) => results[index]));
```

![](/img/article/20200413/Async-filter-with-map.png)

### 并发

上面的实现同时运行所有断言函数。通常，这很好，但是与所有其他功能一样，它可能会使某些资源变得过分紧张。幸运的是，由于上述实现依赖于此 `map`，[因此可以使用相同的并发控件](https://advancedweb.hu/how-to-use-async-functions-with-array-map-in-javascript/)。

## 4.  filter 结合 reduce 使用

除了使用异步 `map` 与同步之外 `filter` ，异步 `reduce`  [也可以完成这项工作](https://advancedweb.hu/how-to-use-async-functions-with-array-reduce-in-javascript/)。由于它只是一个功能，因此即使没有提供相同级别的控制，结构也更加容易。

首先，从一个空数组（`[]`）开始。然后通过断言函数运行下一个元素，如果通过则将其追加到数组。如果没有，请跳过它。

![](/img/article/20200413/Async-filter-with-reduce.png)

```javascript
// concurrently
const asyncFilter = async (arr, predicate) => 
	arr.reduce(async (memo, e) =>
		await predicate(e) ? [...await memo, e] : memo
	, []);
```

![](/img/article/20200413/Async-filter-with-reduce2.png)
 
请注意，`await predicate(e)` 在 `await memo` 之前，这意味着这些将并行调用。

### 顺序处理

要在调用下一个谓词函数之前等待其结束，请更改 `await`  的顺序：

```javascript
// sequentially
const asyncFilter = async (arr, predicate) => 
	arr.reduce(async (memo, e) => 
		[...await memo, ...await predicate(e) ? [e] : []]
	, []);
```

此实现等待上一个元素，然后根据断言（`...[e]`或`...[]`）的结果有条件地附加一个元素。

![](/img/article/20200413/Async-filter-with-reduce-running-sequentially.png)

## 5.  结论

虽然异步`filter`是可能的，但它最初的工作方式看起来很奇怪。尽管并发控制仍然可用，但与其他异步功能相比，它们需要更多的计划去控制它。

#### 推荐阅读

- [如何在 Array.forEach 中正确使用 Async](https://mp.weixin.qq.com/s/39J2KO8h_cBKg3MWB63L7w)

- [如何在 Vue中优雅的使用防抖节流](https://mp.weixin.qq.com/s/mFmqyicyfaAOdxmhlPmSRQ)