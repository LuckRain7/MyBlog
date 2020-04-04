---
sidebar: auto
---

# Node

::: tip 目录：
[[toc]]

快速构建： [https://github.com/LuckRain7/node-app-template ](https://github.com/LuckRain7/node-app-template)

:::

## 1、Node基础

### 1-1、什么是Node.js

 Node.js® 是一个基于 [Chrome V8 引擎](https://v8.dev/) 的 JavaScript 运行时。 

 Node.js 特性：

- 非阻塞I/O
- 事件驱动

[Node.js 发展史]( https://www.jianshu.com/p/4e45641123dc )

与前端的不同

- JS 核心语法不变
- 前端 BOM DOM  后端 fs http buffer event  os



## 2、webSocket

> 官网：[ https://eggjs.org/zh-cn/ ](https://eggjs.org/zh-cn/)

example:

```js
const socket = require("socket.io");
const http = require("http");

// 创建服务
const server = http
  .createServer((req, res) => {
    // 允许所有跨域请求
    res.setHeader("Access-Control-Allow-Origin", "*");
    req.writeHead(200, { "Content-Type": "text/html" });
    res.end("");
  })
  .listen(3000);

let pad = null,
  pc = null,
  padReady = false,
  pcReady = false;

// 连接socket.io
socket.listen(server).on("connection", conn => {
  conn.on("message", str => {
    if (str === "Pad") {
      pad = conn;
      padReady = true;
      conn.send("连接成功");
      console.log("Pad");
    }
    if (str === "PC") {
      pc = conn;
      pcReady = true;
      console.log("Pc");
    }
    if (padReady && pcReady) {
      if (str === "PC") str = "我是PC界面";
      pc.send(str);
    }
  });

  conn.on("disconnection", (code, reason) => {
    console.log("关闭连接");
  });
});
```



## 3、Node 实现 ZIP 压缩文件

>  JSZip 工具的使用

下载  JSZip

```bash
yarn add jszip
```

官网实例

```js
// 创建实例
var zip = new JSZip();

// 创建 Hello.txt 并传入数据
zip.file("Hello.txt", "Hello World\n");

// 创建文件夹 images
var img = zip.folder("images");

// 在img文件夹中 创建 smile.gif 并传入数据
img.file("smile.gif", imgData, {base64: true});

// 进行压缩
zip.generateAsync({type:"blob"})
.then(function(content) {
    // 将压缩后的内容导入指定文件中
    saveAs(content, "example.zip");
});
```

简单使用

```js
const ZIP = require('jszip')

async function createZIP(data, filename) {
  //初始化 jszip
  const zip = new ZIP()

  // 读取文件内容
  const packageJSON = await readFile(getFilePath('./package.ejs'))
  const indexJSTemplate = await readFile(getFilePath('./index.ejs'))

  // index.js 模板渲染
  const renderData = {
    secret: data.secret,
    // cmd: "cd C:\\APP\\MyWorkLoad && git pull",
    cmd: `cd ${data.file} && ${data.cmd}`,
    path: data.url,
    port: data.port
  }
  const indexJS = ejs.render(indexJSTemplate, renderData)

  // 创建文件 并将数据传入文件
  zip.file('package.json', packageJSON)
  zip.file('index.js', indexJS)
  // 进行文件压缩 content即压缩后的数据
  const content = await zip.generateAsync({
    type: 'nodebuffer', // node压缩类型
    compressionOptions: {
      level: 5 // 压缩级别 1-9级
    }
  })

  // 将压缩文件存储到静态文件中
  await fs.writeFile(getFilePath(`../../static/${filename}`), content)

  return `${filename}`
}
```

