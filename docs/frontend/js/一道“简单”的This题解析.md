## 一道“简单”的 This 题解析

## 1.   知识点

匿名函数无法从函数内部应用自身

 this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录(有时候也称为执行上下文)。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。

this简单讲就是：调用我的"人"在什么上下文环境，我就指向谁！！

## 2.  题目：

```js
var number = 2;
var obj = {
  number: 4,

  fn1: (function () {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    };
  })(),
  db2: function () {
    this.number *= 2;
  },
};

var fn1 = obj.fn1;
var fn2 = obj.db2;

console.log(number);

fn1();
fn2();

obj.fn1();
obj.db2();

console.log(window.number);

console.log(obj.number);
```

## 3.  执行过程

#### `var fn1 = obj.fn1;`

`fn1`在全局执行，this 指向全局

```js
var number = 2;
var obj = {
  number: 4,
  fn1: (function () {
    var number;
    this.number *= 2; // 指向全局变量number number=4
    number = number * 2;
    number = 3; // 函数内number = 3
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    };
  })(),
  db2: function () {
    this.number *= 2;
  },
};
```

#### `var fn2 = obj.db2;`

`fn2` 中的 this 指向全局变量

#### `console.log(number)`

打印全局变量 number

输出 ‘4’

#### `fn1()`

this 指向全局

```js
var number = 2;
var obj = {
  number: 4,
  fn1: (function () {
    var number;
    this.number *= 2; //全局number=4
    number = number * 2; //NAN
    number = 3; //函数内number = 3
    return function () {
      var num = this.number; //全局作用域 num=4
      this.number *= 2; // 全局number = 8
      console.log(num); // 输出4
      number *= 3; // 函数内number 3*3=9(形成闭包)
      console.log(number); // 输出9
    };
  })(),
  db2: function () {
    this.number *= 2;
  },
};
```

#### `fn2()`

this 指向全局

```js
var number = 2;
var obj = {
  number: 4,
  fn1: (function () {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    };
  })(),
  db2: function () {
    this.number *= 2; //全局number = 8   8*2=16
  },
};
```

#### `obj.fn1()`

这里执行时 执行环境是 obj，所以 this 指向 obj

`this.number = obj.number`

number 则是形成闭包，调用上次的值

```js
var number = 2;
var obj = {
  number: 4,
  fn1: (function () {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function () {
      var num = this.number; // obj.number=this.number=num=4
      this.number *= 2;      // obj.number =4*2=8
      console.log(num);      // 打印 num=4
      number *= 3;           //闭包 number=9*3=27
      console.log(number);   // 打印 number=27
    };
  })(),
  db2: function () {
    this.number *= 2;
  },
};
```

#### `obj.db2()`

`this` 指向`obj`

```js
var number = 2;
var obj = {
  number: 4,
  fn1: (function () {
    var number;
    this.number *= 2;
    number = number * 2;
    number = 3;
    return function () {
      var num = this.number;
      this.number *= 2;
      console.log(num);
      number *= 3;
      console.log(number);
    };
  })(),
  db2: function () {
    this.number *= 2; // obj.number=this.number=8*2=16
  },
};
```

#### `console.log(window.number)`

打印 16

#### `console.log(obj.number)`

打印 16





## 参考链接 

- [【THE LAST TIME】this：call、apply、bind]( https://juejin.im/post/5da7cdff6fb9a04de7735742 )
- 你不知道的 JavaSctript（上卷）

![wx](/img/wxmin.png)