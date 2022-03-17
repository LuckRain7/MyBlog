---
sidebar: auto
---

# TypeScript

> 版本 ^3.8.3

## 1. 开发环境搭建

创建自己的项目文件，并执行一下命令

```shell
# 初始化项目(npm初始化项目中共字段比yarn多)
npm init -y

# 下载 typescript 和 tslint
yarn add -D typescript tslint

# 初始化ts(生成tsconfig.json)
tsc --init

# 安装webpack4
yarn add -D webpack webpack-cli webpack-dev-server

# 安装ts解析
yarn add -D ts-loader

#安装插件
yarn add -D clean-webpack-plugin html-webpack-plugin
```

配置 启动脚本

`"dev": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js"`

配置 webpack

```JavaScript
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

## 2. tsconfig.json 详解

```json
{
  "compileOnSave": true,
  "compilerOptions": {
    "target": "ES2018", // 编译的目标是什么版本的
    "module": "commonjs", // 生成模块代码时指定模块系统
    "moduleResolution": "node", // 指定如何解析模块以进行导入
    "experimentalDecorators": true, // 启用实验性的 ES 装饰器
    "emitDecoratorMetadata": true,
    "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
    "noImplicitThis": true, // 不允许this有隐式的any类型
    "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
    "stripInternal": true,
    "skipLibCheck": false,
    "pretty": true,
    "declaration": true, // 是否自动创建类型声明文件
    "typeRoots": ["./typings", "./node_modules/@types"],
    "outDir": "dist" // 输出目录
  },
  // 编译器排除文件
  "exclude": ["dist", "node_modules", "test"]
}
```

## 3. 数据类型

```typescript
// 布尔值
let bool: boolean = true;

// 数字类型
let num: number = 123;

// 字符串类型
let str: string = "rain";

// 数组类型
let arr1: number[] = [5];
let arr2: Array<number> = [7];
let arr3: (string | number)[] = [1, "a"];

// 元祖类型(数值个数和类型要对应)
let tuple: [string, number, boolean] = ["a", 1, true];

// 枚举类型
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 2,
  USER = 3,
}
console.log(Roles.SUPER_ADMIN); // 打印1
console.log(Roles.ADMIN); // 打印2
console.log(Roles.USER); // 打印3
console.log(Roles[2]); // 打印 ADMIN

// any类型:可以是任何类型
let value: any;

// void类型:没有返回值
const consoleText = (text: string): void => {
  console.log("text");
};

// null 和 undefined
let u: undefined = undefined;
let n: null = null;

// never类型 永远不存在的值类型(抛错和死循环)
const errorFunc = (message: string): never => {
  throw new Error(message);
};
const infiniteFunc = (): never => {
  while (true) {}
};

// 对象类型
let obj: object = {
  name: "json",
};

// 类型断言
// 两种形式  (<string>target) (target as string)
// tips： .tsx 中只能使用 (target as string)这种形式的类型断言
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length;
  } else {
    return target.toString().length;
  }
};
```

## 4. 接口

### 4.1 基本用法：

接口定义对象类型

```typescript
interface NameInfo {
  firstName: string;
  lastName: string;
}

const getFullName = ({ firstName, lastName }: NameInfo): string => {
  return `${firstName} ${lastName}`;
};

console.log(
  getFullName({
    firstName: "rain",
    lastName: "luck",
  })
);
```

### 4.2 可选属性：

`color?: string`

```typescript
// 设置可选属性 使用？进行标识(color?: string)
interface Vegetables {
  color?: string;
  type: string;
}
const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ? color + "" : ""} ${type}`;
};
console.log(
  getVegetables({
    // color: 'blue',
    type: "apple",
  })
);
```

### 4.3 多余属性检查

方法一：类型断言

```typescript
interface Vegetables {
  color?: string;
  type: string;
}
const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ? color + "" : ""} ${type}`;
};
getVegetables({
  // color: 'blue',
  type: "apple",
  size: 20,
} as Vegetables);
```

方法二：索引签名

```typescript
interface Vegetables {
  color?: string;
  type: string;
  [props: string]: any;
}
const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ? color + "" : ""} ${type}`;
};
getVegetables({
  // color: 'blue',
  type: "apple",
  size: 20,
  time: "2020",
});
```

