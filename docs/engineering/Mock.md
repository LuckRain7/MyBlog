# Mock

> 模拟数据

## 安装

```bash
yarn add mockjs -D
```

## 一、语法规范

### 1、数据模板定义规范 DTD

```
'属性名|生成规则': 属性值
'name|rule': value
```

### 2、数据占位符定义规范 DPD

```
@占位符
@占位符(参数 [, 参数])
```

example:

```js
Mock.mock({
    name: {
        first: '@FIRST',
        middle: '@FIRST',
        last: '@LAST',
        full: '@first @middle @last'
    }
})
// =>
{
    "name": {
        "first": "Charles",
        "middle": "Brenda",
        "last": "Lopez",
        "full": "Charles Brenda Lopez"
    }
}
```

## 二、函数

### 1、Mock.mock

> rurl： 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则 
>
> rtype： 表示需要拦截的 Ajax 请求类型。 
>
> template ：数据模板

Mock.mock( template )

Mock.mock( rurl, template )

Mock.mock( rurl, function( options ) )

Mock.mock( rurl, rtype, template )

Mock.mock( rurl, rtype, function( options ) )   常用

### 2、Mock.Random

对照表

| Type                | Method                                                       |
| ------------------- | ------------------------------------------------------------ |
| Basic               | boolean（布尔值）, natural（自然数）, integer（整数）, float（浮点数）, character（字符）, string（字符串）, range（整型数组） |
| Date                | date（日期字符串）, time（时间字符串）, datetime（日期和时间字符串）, now（当前的日期和时间字符串） |
| Image(TODO)         | image, dataImage                                             |
| Color(TODO)         | color                                                        |
| Text（TODO）        | paragraph（文本）, sentence, word, title, cparagraph（中文文本）, csentence, cword, ctitle |
| Name(TODO)          | first（英文名）, last（英文姓）, name（英文姓名）, cfirst（中文姓）, clast（中文名）, cname（中文姓名） |
| Web(TODO)           | url, domain, email, ip, tld                                  |
| Address(TODO)       | area, region（（中国）大区）,province（（中国）省（或直辖市、自治区、特别行政区））,city（（中国）市）,county（（中国）县） |
| Helper(TODO)        | capitalize, upper, lower, pick, shuffle                      |
| Miscellaneous(TODO) | guid（GUID）, id（18 位身份证）                              |



#### boolean   返回一个随机的布尔值

```js
Random.boolean()  //true flase
Random.boolean(1, 9, true)  // (1/1+9)%true (9/1+9)%false
```

#### natural  返回一个随机的自然数 

#### integer  返回一个随机的整数

#### float  返回一个 随机的浮点数

```js
Random.natural( min?, max? )
Random.integer( min?, max? )
Random.float( min?, max?, dmin?, dmax? )
```

#### character  返回一个随机字符

```js
Random.character() // => "P"
Random.character('lower') // => "y"
Random.character('upper') // => "X"
Random.character('number') // => "1"
Random.character('symbol') // => "&"
Random.character('aeiou') // => "u"
```

#### string   返回一个随机字符串 

```js
Random.string( pool?, min?, max? )
Random.string() // => "pJjDUe"
Random.string( 5 ) // => "GaadY"
Random.string( 'lower', 5 ) // => "jseqj"
Random.string( 7, 10 ) // => "UuGQgSYk"
Random.string( 'aeiou', 1, 3 ) // => "ea"
Random.string( '壹贰叁肆伍陆柒捌玖拾', 3, 5 ) // => "肆捌伍叁"
```

#### range   返回一个整型数组 

```js
Random.range( start?, stop, step? )
Random.range(10) // => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Random.range(3, 7) // => [3, 4, 5, 6]
Random.range(1, 10, 2) // => [1, 3, 5, 7, 9]
Random.range(1, 10, 3) // => [1, 4, 7]
```

#### date  回一个随机的日期字符串 

```js
Random.date( format? )
Random.date() // => "2002-10-23"
Random.date('yyyy-MM-dd') // => "1983-01-29"
```

#### time  返回一个随机的时间字符串

```js
Random.time( format? )
Random.time('HH:mm:ss') // => "03:57:53"
```

#### datetime  返回一个随机的日期和时间字符串 

```js
Random.datetime() // => "1977-11-17 03:50:15"
Random.datetime('yyyy-MM-dd A HH:mm:ss') // => "1976-04-24 AM 03:48:25"
```

#### now   返回当前的日期和时间字符串 

```js
Random.now() // => "2014-04-29 20:08:38 "
```

#### 扩展

```js
Random.extend({
    constellation: function(date) {
        var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(constellations)
    }
})
Random.constellation()
// => "水瓶座"
Mock.mock('@constellation')
// => "天蝎座"
Mock.mock({
    constellation: '@constellation'
})
// => { constellation: "射手座" }
```

## 三、常用例子

