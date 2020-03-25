---
sidebar: auto
---
# CSS
##  box-shadow

语法：` box-shadow: h-shadow v-shadow blur spread color inset`

| 属性       | 值                                                  |
| ---------- | --------------------------------------------------- |
| * h-shadow | 水平阴影的位置。10px：阴影在右侧；-10px：阴影在左侧 |
| * v-shadow | 垂直阴影的位置。10px：阴影在下侧；-10px：阴影在上侧 |
| blur       | 模糊距离。值越大，阴影越模糊                        |
| spread     | 阴影的大小。值越大，阴影越大                        |
| color      | 阴影的颜色。                                        |
| inset      | 定义阴影为内部阴影（一般都是外侧阴影，不加此属性）  |

常用：

` box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);`

## 平滑滚动

```css
html {
  scroll-behavior: smooth;
}
```

## 截断文本

这就是`text-overflow`和`line-clamp`

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

## CSS预处理器

### sass

> 世界上最成熟、最稳定、最强大的专业级CSS扩展语言！

定义变量 Variables

```scss
$highlight-color: #F90;
```

支持嵌套 Nested Rules

```scss
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

### less

> Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
>
> Less 可以运行在 Node 或浏览器端。

定义变量 Variables

```less
@nice-blue: #5B83AD;
```

支持嵌套 Nested Rules

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

支持加减乘除操作 Operations

```less
// numbers are converted into the same units
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is 1.5cm
```

