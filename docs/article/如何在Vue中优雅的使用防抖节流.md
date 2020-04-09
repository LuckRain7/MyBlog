---
sidebar: auto
---

# 如何在Vue中优雅的使用防抖节流

## 1.  什么是防抖节流

#### 防抖：防止重复点击触发事件

首先啥是抖？ 抖就是一哆嗦！原本点一下，现在点了3下！不知道老铁脑子是不是很有画面感！哈哈哈哈哈哈

典型应用就是防止用户多次重复点击请求数据。

代码实现要点：设置一个定时器，通过闭包，抓住定时器变量，控制定时器的添加和清除

直接上代码

```js
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
```



#### 节流：指定时间间隔内只会执行一次任务

大家都玩过FPS游戏吧（没玩过？？？打枪知道了吧！）道具的射速是一定的，不会因为你点击鼠标的速度加快而增加。

代码实现要点：通过一个布尔变量作为状态，判断代码是否需要执行

直接上代码

```js
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
```



## 2.  在Vue中优雅的使用

我的应用场景：头像裁剪组件，对滚轮缩放后生成预览图片进行防抖处理

![场景](/img/vue/touxiang.gif)



因为Vue组件中的 `this` 原因

```js
methods:{
  previewImageDebounce: Debounce(this.previewImage, 1000),
}
//报错 Uncaught TypeError: Cannot read property 'previewImage' of undefined
```



我们要针对上面的防抖函数进行改造（函数内容this指向没问题，我们通过函数名调用函数）

```javascript
/*
 *  description: 在vue中使用的防抖函数
 *  param fnName {String}  函数名
 *  param time {Number}    延迟时间
 *  return: 处理后的执行函数
 */
function VueDebounce(fnName, time) {
  let timeout = null;
  return function() {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      this[fnName]();
    }, time);
  };
}
```

在Vue组件中使用

```javascript
methods:{
    /* 监听滚轮滑动 */
  Wheel(ev) {
    if (!this.newImage) return;
    // 判断放大和缩小
    ev.deltaY > 0 ? this.makeScaleChange(1) : this.makeScaleChange(0);
		// 预览图片
    this.previewImageDebounce();
  },
  /* 预览图片(防抖处理后) */
  previewImageDebounce: VueDebounce("previewImage", 1000),
  /* 预览图片 */
  previewImage() {......}
}
```

这样的写法，算是很优雅了。节流就不在这里展开了，开动你的小脑袋不成问题。

