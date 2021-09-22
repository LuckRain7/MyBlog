---
sidebar: auto
---

# sass

> 世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言！
>
> 官网地址：[https://sass-lang.com](https://sass-lang.com)

## 安装

```BASH
yarn add sass
# or
npm install -g sass
```

## 使用

### 定义变量 Variables

```scss
$highlight-color: #F90;
```

### 支持嵌套 Nested Rules

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

### 循环语法

```scss
@for $i from 1 to 20 {
    .p-#{$i} {
        padding: 5px * $i;
    }
}
```

## Node Sass 弃用，以 Dart Sass 代替

[LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated)
