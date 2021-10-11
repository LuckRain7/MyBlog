---
sidebar: auto
---

# code review

## xx

* 检查 Vue 组件引用格式 `<ComponentsName></ComponentsName>`

* 条件判断时，选择尽量少的判断提交 进行判断

* 做映射的时候，一定要选取 唯一值 进行映射

* 错误信息判断 与后端协商 错误状态码含义

* 进行控制判断 和赋默认值

* 请求的多余字段需要进行处理

* 抽出的组件 不要带业务内容

* element table 设置 minWidth，width 不会进行比例伸缩

## 排版/CSS 相关

1. 中英文排版 添加空格

2. 弹窗需要在正常屏幕进行测试，用户尽量不需要翻页

3. 注意不同浏览器 字体大小宽度不同，尽量不设置固定宽度（safari 文字会宽一点）

4. CSS 查看 pc.style 和 boss 内样式库  避免多余 style

5. webkit 私有属性，需要注意进行浏览器兼容

6. 检查是否有无用 CSS 样式，无用 class 类名
