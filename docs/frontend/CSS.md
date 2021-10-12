---
sidebar: auto
---

# CSS

## box-shadow

语法： `box-shadow: h-shadow v-shadow blur spread color inset`

| 属性       | 值                                                  |
| ---------- | --------------------------------------------------- |
| * h-shadow | 水平阴影的位置。10px：阴影在右侧；-10px：阴影在左侧 |
| * v-shadow | 垂直阴影的位置。10px：阴影在下侧；-10px：阴影在上侧 |
| blur       | 模糊距离。值越大，阴影越模糊                        |
| spread     | 阴影的大小。值越大，阴影越大                        |
| color      | 阴影的颜色。                                        |
| inset      | 定义阴影为内部阴影（一般都是外侧阴影，不加此属性）  |

常用：

 `box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1); `

## background 属性

> 定义背景效果: 
>
> background-color 设置背景颜色
>
> background-image 设置背景图片
>
> background-repeat 设置背景重复
>
> background-attachment 设置背景图片是固定还是滚动
>
> background-position   设置背景图像的起始位置 

```css
background: #ffffff url('../assets/zcmap.png') no-repeat 5px 5px;
/*  集合写法 */

background-color: #ffffff;
/*  设置背景颜色 （可以16进制，也可以使rgb() rgba()） */

background-image: url('../assets/zcmap.png');
/* 图片链接 */

background-repeat:repeat;
/* 默认。背景图像将在垂直方向和水平方向重复。*/
background-repeat:repeat-x;
/*  水平平铺，在水平方向重复 */
background-repeat:repeat-y;
/*  垂直平铺，在垂直方向重复 */
background-repeat:no-repeat;
/*  图片不重复，只显示一次 */

background-attachment: scroll;
/* 默认值。背景图像会随着页面其余部分的滚动而移动。 */
background-attachment: fixed;
/* 当页面的其余部分滚动时，背景图像不会移动。 */
background-attachment: inherit;
/* 规定应该从父元素继承 background-attachment 属性的设置。 */

background-position: 5px 5px;
/* 第一个值是水平位置，第二个值是垂直，如果仅指定一个关键字，其他值将会是50% */
background-position: 5% 5%;
/* 第一个值是水平位置，第二个值是垂直，如果仅指定一个关键字，其他值将会是50% */
background-position: left top;
/* 位置英文  如果仅指定一个关键字，其他值将会是"center" */
```

## 平滑滚动

```css
html {
    scroll-behavior: smooth;
}
```

## 截断文本

这就是 `text-overflow` 和 `line-clamp`

```css
.text-container h2 {
    font-family: 'Lora', serif;
    font-size: 1.25rem;
    font-weight: 400;
    color: #1F313D;
    /* The styles here are meant to truncate titles that are too long. The first line ensures long text doesn't overflow its container. The second one ensures we title gets truncated */
    overflow: hidden;
    white-space: nowrap;
    /* Then, we show the three dots if the title is too long to be readable */
    text-overflow: ellipsis;
}

.text-container p {
    line-height: 1.5rem;
    /* Here's where the line-clamp magic begins. First, we need to hide the content that overflows our desired number of text lines to show */
    overflow: hidden;
    /* Then, we use the old implementation of Flexbox on the paragraph and set its direction to be row */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /* Finally, we set the desired number of lines we want to show */
    -webkit-line-clamp: 3;
}
```

## Sticky 导航

```css
header {
    position: sticky;
    top: 0;
}
```

## border 属性

* border-radius: 左上 右上 右下 左下

## 滚动条样式

```css
*::-webkit-scrollbar {
    /* 滚动条整体样式 */
    width: 8px;
    /* 高宽分别对应横竖滚动条的尺寸 */
    height: 4px;
    scrollbar-arrow-color: red;
}

*::-webkit-scrollbar-thumb {
    /* 滚动条里面小方块 */
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
    scrollbar-arrow-color: red;
}

*::-webkit-scrollbar-track {
    /* 滚动条里面轨道 */
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
}
```

## transform

```css
/* Keyword values */
transform: none;

/* 2D 转换，使用六个值的矩阵。 */
transform: matrix(1.0, 2.0, 3.0, 4.0, 5.0, 6.0);
/* 3D 转换，使用 16 个值的 4x4 矩阵。 */
transform: matrix3d(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0, 16.0);

/* 位移 2D 3D */
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);

/* 缩放 2D 3D */
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);

/* 旋转 2D 3D */
transform: rotate(0.5turn);
transform: rotate3d(1, 2.0, 3.0, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);

/* 倾斜 */
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* 为 3D 转换元素定义透视视图。 */
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

参考资料：
* [transform - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
* [兼容性](https://caniuse.com/?search=transform)

## 毛玻璃效果

```css
&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 47px;
    z-index: -2;
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    /* 实际起作用代码 */
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
```

参考链接: [什么是毛玻璃效果（Glassmorphism）？仅使用 HTML 和 CSS 来实现](https://chinese.freecodecamp.org/news/glassmorphism-design-effect-with-html-css/)

## 修改 input placeholder 样式

```html
<input type="text" class="placehoder-custom" placeholder="请输入用户名搜索">
<input type="text" placeholder="请输入用户名搜索">
```

```css
input {
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    display: block;
    margin: 15px;
    border: solid 1px #dee0e9;
    padding: 0 15px;
    border-radius: 15px;
}

.placehoder-custom::-webkit-input-placeholder {
    color: #babbc1;
    font-size: 12px;
}
```

## 使用 caret-color 改变光标颜色

```html
<input type="text" class="caret-color" />
```

```css
.caret-color {
    caret-color: #ffd476;
}
```

## 图片尺寸自适应

```html
<div class="box">
    <div class="img-container">
        <img src="https://i0.hippopx.com/photos/179/171/625/sparkler-holding-hands-firework-preview.jpg" alt="">
    </div>
</div>

<div class="box">
    <div class="img-container">
        <img src="https://i0.hippopx.com/photos/179/171/625/sparkler-holding-hands-firework-preview.jpg" alt="">
    </div>
</div>

<div class="box-vw">
    <div class="img-container">
        <img src="https://i0.hippopx.com/photos/179/171/625/sparkler-holding-hands-firework-preview.jpg" alt="">
    </div>
</div>
```

```css
.box,
.box-vw {
    background-color: #f5f6f9;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 15px;
}

.box:nth-of-type(2) {
    width: 260px;
}

/* vw方案 */
.box-vw .img-container {
    width: 100vw;
    height: 66.620879vw;
    padding-bottom: inherit;
}

/* padding方案 */
.img-container {
    width: 100%;
    height: 0;
    /* 图片的高宽比 */
    padding-bottom: 66.620879%;
}

img {
    width: 100%;
}
```
