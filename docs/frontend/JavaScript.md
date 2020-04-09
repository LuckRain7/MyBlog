---
sidebar: auto
---
# JavaScript

## 一、应用

### 1、深拷贝和浅拷贝

赋值操作则是两个对象一起指向一个对象，无论谁改变了对象里面的内容，都会互相影响。

浅拷贝和深拷贝都是将拷贝的内容放入新的对象中去，区别在于浅拷贝只会新增一个外层对象来放要拷贝对象的所有内容，所以如果要拷贝的对象里面的属性是对象则拷贝的是对象的引用，而深拷贝则是被拷贝对象包含多少对象，深拷贝就会对应生成多少对象来一一对应往里装被拷贝对象里的内容，所有的对象都是独立全新的拷贝一份。

**简单来说**：

- 赋值操作两个变量指向同一个对象，两者互相影响。
- 浅拷贝新生成一个对象，对象里面的属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），拷贝的就是内存地址。
- 深拷贝会新生成所有对象（值对象里面层层嵌套对象），对象里面的属性是基本类型，拷贝的就是基本类型的值；如果属性是内存地址（引用类型），会新生成一个对象将内容拷贝进去。

```js
//浅拷贝
const obj1 = { a: {a: "hello", b: 21} };
const obj2 = Object.assign({}, obj1);

// 深拷贝
function deepCloneByJson(obj) {
    // 有缺陷 不能实现复杂的拷贝  function
    return JSON.parse(JSON.stringify(obj))
}

// 递归拷贝
// hash的使用
function deepClone(obj, hash = new WeakMap()) {
    if (obj == null) return obj //判断空值
    if (obj instanceof Date) return new Date(obj) //判断日期
    if (obj instanceof RegExp) return new RegExp(obj)
    // 如果是函数或者普通值的话 不需要深拷贝
    if (typeof obj !== 'object') return obj
    // 是对象的话就要进行深拷贝
    if (hash.get(obj)) return hash.get(obj)

    let cloneObj = new obj.constructor
    hash.set(obj, cloneObj)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj
}

let obj = { name: 'zzy', age: 18 }
obj.other = obj
let d = deepClone(obj)
d.age = 20
console.log(obj)
console.log(d.other)
```



### 2、防抖和节流

>防抖：防止重复点击触发事件
>
>节流：指定时间间隔内只会执行一次任务

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>节流防抖</title>
</head>

<body>
    <button id="f">防抖</button>
    <button id="j">节流</button>

    <script>

        window.onload = function () {
            let myDebounce = document.getElementById("f");
            myDebounce.addEventListener("click", debounce(test, 1000))
            let myThrottle = document.getElementById("j");
            myThrottle.addEventListener("click", throttle(test, 1000, 'zz'))
        }

        // 防抖
        function debounce(fn, time) {
            let _arguments = arguments
            let timeout = null
            return function () {
                if (timeout) {
                    clearTimeout(timeout)
                }
                timeout = setTimeout(() => {
                    fn.call(this, _arguments)
                }, time);
            }
        }

        function test() {
            console.log(' 防抖：防止重复点击触发事件');
            console.log(' 节流：指定时间间隔内只会执行一次任务');
            console.log(arguments);
        }

        // 节流
        function throttle(fn, time) {
            let _arguments = arguments
            let canRun = true
            return function () {
                if (!canRun) return
                canRun = false
                setTimeout(() => {
                    fn.call(this, _arguments)
                    canRun = true
                }, time);
            }
        }

    </script>
</body>

</html>
```





### 3、可拖动模态框

`index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css" />
</head>

<body>
    <!-- 设置遮罩  蒙层效果-->
    <div class="mask"></div>

    <!-- 模态框 -->
    <div id="model">
        <div class="model-hd">
            <h3><i class="fa fa-star"></i>可拖动的模态框</h3>
            <a href="javascript:;" class="fa fa-times"></a>
        </div>
    </div>


    <script src="index.js"></script>
</body>

</html>
```

`main.js`

```js
let model = document.getElementById('model')

