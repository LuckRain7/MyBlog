# 正则

用来处理字符串的规则

- 只能处理字符串
- 他是一个规则：可以验证字符串是否符合某些规则（test），也可以吧字符串中符合规则的内容捕捉到（exec/match）


```JavaScript
let str = "good good study, day day up!"

let reg = /\d+/;
reg.test(str)

str = "2021-07-25"
reg.exec(str) 
// ["2021", index: 0, input: "2021-07-25", groups: undefined]
```

## 编写正则表达式

创建方式有两种

```js
// 自变量方式常见（两个斜杠之间抱起来，描述规则的元字符）
let reg1 = /\d+/

// 构造函数模式创建 参数（元字符字符串，修饰符字符串）
let reg2 = new RegExp("\\d+")
```

正则表达式由两部分组成

- 元字符
- 修饰符

```js
/* 常用元字符 */
// 1. 量词元字符 设置出现的次数
* // 零到多次
+ // 一到多次
? // 零次或者一次
{n} // 出现n次
{n,} // 出现n到多次
{n,m} // 出现n到m次
```