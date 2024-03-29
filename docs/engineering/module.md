---
sidebar: auto
---

# 模块加载方案

## ES6 模块

> ES6 中的模块加载方案是一种浏览器和服务器通用的解决方案

导入

```js
//直接引入
improt Vue from 'vue'

//解构引入
improt {
  name,
  age
}
from './user'

// 使用as关键字将输入的变量重命名
import {
  name as newName
} from './user';
```

导出（多种写法）

export 可导出多个

export default 为模块默认输出。

```js
//写法一
export const name = "RAIN";
export const age = "18";

//写法二
const name = "RAIN";
const age = "18";
export default {
  name,
  age,
};
```

## CommonJS

> Node 使用的规范

引用：

```js
const user = require("./user");
```

导出：

`module.exports` 属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取 `module.exports` 变量。

```js
export const name = 'RAIN';
export const age = '18'; //写法一
const user = {
  name = 'RAIN',
  age = '18'
}
module.exports = user

//写法二
export.name = 'RAIN';
export.age = '18';
```

## AMD

AMD：Asynchronous Module Definition（异步模块规范），最老的方式之一，专为浏览器而设计。
