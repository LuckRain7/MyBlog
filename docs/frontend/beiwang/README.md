---
sidebar: auto
---

# 备忘

## CSS

```CSS
/* import TitleBox from '@nc/vue.titleBox'; */
.hide-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.tag-mark-style {
    background-color: #f5f5f5;
    color: #6f6f6f !important;
    max-width: 1.5rem;
}

.flex-auto {
    -webkit-box-flex: 1;
    -webkit-flex: auto;
    flex: auto;
}
```

## JavaScript

### 

```js
actionValidateJobReferrerUserId(rule, value, callback) {
    if (!value) return callback(); // 选填 不填也可以通过
    if (/^\d+$/.test(value)) return callback();
    return callback(new Error('请输入正确的用户ID（数字）'));
}
```