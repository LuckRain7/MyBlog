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





## 2、Express

> 官网 [ https://www.expressjs.com.cn/ ](https://www.expressjs.com.cn/)

- cors -> 跨域模块

  ```js
  # yarn add cors

  const cors = require('cors')
  app.use(cors())
  ```

- express-generator -> express 官方项目生成器

  ```json
  # yarn global add express-generator
  # express [文件名]
  ```

- [ejs](https://ejs.bootcss.com/) -> 模板引擎

> 快速构建

```json
# package.json
{
"name": "DEMO",
"version": "0.0.0",
"author": "LuckRain7<https://github.com/LuckRain7>",
"description": "express项目模板",
"keywords": [
  "node.js",
  "express"
],
"private": false,
"scripts": {
  "start": "node ./bin/www",
  "dev": "set NODE_ENV=development && nodemon ./bin/www",
  "prod": "set NODE_ENV=production && nodemon ./bin/www"
},
"license": "MIT",
"dependencies": {
  "body-parser": "^1.19.0",
  "cookie-parser": "~1.4.4",
  "debug": "~2.6.9",
  "ejs": "^3.0.1",
  "express": "~4.16.1",
  "http-errors": "~1.6.3",
  "morgan": "~1.9.1"
}
}
```

```js
# app.js

const express = require('express') // 引入express模块
const createError = require('http-errors')
const path = require('path') // 引入path模块,该模块包括了一些处理文件路径的功能
const cookieParser = require('cookie-parser') // cookie操作中间件
const logger = require('morgan') // HTTP请求日志中间件
const bodyParser = require('body-parser') //body-parser插件用于post参数的解析，最常用的是其中的json和urlencoded的parser，可分别对以JSON格式的post参数和urlencoded的post参数进行解析，均可获得一个JSON化的req.body

// 自定义路由模块的引用
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const adminRouter = require('./routes/admin')

// 创建一个 Express 应用
const app = express()

// 模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev')) //日志设置，使用参见https://github.com/expressjs/morgan

// 可以进行选择使用
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json()) //解析JSON格式的post参数
app.use(bodyParser.urlencoded({ extended: false })) //解析urlencoeded编码的post参数，URLEncoded编码中,所有的字符均为ANSCII码

app.use(cookieParser()) //cookie设置
app.use(express.static(path.join(__dirname, 'public'))) //静态文件

// 自定义路由模块的引用
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/admin/api', adminRouter)

// 捕捉404错误并进行错误处理
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // 开发环境错误处理
  res.locals.message = err.message


  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
```

## 3、Koa

> 官网：[ https://koa.bootcss.com/ ](https://koa.bootcss.com/)
>
>  Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。 

- koa-cors -> 跨域
- koa-router -> 路由
- koa-static -> 静态资源
- koa-body -> 解析 body
- koa-logger -> 日志管理

> 快速构建

```json
# package.json
{
  "name": "DEMO",
  "version": "1.0.0",
  "description": "",
  "main": "main.js",
  "scripts": {
    "serve": "nodemon main.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/LuckRain7/DEMO.git"
  },
  "keywords": [],
  "author": "LuckRain",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/LuckRain7/DEMO/issues"
  },
  "homepage": "https://github.com/LuckRain7/DEMO#readme",
  "dependencies": {
    "jsonwebtoken": "^8.5.1",
    "koa": "^2.11.0",
    "koa-body": "^4.1.1",
    "koa-cors": "^0.0.16",
    "koa-jwt": "^3.6.0",
    "koa-logger": "^3.2.1",
    "koa-router": "^7.4.0",
    "koa-static": "^5.0.0",
    "mongoose": "^5.7.12"
  }
}
```

```js
# main.js
const Koa = require("koa");
const Cors = require("koa-cors");
const logger = require("koa-logger");
const KoaBody = require("koa-body");
// 路径组件
const router = require("./router/index.js");
const routerAdmin = require("./router/admin.js");
const routerUser = require("./router/user.js");
// 数据库
const MongoDB = require("./mongoDB/Link.js");
// 校验函数
const { verifyToken } = require("./config/jwt.js");
// 初始化
const app = new Koa();
// 处理错误路由
app.use(require("./router/error.js"));
//解析
app.use(KoaBody());
// 日志
app.use(logger());
// 静态文件
app.use(require("koa-static")(__dirname + "/public"));
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
//跨域
app.use(Cors());
// 链接数据库
MongoDB(app);
// 用户前端路由
app.use(routerUser.routes()).use(routerUser.allowedMethods());
// jwt校验拦截
app.use(verifyToken);
// 启动路由
app.use(router.routes()).use(router.allowedMethods());
app.use(routerAdmin.routes()).use(routerAdmin.allowedMethods());
// 监听端口
app.listen(4000, function() {
  console.log("run in 4000");
});
```

## 4、Egg

> Egg 奉行『**约定优于配置**』
>
> 官网：[ https://eggjs.org/zh-cn/ ](https://eggjs.org/zh-cn/)

### 4.1 安装

通过脚手架安装

```bash
yarn global add egg-init
egg-init [dir] --type=simple
```



### 4.2 目录结构

```
Egg
├── package.json
├── app.js (可选)
├── agent.js (可选)
├── app
|   ├── router.js  (配置 URL 路由规则)
│   ├── controller  (解析用户的输入，处理后返回相应的结果)
│   |   └── home.js
│   ├── service  (编写业务逻辑层)
│   |   └── user.js
│   ├── middleware  (中间件)
│   |   └── response_time.js
│   ├── schedule  (定时任务)
│   |   └── my_task.js
│   ├── public  (静态资源)
│   |   └── reset.css
│   ├── view  (放置模板文件)
│   |   └── home.tpl
│   └── extend (框架的扩展)
│       ├── helper.js (可选)
│       ├── request.js (可选)
│       ├── response.js (可选)
│       ├── context.js (可选)
│       ├── application.js (可选)
│       └── agent.js (可选)
├── config  (配置文件)
|   ├── plugin.js  (置需要加载的插件)
|   ├── config.default.js
│   ├── config.prod.js
|   ├── config.test.js (可选)
|   ├── config.local.js (可选)
|   └── config.unittest.js (可选)
└── test  (单元测试)
    ├── middleware
    |   └── response_time.test.js
    └── controller
        └── home.test.js
```

### 









## 5、webSocket

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

---

END
