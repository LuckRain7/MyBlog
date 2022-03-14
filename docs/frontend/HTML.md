---
sidebar: auto
---

# HTML

[HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript).](https://developer.mozilla.org/en-US/docs/Web/HTML)

[DOM - Document Object Model](https://developer.mozilla.org/en-US/docs/DOM/DOM_Reference/Introduction)

[BOM - Browser Object Model](https://developer.mozilla.org/en-US/docs/WebAPI/Browser)

## 1. Elements

### `<pre></pre>`

pre 元素可定义预格式化的文本。被包围在 pre 元素中的文本通常会保留空格和换行符。而文本也会呈现为等宽字体。

`<pre>` 标签的一个常见应用就是用来表示计算机的源代码。

可以导致段落断开的标签（例如标题、 `<p>` 和 `<address>` 标签）绝不能包含在 `<pre>` 定义的块里。尽管有些浏览器会把段落结束标签解释为简单地换行，但是这种行为在所有浏览器上并不都是一样的。

pre 元素中允许的文本可以包括物理样式和基于内容的样式变化，还有链接、图像和水平分隔线。当把其他标签（比如 `<a>` 标签）放到 `<pre>` 块中时，就像放在 HTML/XHTML 文档的其他部分中一样即可。

```html
<pre>{{ code }}</pre>
```

## 2. DOM

## 3.BOM

### MutationObserver

> API 提供了监视对 DOM 树所做更改的能力 | [兼容性](https://caniuse.com/?search=MutationObserver)

```JavaScript
const $body = document.getElementById('body');

// 需要注意兼容性问题
const MutationObserver = window.MutationObserver || window.webkitMutationObserver || window.MozMutationObserver;

// 观察器的配置（需要观察什么变动）
const config = {
  childList: true, // 子节点的变动（新增、删除或者更改）
  attributes: true, // 属性的变动
  characterData: true, // 节点内容或节点文本的变动
  subtree: true, // 是否将观察器应用于该节点的所有后代节点
  attributeFilter: [] // 要监视的特定属性名称的数组
};

const mutationObserver = new MutationObserver(function(mutations) {
  console.log('body 发生了变动：', mutations);
})

mutationObserver.observe($body, config);
```

---

参考：

- [MutationObserver MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)
- [MutationObserver.observe() - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/observe)
