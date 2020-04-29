---
sidebar: auto
---

# Egg

> Egg 奉行『**约定优于配置**』
>
> 官网：[ https://eggjs.org/zh-cn/ ](https://eggjs.org/zh-cn/)

## 1.  安装

通过脚手架安装

```bash
yarn global add egg-init
egg-init [dir] --type=simple
```

## 2.  目录结构

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

### ts + express

[Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript — Building RESTful Web APIs with Node.js, Express, MongoDB and TypeScript 1.0.1 documentation](https://restful-api-node-typescript.books.dalenguyen.me/en/latest/index.html)

[frontEnd_note/basic/nodejs-basic/framework/express-demo at master · cc7gs/frontEnd_note](https://github.com/cc7gs/frontEnd_note/tree/master/basic/nodejs-basic/framework/express-demo)