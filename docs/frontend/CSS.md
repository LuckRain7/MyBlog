---
sidebar: auto
---

# CSS

## 1. 选择器

> 优先级 !important > 行内样式 > ID 选择器 > 类、伪类、属性 > 元素、伪元素 > 继承 > 通配符

```css
ul li // 后代选择器
ul>li>p // 子选择器
h1+p // 相邻兄弟选择器
h1~p // 一般兄弟选择器

div[title]          // 具有title属性的div标签
div [title]         // 具有 title 属性的 div 的子元素
div[title="rain"]
div[title~="rain"]  // 也可以加入一些正则
div[title$="rain"]
div[title^="rain"]
div[title|="rain"]
div[title*="rain"]

// 伪类选择器
:nth-child(n) // 孩子选择器
:first-child  // 第一个子元素
:last-child   // 最后一个子元素

:nth-of-type(n) // 同类型的第n个元素
:first-of-type  // 同类型的第一个子元素
:last-of-type   // 同类型的最后一个子元素

:only-child   // 父元素唯一的子元素
:empty        // 没有子元素

:nth-last-child(n)    // 倒数第n个子元素
:nth-last-of-type(n)  // 同类型的倒数第n个子元素
.text:nth-of-type(n + 2):before // 选择第2个到第n个子元素
```

