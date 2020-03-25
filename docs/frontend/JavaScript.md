---
sidebar: auto
---
# JavaScript



## 一、深拷贝和浅拷贝

> 浅拷贝：拷贝的是对象或数组的引用，指向的还是同一地址，改变拷贝值或原值，两者都变化
>
> 深拷贝：摆脱引用，完全独立的两个变量

```js
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









## 二、可拖动模态框

index.html

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

main.js

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

index.css

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

