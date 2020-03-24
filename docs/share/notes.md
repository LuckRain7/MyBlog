---
sidebar: auto
---
#  笔记

## 运算符优先级

| 优先级                                                       | 运算类型                                                     | 关联性        | 运算符  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ------- |
| 20| 圆括号 | n/a           | ( … ) |
| 19| 成员访问 | 从左到右 | … . …       |
| 19 | 需计算的成员访问                                             | 从左到右 | … [ … ] |
| 19 |new (带参数列表) | n/a      | new … ( … ) |
| 19 | 函数调用 | 从左到右 | … ( … )     |
| 18 | new(无参数列表) | 从右到左 | new …       |
| 17 | 后置递增(运算符在后) | n/a | A++         |
| 17 | 后置递减(运算符在后) | n/a | A--         |
| 16 | 逻辑非 | 从右到左 |! …|
| 16 | 按位非 | 从右到左 |~ …|
| 16 | 一元加法 | 从右到左 |+ …|
| 16 | 一元减法 | 从右到左 |- …|
| 16 | 前置递增 | 从右到左 |++ …|
| 16 | 前置递减 | 从右到左 |-- …|
| 16 | typeof | 从右到左 |typeof …|
| 16 | void | 从右到左 |void …|
| 16 | delete | 从右到左 |delete …|
| 16 | await| 从右到左 |await …|
| 15 | 幂 | 从右到左 |a**b|
| 14 | 乘法| 从左到右 |… * …|
| 14 | 除法 | 从左到右 |… / …|
| 14 | 取模| 从左到右 |… % …|
|13|	加法|	从左到右| … + …|
|13 |减法|	从左到右|… - …|
|12|	按位左移|	从左到右|	… << …|
|12|按位右移|从左到右	|… >> …|
|12|无符号右移|	从左到右|… >>> …|
|11|	小于|	从左到右|	… < …|
|11|小于等于|	从左到右|… <= …|
|11|大于|	从左到右|… > …|
|11|大于等于|	从左到右|… >= …|
|11|in|从左到右	|… in …|
|11|instanceof|从左到右	|… instanceof …|
|10	|等号|从左到右|… == …|
|10|非等号|从左到右	|… != …|
|10|全等号|	从左到右|… === …|
|10|非全等号|	从左到右|… !== …|
|9|	按位与	|从左到右|	… & …|
|8|	按位异或|	从左到右|	… ^ …|
|7|	按位或	|从左到右|	… 1…|
|6|	逻辑与	|从左到右|	… && …|
|5|	逻辑或|	从左到右|	… 11 …|
|4	|条件运算符|	从右到左|	… ? … : …|
|3	|赋值	|从右到左|	… = …|
||||… += …|
||||… -= …|
||||… *= …|
||||… /= …|
||||… %= …|
||||… <<= …|
||||… >>= …|
||||… >>>= …|
|||| … &= …|
||||… ^= …|
||||… 1= …|
|2	|yield	|从右到左	|yield …|
||yield*|	|yield* …|
|1	|展开运算符|	n/a|	... …|
|0	|逗号	|从左到右|	… , …|


##  浏览器环境判断 
来自Vue源码 https://github.com/vuejs/vue

```javascript
const inBrowser = typeof window !== 'undefined'
const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
const UA = inBrowser && window.navigator.userAgent.toLowerCase()
const isIE = UA && /msie|trident/.test(UA)
const isIE9 = UA && UA.indexOf('msie 9.0') > 0
const isEdge = UA && UA.indexOf('edge/') > 0
const isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
const isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
const isPhantomJS = UA && /phantomjs/.test(UA)
const isFF = UA && UA.match(/firefox\/(\d+)/)
```


## fragment.appendChild() 的移动性

请看一下代码
把节点移动到内存中的封装函数

```javascript
node2fragment(node) {
    let fragment = document.createDocumentFragment();//创建一个文档碎片

    let firstChild;
    while (firstChild = node.firstChild) {
        fragment.appendChild(firstChild);
    }

    return fragment;
}
```

很多人会对一下代码存在疑惑
这样不就进入死循环了吗？

```javascript
    while (firstChild = node.firstChild) {
        fragment.appendChild(firstChild);
    }
```

奥秘就在于这句话
`fragment.appendChild(firstChild);`

`appendChild` 方法具有可移动性
将`el`中的节点移动到了`fragment`当中

大家可以在循环后打印一下`node.firstChild`,会发现是Null

## AO-GO
Go：global object 全局上下文

1、找变量

2、找函数声明

3、执行

Go === window

```javascript
console.log(a,b);
function a(){}
var b = function(){}

//打印结果 ƒ a(){}  undefined
GO={
    a = undefined -> function
    b = undefined
}
```

AO: activetion object 活跃对象  函数上下文

寻找函数里边的形参和变量声明

1、先寻找形参和变量声明

2、实参值赋值给形参

3、找函数声明进行赋值

4、执行

