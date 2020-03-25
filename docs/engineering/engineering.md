---
sidebar: auto
---
# 前端知识图谱

## 一、JavaScript

### 1、函数

- javascript中内存管理

- 保证代码质量

- 提高代码可靠性

- underscore源码分析

- compose函数和pipe函数

- 高阶函数

- 常用函数

- 防抖和节流

- 深拷贝和浅拷贝

### 2、异步编程

- [理解异步](/engineering/异步.html)
- Event Loop 机制
  - 浏览器
  - Node.js
- 异步编程方法
  - [回调函数](/engineering/异步.html#_1-回调函数)
  - 发布/订阅
  - 深入理解 promise
  - generator函数及异步应用
- 深入理解 async 和 await
- 处理异步的框架爱RxJS
- webWorker 的多线程机制

### 3、设计模式

- 设计模式概论

- 封装与对象

- 提高复用

- 提高可拓展性

- 提高代码质量

 ### 4、模块加载

  - [模块加载方案](/engineering/模块加载方案)

  - 闭包

  - 资源定位 异步加载

  - 解析依赖

  - WebComponent

## 二、计算机网络

### 1、网络协议

- TCP/IP

- HTTP

- TLS

- HTTP2 & HTTP3


### 2、网络请求

- Request
  - Form 提交
  - Ajax 和 Fetch
  - 文件上传
  - Axios源码分析

- WebSocket

- 缓存

### 3、网络安全

- 同源策略

- XSS攻击

- CSRF攻击

### 4、路由

## 三、Vue.js

### 1、初识Vue

- 模板

- 数据

- 事件 & 样式

- 组件

### 2、Vue组件

- 自定义指令
- 插槽
- 双向绑定与单向数据流
- 组件化设计
- 插件
- 组件逻辑复用

### 3、Vue生态

- 状态管理 vuex
- [路由 vue-router](/Vue/Vue-router)
- [脚手架 vue cli](/Vue/Vue-CLI)
- 静态网站生成器 VuePress
- 服务端渲染 Nuxt.js
- Vue DevTools
- Composition API RFC

### 4、Vue实践

- 对话框
- 表单
- 动画切换效果

### 5、企业级组件系统架构

- 可复用组件设计

- 权限控制

- 自定义皮肤设置

- 国际化设置

- 自动化页面埋点

### 6、深入Vue源码设计

- 响应式源码分析

- Vue3 conposition api

- 渲染函数

- diff path

### 7、Vue 3.0

- Vue 3.0源码

## 四、React

### 1、初识react

- React 环境搭建

- 组件和 JSX

- Props、列表渲染、条件渲染

- CSS In React

### 2、React探索

- 事件绑定和处理

- 使用和理解 state

- state 进阶

- 静态检查

- 生命周期的理解

- React 哲学

- 高阶组件

### 3、React生态应用

- [react 路由](/React/React.html#react-router)

- 表单和表单验证

- [Ant Design 使用](/React/React.html#ant-design-组件库)

- AntV 使用

### 4、实战应用

- react-router用法
  - 动态路由
  - 嵌套
  - 路由组件传参
  - [重定向](/React/React.html#简单应用)

- react-router 进阶

- 实践添加路由管理

- 权限控制的实践

### 5、React原理

- React Virtual-DOM 原理

- React Fiber

- [React 新生命周期](/React/React.html#生命周期)

- [React Hooks](/React/React.html#hook)

- React new feature

### 6、React 状态管理

- [Redux 入门](/React/React.html#redux)

- Redux 进阶
  - reselect
  - @rematch/core
  - redux-actions
  - dva
  - immutable 数据方案

- MobX 入门

- Context API

### 7、React 高级实践和性能优化

- TypeScrip
- React 组件/性能优化

### 8、企业级React框架

- [Umi v3](/React/umi-v3)

## 五、Node.JS

### 1、node.js 基础

- nodejs 发展
- nodejs 提供的能力原生API
- node 原生的Web Server实践
- Node Web Server 单测的写法
- Node 进阶及原理解析
- Node 原生的局限性与框架的必要性
- [NVM  Node版本管理工具](/engineering/nvm) 
- Express 框架应用

### 2、Web服务及Koa

- Koa 给出的答卷，解决原生困境

- Koa 重写 Web Server

- Koa 进阶及原理解析

- Koa 源码分析 & 手写Koa 核心代码

- Koa 在企业开发中的应用

### 3、企业级 Node.JS 框架

- 企业级应用对Koa提出的挑战及BFF开发时
- 手写企业级Node框架
- Node框架爱基建
- 云上的Node及微服务
- Egg 企业级开发框架

## 六、工程化

### 1、脚本世界

- [npm & yarn  包管理工具](/tools/package) 

- [package.json  项目说明文件](/engineering/package.json.html) 

- bash简介和快速入门

- node开发简单CLI工具

### 2、规范先行

- 代码风格

  - Eslint

  - [prettierrc  代码格式化](/share/config.html#prettierrc)

- 版本规范和Changlog

- 其他规约

### 3、质量

- code review

- 测试基础

- 单元测试

- e2e测试

- 测试驱动开发

- 监控和异常上报

### 4、工程设计

- 工程设计简介

- 工程结构范式

- 多仓库选型

### 5、构建艺术

- 构建简史

- Babel
  - token到ast，编译理论
  - 基本概念
  - 使用
  - 插件编写

- Webpack
  - 设计思想
    - Tapable源码分析
  - 高级使用
  - 从create-react-app学习配置
  - Loader详解
  - Plugin详解
  - 常见Plugin使用指南

### 6、持续集成与部署

- CI/CD简介

- 持续集成
  - 巧用GitHub
  - CI平台-义jenkins为例

- 部署
  - 前后端分离
  - 发布策略
  - 多环境发布

- 虚拟化
  - docker
  - kubernetes

### 7、[GIT](/tools/Git.html)

- [Git原理介绍](/tools/Git.html#git-原理)

- [git基础操作-常用命令](/tools/Git.html#git-常用命令)

- git进阶
  - [rebase的作用](/tools/Git.html#git-rebase)
  - reset与revert的区别
  - reflog
  - cherry-pick
  - git与shell结合

- 前端工程化应用- husky link-staged

### 8、效率工具

- 真机远程代码调试

- “无线”调试

- 在移动端调试

- 使用代理工具进行调试

- 在公网访问本地服务

- 随机数据的生成

- RESTful API 快速模拟

- SVRX
  - 一个平台代替前面所有工具
  - Server-X的进阶用法