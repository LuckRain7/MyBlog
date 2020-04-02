---
sidebar: auto
---
# TypeScript

> 版本 ^3.8.3

##  1.  搭建开发环境

创建自己的项目文件，并执行一下命令

```bash
 #初始化项目(npm初始化项目中共字段比yarn多)
npm init -y

#下载 typescript 和 tslint
yarn add typescript tslint -D

# 初始化ts(生成tsconfig.json)
tsc --init

# 安装webpack4
yarn add webpack webpack-cli webpack-dev-server -D

# 安装ts解析
tyarn add ts-loader -D

#安装插件
tyarn add clean-webpack-plugin html-webpack-plugin -D
```

配置 启动脚本

`  "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js"`

配置webpack

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 配置入口文件
    entry: './src/index.ts',
    // 输出文件
    output: {
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], //配置js ts tsx文件
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/, //忽略解析node_modules中文件
            },
        ],
    },
    devtool:
        process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: './dist',
        stats: 'errors-only',
        compress: false, 
        host: 'localhost',
        port: 8089,
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist'],
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
    ],
}
```



## 2.  tsconfig.json详解

TODO

## 3.  基础类型

position：src\example\basic-type.ts

```typescript
// 布尔值
let bool: boolean = true

// 数字类型
let num: number = 123

// 字符串类型
let str: string
str = 'abe'
str = `数值是${num}`

// 数组类型
let arr1: number[]
arr1 = [5]
let arr2: Array<number>
let arr3: (string | number)[]
arr3 = [1, 'a']

// 元祖类型(数值个数和类型要对应)
let tuple: [string, number, boolean]
tuple = ['a', 1, true]

// 枚举类型
enum Roles {
    SUPER_ADMIN = 1,
    ADMIN = 2,
    USER = 3
}
console.log(Roles.SUPER_ADMIN); //打印1
console.log(Roles.ADMIN);       //打印2
console.log(Roles.USER);        //打印3
console.log(Roles[2]);          //打印 ADMIN

// any类型:可以是任何类型
let value: any
value = 'abc'
value = 123

// void类型:没有返回值
const consoleText = (text: string): void => {
    console.log('text');
}

// null和undefined
let u: undefined
u = undefined
let n: null
n = null

// never类型 永远不存在的值类型(抛错和死循环)
const errorFunc = (message: string): never => {
    throw new Error(message)
}
const infiniteFunc = (): never => {
    while (true) { }
}

// object
let obj: object = {
    name: 'json'
}
let obj2 = obj

// 类型断言
// 两种形式  (<string>target) (target as string)
// .tsx 中只能使用(target as string) 
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}
```

TIP：.tsx 中只能使用(target as string) 这种形式的类型断言

## 4.  接口

### 4-1 基本用法：

接口定义对象类型

```typescript
interface NameInfo {
    firstName: string
    lastName: string
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
    return `${firstName} ${lastName}`
}

console.log(getFullName({
    firstName: 'rain',
    lastName: 'tom',
}));
```

### 4-2  可选属性：

color?: string

```typescript
// 设置可选属性 使用？进行标识(color?: string)
interface Vegetables {
    color?: string,
    type: string
}
const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color ? color + '' : ''} ${type}`
}
console.log(getVegetables({
    // color: 'blue',
    type: 'apple'
}));
```

### 4-3  多余属性检查

方法一：类型断言

```typescript
interface Vegetables {
    color?: string,
    type: string
}
const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color ? color + '' : ''} ${type}`
}
getVegetables({
    // color: 'blue',
    type: 'apple',
    size: 20
} as Vegetables)
```

方法二：索引签名

```typescript
interface Vegetables {
    color?: string,
    type: string,
    [props: string]: any
}
const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color ? color + '' : ''} ${type}`
}
getVegetables({
    // color: 'blue',
    type: 'apple',
    size: 20,
  	time:'2020'
})
```

方法三：利用类型兼容性

```typescript
interface Vegetables {
    color?: string,
    type: string,
}

const getVegetables = ({ color, type }: Vegetables) => {
    return `A ${color ? color + '' : ''} ${type}`
}

const vegetableInfo = {
    color: 'blue',
    type: 'apple',
    size: 20
}
console.log(getVegetables(vegetableInfo));
```

### 4-4  只读属性

`readonly type: string,`

```typescript
interface Vegetables {
    color?: string,
    readonly type: string,
}
const vegetableObj: Vegetables = {
    type:'tomato'
}
vegetableInfo.type = 'carrot' //报错！！
```

### 4-5  接口定义函数结构

```typescript
interface AddFunc {
    (num1: number, num2: number): number
}

const add: AddFunc = (n1, n2) => {
    return n1 + n2
}
```

### 4-6 定义索引类型

```typescript
interface RoleDic {
    [di: number]: string
}
const role1: RoleDic = {
    0: 'super_admin'
}
```

### 4-7  接口的继承

```typescript
interface Vegetables {
    color: string
}

interface Tomato extends Vegetables {
    radius: number
}

interface Carot extends Vegetables {
    length: number
}

const tomato: Tomato = {
    color: 'red',
    radius: 12
}
```

### 4-8  混合类型接口

```typescript
interface Counter {
    (): void,
    count: number
}

const getCounter = (): Counter => {
    const c = () => { c.count++ }
    c.count = 0
    return c
}

const counter: Counter = getCounter()

counter()
console.log(counter.count);
counter()
console.log(counter.count);
counter()
console.log(counter.count);
//1 2 3
```

## 5.  函数

为函数定义类型

```typescript
//  完整的函数类型
function add(arg1: number, arg2: number): number {
    return arg1 + arg2 
}

//  使用类型别名定义
type Add = (x: number, y: number) => number
let addFunc: Add
addFunc = (arg1: number, arg2: number): number => {
    return arg1 + arg2
}
```

函数重载（只能使用function进行重载）

```typescript
function handleData(x: string): string[]
function handleData(x: number): number[]
function handleData(x: any): any[] {
    if (typeof x === 'string') {
        return x.split('')
    } else {
        return x.toString().split('').map((item: any) => Number(item))
    }
}
```

## 6.  泛型

基本使用

```typescript
const getArray = <T>(value: T, times: number = 5): T[] => {
    return new Array(times).fill(value)
}

console.log(getArray<number>(123, 4).map((item) => item.toFixed()))
```

