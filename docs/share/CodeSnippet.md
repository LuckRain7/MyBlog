
---
sidebar: auto
---

# 代码片段

## Element

### 表单校验

```JavaScript
const rules = {
    companyName: [{required: true, message: '企业名称不能为空', trigger: 'blur'}],
    companyId: [
        {required: true, message: '公司 ID 不能为空', trigger: 'blur'},
        {required: true, pattern: /^[0-9]*$/, message: '只能输入数字', trigger: 'change'}
    ],
    // TODO RAIN 公司的专场活动页职位排序，按照此处配置职位id顺序进行排序
    jobIds: [
        {required: true, message: '职位 ID 不能为空', trigger: 'blur'},
        // 数字校验，只能输入 数字 & 逗号
        {required: true, pattern: /^[\d,]*$/, message: '只能输入数字', trigger: 'change'}
    ],
    maxDeliverCnt: [
        {required: true, message: '最多可投递数量不能为空', trigger: 'blur'},
        {required: true, pattern: /^[\d,]*$/, message: '只能输入数字', trigger: 'change'}
    ],
    tags: [{required: true, message: 'tags不能为空', trigger: 'blur'}],
    logo: [
        {required: true, message: '企业 Logo 不能为空', trigger: 'change'},
        // 必须是链接校验（报错文案：企业链接错误）
        {type: 'url', required: true, message: '企业链接错误', trigger: 'change'}
    ],
    description: [{required: true, message: '企业介绍不能为空', trigger: 'blur'}],
    companyUrl: [
        {required: true, message: '企业链接不能为空', trigger: 'change'},
        // 必须是链接校验（报错文案：企业链接错误）
        {type: 'url', required: true, message: '企业链接错误', trigger: 'change'}
    ]
}
```