```javascript
 function test(a){
    console.log(a);
    var a = 1;
    console.log(a);
    function a(){};
    console.log(a);
    var b = function(){}
    console.log(b);
    function b(){}
 }
 test(2);

//打印结果
ƒ a(){}
1
1 //因为fun已经看过了  所以看得是赋值 这里打印的是1
ƒ (){}

AO = {
    a:undefined -> 2 ->function -> 1
    b:undefined -> function
    d:function
}

# 第二个
function test(a, b) {
    console.log(a);
    c = 0;
    var c;
    a = 5;
    b = 6;
    console.log(b);
    function b() { }
    function d() { }
    console.log(b);
}
test(1);
//打印 
1
6
6
```

AO\GO

```javascript
a =1;
function test(a, b) {
    console.log(a);
    a = 2;
    console.log(a);
    a =3;
    console.log(a);
}
test();
var a;

GO = {
   a: undefined,
      1,
   test:function
}
AO = {
    a:undefined,
      2,
      3
}

输出：
undefined //AO里边有 就不回去GO里边找
2
3
```

## 闭包

从外部控制变量

```javascript
function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = function (num) {
            document.write(num + ' ');
        }
    }
    return arr;
}

var go = test();

for (var j = 0; j < 10; j++) {
    go[j](j);
}

//  0 1 2 3 4 5 6 7 8 9
```

同样适用立即执行函数来做（立即执行函数可以保存闭包中的变量）

这是最常用的方法

```javascript
function test() {
    var arr = [];
    for (var i = 0; i < 10; i++) {
       (function(j){
           //这里的i同样可以使用j进行代替 arr[j]
        arr[i] = function () {
            document.write(j + ' ');
        }
       })(i)
    }
    return arr;
}

var go = test();

for (var j = 0; j < 10; j++) {
    go[j](j);
}

//  0 1 2 3 4 5 6 7 8 9
```

应用过程中产生的闭包

```html
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
</ul>
<script>
    var oli = document.querySelectorAll('li');
    console.log(oli);

    for (var i = 0; i < oli.length; i++) {
        oli[i].onclick = function(){
            console.log(i);
        }
    }
</script>

#修改为立即执行函数
for (var i = 0; i < oli.length; i++) {
    (function (j) {
        oli[j].onclick = function () {
            console.log(j);
        }
    })(i)
}
```



```javascript
// 当前test1 函数被执行结束时，因为test2被返回到外部，且被全局变量test3接收
// 这是test1的AO并没有销毁，只是把线剪断了，test2的作用域链还连着
function test1() {
    function test2() { }
    var a = 1;
    return test2;
}
var c = 3;
var test3 = test1();
test3();
```



```javascript
// test3执行，test2 的作用域链增加自己的AO，当打印a的时候，在自己的AO上没有查找到，则向test1的AO查找，
// 再次执行test3时，实际操作的仍然是原来test1的AO
function test1() {
    function test2() {
        var b = 2;
        console.log(a);
    }
    var a = 1;
    return test2;
}
var c = 3;
var test3 = test1();
test3();
```

## Array.reduce() 


参考：MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

```javascript
Array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)；
```

  

| 属性         | 解释                                                         |
| ------------ | ------------------------------------------------------------ |
| accumulator  | 累加器累加回调的返回值;它是先前在回调的最后一次调用中返回的累计值，如果提供的话，则为initialValue（见下文）。 |
| currentValue | 当前元素在数组中处理。                                       |
| currentIndex | 数组中正在处理的当前元素的索引。如果提供了initialValue，则从索引0开始，否则从索引1开始。 |
| array        | 调用 reduce 的数组                                           |

### 此例子不带initialValue  每一步的执行结果如下

```javascript
[2,3,4,5].reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue;
}, initialValue);


[2,3,4,5].reduce(function(2,3,1,[2,3,4,5]){
	return 2+ 3; //5
});


[2,3,4,5].reduce(function(2,3,2,[2,3,4,5]){
	return 2+ 3; //5
});



[2,3,4,5].reduce(function(5,4,3,[2,3,4,5]){
	return 5+4; //9
});

[2,3,4,5].reduce(function(9,5,4,[2,3,4,5]){
	return 9+5; //14
});
//所以最后结果就是14
```

### 带参数initialValue  每一步的执行结果如下

参数initialValue直接为开始时accumulator的值

```javascript
[4,5,6,7].reduce(function(accumulator, currentValue, currentIndex, array){
	return accumulator + currentValue;
}, initialValue);


[4,5,6,7].reduce(function(10,4,1,[4,5,6,7]){
	return 10 + 4; //14
},10);


[4,5,6,7].reduce(function(14,5,2,[4,5,6,7]){
	return 14 + 5; //19
},10);


[4,5,6,7].reduce(function(19,5,3,[4,5,6,7]){
	return 19 + 5; //24
},10);


[4,5,6,7].reduce(function(24,6,4,[4,5,6,7]){
	return 24 + 6; //30
},10);


[4,5,6,7].reduce(function(30,7,5,[4,5,6,7]){
	return 30 + 7; //37
},10);
//所以最后结果就是37
```