the first rule (A) is more specific than the second one (B). [W3C CSS 2.1 Specification](https://www.w3.org/TR/CSS21/selector.html)

```css
A:
a#a-02 {
  background-image: url(n.gif);
}

and

B:
a[id="a-02"] {
  background-image: url(n.png);
}
```

自定义提示

```css
[title] {
  position: relative;
  display: block;
}
[title]:hover:after {
  content: attr(title);
  color: hotpink;
  background-color: slateblue;
  display: block;
  padding: 0.225em 0.35em;
  position: absolute;
  right: -5px;
  bottom: -5px;
}
```

## 2. CSSOM

> [CSS Object Model](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model) 是一组允许用 JavaScript 操纵 CSS 的 API。 它是继 DOM 和 HTML API 之后，又一个操纵 CSS 的接口，从而能够动态地读取和修改 CSS 样式。

## 3. Style

### box-shadow

语法： `box-shadow: h-shadow v-shadow blur spread color inset`

| 属性        | 值                                                  |
| ----------- | --------------------------------------------------- |
| \* h-shadow | 水平阴影的位置。10px：阴影在右侧；-10px：阴影在左侧 |
| \* v-shadow | 垂直阴影的位置。10px：阴影在下侧；-10px：阴影在上侧 |
| blur        | 模糊距离。值越大，阴影越模糊                        |
| spread      | 阴影的大小。值越大，阴影越大                        |
| color       | 阴影的颜色。                                        |
| inset       | 定义阴影为内部阴影（一般都是外侧阴影，不加此属性）  |

常用：

`box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);`

### background

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
> background-position 设置背景图像的起始位置
>
> background-size 指定背景图片大小。

```css
/*  集合写法 */
background: #ffffff url("../assets/zcmap.png") no-repeat 5px 5px;

/*  设置背景颜色 （可以16进制，也可以使rgb() rgba()） */
background-color: #ffffff;

/* 图片链接 */
background-image: url("../assets/zcmap.png");

/* 默认。背景图像将在垂直方向和水平方向重复。*/
background-repeat: repeat;
/*  水平平铺，在水平方向重复 */
background-repeat: repeat-x;
/*  垂直平铺，在垂直方向重复 */
background-repeat: repeat-y;
/*  图片不重复，只显示一次 */
background-repeat: no-repeat;

/* 默认值。背景图像会随着页面其余部分的滚动而移动。 */
background-attachment: scroll;
/* 当页面的其余部分滚动时，背景图像不会移动。 */
background-attachment: fixed;
/* 规定应该从父元素继承 background-attachment 属性的设置。 */
background-attachment: inherit;

/* 第一个值是水平位置，第二个值是垂直，如果仅指定一个关键字，其他值将会是50% */
background-position: 5px 5px;
/* 第一个值是水平位置，第二个值是垂直，如果仅指定一个关键字，其他值将会是50% */
background-position: 5% 5%;
/* 位置英文  如果仅指定一个关键字，其他值将会是"center" */
background-position: left top;

/* 设置背景图片高度和宽度。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为 auto(自动) */
/* 将计算相对于背景定位区域的百分比。第一个值设置宽度，第二个值设置的高度。如果只给出一个值，第二个是设置为"auto(自动)" */
/* 保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 */
/* 保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。 */
background-size: length|percentage|cover|contain;
```

### transform

```css
/* Keyword values */
transform: none;

/* 2D 转换，使用六个值的矩阵。 */
transform: matrix(1, 2, 3, 4, 5, 6);
/* 3D 转换，使用 16 个值的 4x4 矩阵。 */
transform: matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

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
transform: rotate3d(1, 2, 3, 10deg);
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

- [transform - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)
- [兼容性](https://caniuse.com/?search=transform)

## 4. css 布局

### 弹性盒子(Flexbox)

| 作用在 flex 容器上 | 参数 |
| :----------------: | :--: |
|   flex-direction   |      |
|     flex-wrap      |      |
|     flex-flow      |      |
|  justify-content   |      |
|    align-items     |      |
|   align-content    |      |

| 作用在 flex 子项上 | 参数 |
| :----------------: | :--: |
|       order        |      |
|     flex-grow      |      |
|    flex-shrink     |      |
|     flex-basi      |      |
|        flex        |      |
|     align-self     |      |

### TODO

- 正常布局流(Normal flow)
- display 属性(The display property)
- Grid 布局(Grid)
- 浮动布局(Floats)
- 定位(Positioning)
- 表格布局(Table layout)
- 多列布局(Multiple-column layout)

## 截断文本

这就是 `text-overflow` 和 `line-clamp`

```css
.text-container h2 {
  font-family: "Lora", serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: #1f313d;
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

## 毛玻璃效果

```css
&::before {
  content: "";
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

## input 相关

### placeholder 样式修改

```html
<input type="text" placeholder="请输入内容" />
```

```css
input::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: red;
}

input::-moz-placeholder {
  /* Firefox 19+ */
  color: red;
}

input:-ms-input-placeholder {
  /* IE 10+ */
  color: red;
}

input:-moz-placeholder {
  /* Firefox 18- */
  color: red;
}
```

### input 聚焦时的样式

```css
input:focus {
  background-color: red;
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

## 图片相关

### 1. 图片尺寸自适应

```html
<div class="box">
  <div class="img-container">
    <img
      src="https://i0.hippopx.com/photos/179/171/625/sparkler-holding-hands-firework-preview.jpg"
      alt=""
    />
  </div>
</div>

<div class="box">
  <div class="img-container">
    <img
      src="https://i0.hippopx.com/photos/179/171/625/sparkler-holding-hands-firework-preview.jpg"
      alt=""
    />
  </div>
</div>

<div class="box-vw">
  <div class="img-container">
    <img
      src="https://i0.hippopx.com/photos/179/171/625/sparkler-holding-hands-firework-preview.jpg"
      alt=""
    />
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

### 2. 超长图自适应

```html
<!-- banner 2560*400  -->
<div class="banner-wrap">
  <img :src="activityInfo.pcHeadImg" alt="" />
</div>
```

```css
// 头图
.banner-wrap {
  position: absolute;
  min-width: 1200px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
```

## 绘制三角形

```css
/* 正三角 */
.up-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 25px 40px 25px;
  border-color: transparent transparent rgb(245, 129, 127) transparent;
}

/* 倒三角 */
.down-triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 40px 25px 0 25px;
  border-color: rgb(245, 129, 127) transparent transparent transparent;
}
```

## Tips

- [CSS 命令 `font-variant-east-asian: traditional;`，可以让网站字体从简体变成繁体。](https://www.zhangxinxu.com/wordpress/2021/01/css-simplified-traditional-chinese/)

- 表格边框合并 `border-collapse: collapse;`

- 平滑滚动 `scroll-behavior: smooth;`

- `border-radius` 顺序： 左上 右上 右下 左下

---

参考文章：

- [要提升前端布局能力，这些 CSS 属性需要学习下！](https://segmentfault.com/a/1190000038154167?_ea=79107425)