方法三：利用类型兼容性

```typescript
interface Vegetables {
  color?: string;
  type: string;
}

const getVegetables = ({ color, type }: Vegetables) => {
  return `A ${color ? color + "" : ""} ${type}`;
};

const vegetableInfo = {
  color: "blue",
  type: "apple",
  size: 20,
};
console.log(getVegetables(vegetableInfo));
```

### 4.4 只读属性

`readonly type: string,`

```typescript
interface Vegetables {
  color?: string;
  readonly type: string;
}
const vegetableObj: Vegetables = {
  type: "tomato",
};
vegetableInfo.type = "carrot"; //报错！！
```

### 4.5 接口定义函数结构

```typescript
interface AddFunc {
  (num1: number, num2: number): number;
}

const add: AddFunc = (n1, n2) => {
  return n1 + n2;
};
```

### 4.6 定义索引类型

```typescript
interface RoleDic {
  [id: number]: string;
}
const role1: RoleDic = {
  0: "super_admin",
};
```

### 4.7 接口的继承

```typescript
interface Vegetables {
  color: string;
}

interface Tomato extends Vegetables {
  radius: number;
}

interface Carot extends Vegetables {
  length: number;
}

const tomato: Tomato = {
  color: "red",
  radius: 12,
};
```

### 4.8 混合类型接口

```typescript
interface Counter {
  (): void;
  count: number;
}

const getCounter = (): Counter => {
  const c = () => {
    c.count++;
  };
  c.count = 0;
  return c;
};

const counter: Counter = getCounter();

counter();
console.log(counter.count);
counter();
console.log(counter.count);
counter();
console.log(counter.count);
//1 2 3
```

## 4.9 为对象动态分配属性

```typescript
interface LooseObject {
  name: string;
  age?: number;
  [key: string]: any;
}

let obj: Developer = { name: "rain" };
obj.age = 30;
obj.city = "BeiJing";
```

## 5. 函数

为函数定义类型

```typescript
//  完整的函数类型
function add(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

//  使用类型别名定义
type Add = (x: number, y: number) => number;
let addFunc: Add;
addFunc = (arg1: number, arg2: number): number => {
  return arg1 + arg2;
};
```

函数重载（只能使用 function 进行重载）

```typescript
function handleData(x: string): string[];
function handleData(x: number): number[];
function handleData(x: any): any[] {
  if (typeof x === "string") {
    return x.split("");
  } else {
    return x
      .toString()
      .split("")
      .map((item: any) => Number(item));
  }
}
```

## 6. 泛型

就像传递参数一样，我们传递了我们想要用于特定函数调用的类型。

![img](/img/ts/t-1.jpeg)

参考上面的图片，当我们调用 `identity<Number>(1)` ，`Number` 类型就像参数 `1` 一样，它将在出现 `T` 的任何位置填充该类型。图中 `<T>` 内部的 `T` 被称为类型变量，它是我们希望传递给 identity 函数的类型占位符，同时它被分配给 `value` 参数用来代替它的类型：此时 `T` 充当的是类型，而不是特定的 Number 类型。

其中 `T` 代表 **Type**，在定义泛型时通常用作第一个类型变量名称。但实际上 `T` 可以用任何有效名称代替。除了 `T` 之外，以下是常见泛型变量代表的意思：

- K（Key）：表示对象中的键类型；
- V（Value）：表示对象中的值类型；
- E（Element）：表示元素类型。

其实并不是只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量。比如我们引入一个新的类型变量 `U`，用于扩展我们定义的 `identity` 函数：

```typescript
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

console.log(identity<Number, string>(68, "Semlinker"));
```

![img](/img/ts/t-2.jpeg)

除了为类型变量显式设定值之外，一种更常见的做法是使编译器自动选择这些类型，从而使代码更简洁。我们可以完全省略尖括号，比如：

```typescript
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

console.log(identity(68, "Semlinker"));
```

对于上述代码，编译器足够聪明，能够知道我们的参数类型，并将它们赋值给 T 和 U，而不需要开发人员显式指定它们。

---

参考文章

- [细数这些年被困扰过的 TS 问题 - 阿宝哥](https://segmentfault.com/a/1190000023858355)
