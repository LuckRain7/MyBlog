# 如何在 Array.forEach 中正确使用 Async

本文译自[How to use async functions with Array.forEach in Javascript -  **Tamás Sallai** ]( https://advancedweb.hu/how-to-use-async-functions-with-array-foreach-in-javascript/ )。 

## 0.  如何异步遍历元素 

 在[第一篇文章中](https://advancedweb.hu/asynchronous-array-functions-in-javascript/)，我们介绍了async / await如何帮助处理异步事件，但在异步处理集合时却无济于事。在本文中，我们将研究该`forEach`功能，当您需要为集合中的每个元素运行一段代码时，该功能将非常有用。 

## 1.  `forEach`

该`forEach`函数类似于`map`，但是它不转换值并使用结果，而是为每个元素运行该函数并丢弃结果（这里可以理解成是否有`return`值）。实际上，重要的部分是调用函数的副作用。

例如，将每个元素同步打印到控制台：

```javascript
const arr = [1, 2, 3];

arr.forEach((i) => {
	console.log(i);
});

// 1
// 2
// 3

console.log("Finished sync");
// Finished sync
```

由于结果并不重要，因此可以使用异步函数作为迭代器：

```javascript
const arr = [1, 2, 3];

arr.forEach(async (i) => {
	// each element takes a different amount of time to complete
	await sleep(10 - i);
	console.log(i);
});

console.log("Finished async");
// Finished async

// 3
// 2
// 1
```

![forEach](/img/article/20200410/forEach.png)

## 2.  控制时间

### 2.1  等待完成

但是，并不奇怪，该函数被**异步**调用，并且程序执行超出了调用范围。这是与同步版本的重要区别，因为在执行下一行时，同步`forEach`已经完成，而异步版本尚未完成。这就是为什么“完成的异步”日志出现在元素之前的原因。

要在继续进行之前等待所有函数调用完成，可以使用带有`Promise.all`的`map`，并丢弃结果：

```javascript
const arr = [1, 2, 3];

await Promise.all(arr.map(async (i) => {
	await sleep(10 - i);
	console.log(i);
}));

// 3
// 2
// 1

console.log("Finished async");
// Finished async
```

![map](/img/article/20200410/map.png)

 进行此更改后，“完成的异步操作”排在最后。 





### 2.2  顺序处理

但是请注意，迭代函数是并行调用的。要忠实地遵循同步`forEach`，要先使用带`await memo`的`reduce`：

```javascript
const arr = [1, 2, 3];

await arr.reduce(async (memo, i) => {
	await memo;
	await sleep(10 - i);
	console.log(i);
}, undefined);

// 1
// 2
// 3

console.log("Finished async");
// Finished async
```

![reduce](/img/article/20200410/reduce.png)

这样，元素依次依次处理，程序执行将等待整个数组完成后再继续。

## 3.  结论

异步`forEach`易于使用，但是是否应使用`forEach`，`map`或 `reduce`取决于计时的要求。如果您只想在任何时候运行这些功能，请使用`forEach`。如果要确保继续操作之前完成操作，请使用`map`。最后，如果您需要一个一个地运行它们，请使用`reduce`。