// 居中显示
model.style.left = (window.innerWidth - 450) / 2 + 'px'
model.style.top = (window.innerHeight - 350) / 2 + 'px'

let x, y,
    isDrop = false //移动状态的判断鼠标按下才能移动

model.onmousedown = function (event) {
    let e = event || window.event
    x = e.clientX - model.offsetLeft;
    y = e.clientY - model.offsetTop;
    isDrop = true; //设为true表示可以移动
}

document.onmousemove = function(event) {
    //是否为可移动状态                　　　　　　　　　　　 　　　　　　　
    if(isDrop) {　　　　
        let e = event || window.event                   　　
        let moveX = e.clientX - x //得到距离左边移动距离  
        let moveY = e.clientY - y //得到距离上边移动距离
        //可移动最大距离
        let maxX = document.documentElement.clientWidth - model.offsetWidth
        let maxY = document.documentElement.clientHeight - model.offsetHeight

        //范围限定
        moveX=Math.min(maxX, Math.max(0,moveX))
        moveY=Math.min(maxY, Math.max(0,moveY))

        model.style.left = moveX + "px"　　
        model.style.top = moveY + "px"　　　　　　　　　　
    } else {
        return;　　　　　　　　　　
    }

}

document.onmouseup = function() {
    isDrop = false; //设置为false不可移动
}


// clientX、clientY 点击位置距离当前body可视区域的x，y坐标
// pageX、pageY 对于整个页面来说，包括了被卷去的body部分的长度
// screenX、screenY  点击位置距离当前电脑屏幕的x，y坐标
// offsetX、offsetY  相对于带有定位的父盒子的x，y坐标
```

`index.css`

```css
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  /* 调整北京图片的三种方式 */
  background: url(../img/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
}

h3 {
  margin: 0;
}

a {
  /* 去掉下划线 */
  text-decoration: none;
}

div {
  box-sizing: border-box;
}

.mask {
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
}

#model {
  width: 450px;
  height: 350px;
  background-color: white;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 15px;
  overflow: hidden;
}

#model .model-hd {
  width: 100%;
  height: 50px;
  background-color: #4896dc;
  /* 十字图标 让用户明白可以拖动 */
  cursor: move;
  line-height: 50px;
  padding: 0 15px;
}

#model .model-hd h3 {
  display: inline;
  color: #fff;
}

#model .model-hd h3 i {
  color: #f1c747;
}

#model .model-hd a {
  float: right;
  color: #fff;
  margin-top: 18px;
}
```

## API

### 一、Object 

#### [Object.values()]( https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values )   返回给定对象自身可枚举值的数组。

```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]
```

#### [Object.keys()]( https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys )：返回一个包含所有给定对象自身可枚举属性名称的数组。

```js
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']
```



- Object.assign()

  通过复制一个或多个对象来创建一个新的对象。

- Object.create()

  使用指定的原型对象和属性创建一个新对象。

- Object.defineProperty()

  给对象添加一个属性并指定该属性的配置。

- Object.defineProperties()

  给对象添加多个属性并分别指定它们的配置。

- Object.entries()

  返回给定对象自身可枚举属性的 `[key, value]` 数组。

- Object.freeze()

  冻结对象：其他代码不能删除或更改任何属性。

- Object.getOwnPropertyDescriptor()

  返回对象指定的属性配置。

- Object.getOwnPropertyNames()

  返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。

- Object.getOwnPropertySymbols()

  返回一个数组，它包含了指定对象自身所有的符号属性。

- Object.getPrototypeOf()

  返回指定对象的原型对象。

- Object.is()

  比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。

- Object.isExtensible()

  判断对象是否可扩展。

- Object.isFrozen()

  判断对象是否已经冻结。

- Object.isSealed()

  判断对象是否已经密封。

- Object.preventExtensions()

  防止对象的任何扩展。

- Object.seal()

  防止其他代码删除对象的属性。

- Object.setPrototypeOf()

  设置对象的原型（即内部 `[[Prototype]]` 属性）。

-------

参考文章：

[Javascript浅拷贝和深拷贝](https://segmentfault.com/a/1190000021239893)