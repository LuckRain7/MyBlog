---
sidebar: auto
---





# Koa

> 官网：[ https://koa.bootcss.com/ ](https://koa.bootcss.com/)
>
> Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。 

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

