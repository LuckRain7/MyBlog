---
sidebar: auto
---

# JavaScript

## 0x. you need know

### 1. for...in 和 for...of的区别

**for...in 循环：**

* 用于遍历对象的可枚举属性。
* 循环变量为对象的属性名（字符串类型）。
* 循环顺序不确定，可能不按照属性添加的顺序进行遍历。
* 可以遍历对象的原型链上的属性。
* 不适用于遍历数组，因为它会遍历数组的索引（字符串类型），而不是数组的元素。

示例代码：

```javascript
const obj = {
    a: 1,
    b: 2,
    c: 3
};

for (let key in obj) {
    console.log(key); // 输出属性名：a, b, c
}
```

**for...of 循环：**

* 用于遍历可迭代对象（例如数组、字符串、Set、Map等）的元素。
* 循环变量为对象的元素值。
* 循环顺序按照对象的迭代顺序进行遍历。
* 不会遍历对象的属性，只遍历对象的值。
* 不支持遍历普通对象，因为普通对象并不是可迭代对象。

示例代码：

```javascript
const arr = [1, 2, 3];

for (let value of arr) {
    console.log(value); // 输出元素值：1, 2, 3
}
```

总结： `for...in` 用于遍历对象的属性，而 `for...of` 用于遍历可迭代对象的元素。在处理对象时，需要注意它们的不同用途和适用范围，以确保选择正确的循环语句。

**究极例子：**

```js
Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let obj = {
    name: "tom",
    age: "18"
};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let key in obj) {
    console.log(" obj key =", key); // logs: name, age, objCustom
}

for (let key in iterable) {
    console.log("iterable key =", key); // logs: 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let key in iterable) {
    if (iterable.hasOwnProperty(key)) {
        console.log(key); // logs: 0, 1, 2, "foo"
    }
}

for (let value of iterable) {
    console.log(value); // logs: 3, 5, 7
}
```

### 2. 空数组调用reduce会发生什么？

当空数组调用 `reduce` 方法时，会抛出一个 `TypeError` 错误。这是因为 `reduce` 方法需要一个回调函数作为参数，用于对数组元素进行累积计算。而在空数组中没有元素可供计算，因此无法执行回调函数。

```javascript
const emptyArray = [];

const result = emptyArray.reduce((pre, cur) => {
    return pre + cur;
});

// 抛出 TypeError: Reduce of empty array with no initial value
```

为了避免这个错误，我们可以在调用 `reduce` 方法时提供一个初始值作为参数，作为累积计算的起点。初始值可以是任何合法的JavaScript值，例如数字、字符串、对象等。

示例代码：

```javascript
const emptyArray = [];

const result = emptyArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 提供初始值0

console.log(result); // 输出：0
```

在上述示例中，通过提供初始值0，即使数组为空， `reduce` 方法也能正常执行，并返回初始值作为结果。这是因为在空数组的情况下， `reduce` 方法直接返回初始值，而不会执行回调函数。

## TypeScript

### 1. 在TS中普通枚举和常量枚举有什么区别?

1. 普通枚举 enum A {...} 和常量枚举 const enum A {...} 之间的区别主要在于 TS 的编译结果上有所差别
2. 普通枚举 enum A {...}, 会将其编译为一个 JS 对象, 对象内就是枚举成员和值的一个相互映射
3. 常量枚举 const enum A {...}, 编译后不会生成任何代码, 会删除 TS 部分内容, 对于使用到的成员只会进行值的替换
4. 由此可见, 使用 常量枚举 会有更好的性能, 避免额外的性能开销; 那么大部分情况下我们更推荐使用常量枚举

那么问题来了我们什么时候使用普通枚举呢? 

```js
// ts 代码
enum TabType {
    Job = 3, Company = 4
}
const jobType = TabType.Job
const companyType = TabType.Company

// 编译后的 js 代码
"use strict";
var TabType;
(function(TabType) {
    TabType[TabType["Job"] = 3] = "Job";
    TabType[TabType["Company"] = 4] = "Company";
})(TabType || (TabType = {}));
const jobType = TabType.Job;
const companyType = TabType.Company;
```

```js
// ts 代码
const enum TabType {
    Job = 3, Company = 4
}
const jobType = TabType.Job
const companyType = TabType.Company

// 编译后的 js 代码
"use strict";
const jobType = 3 /* TabType.Job */ ;
const companyType = 4 /* TabType.Company */ ;
```
