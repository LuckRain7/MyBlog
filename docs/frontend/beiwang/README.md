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

## Element-UI

### 清除 校验提示信息

```js
this.$nextTick(() => {
  this.$refs.form?.clearValidate && this.$refs.form.clearValidate();
});
```

### 手动校验

```js
actionValidateJobReferrerUserId(rule, value, callback) {
    if (!value) return callback(); // 选填 不填也可以通过
    if (/^\d+$/.test(value)) return callback();
    return callback(new Error('请输入正确的用户ID（数字）'));
}
```

## 校验正则

```JS
// 数字校验，只能输入 数字 & 逗号
const Reg = /^[\d,]*$/;

// 匹配16进制的颜色
const colorReg = /#[0-9a-fA-F]{6}/;

// 匹配是否是纯英文
const isEnglish = new RegExp('^[a-zA-Z]+$');

// 匹配数组内容
const theArray = new RegExp('pages = [[\\w\\W]+?];');

// 匹配对象内容
const theObject = new RegExp('customRoutes: {[\\w\\W]+?}');
```

## 占位空字符(超神奇！)

```text
<title>‎</title>
```
