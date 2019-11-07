# CSS
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

