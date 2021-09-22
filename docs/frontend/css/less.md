---
sidebar: auto
---

# Less

> Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。Less 可以运行在 Node 或浏览器端。
>
> 官网：[https://less.bootcss.com](https://less.bootcss.com)

## 安装

```bash
npm install -g less
# or
yarn add less
```

## 用法

### 变量（Variables）

```less
@nice-blue: #5B83AD;
```

### 嵌套（Nesting）

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

### 运算（Operations）

```less
@conversion-1: 5cm + 10mm; // result is 6cm
@conversion-2: 2 - 3cm - 5mm; // result is 1.5cm
```
