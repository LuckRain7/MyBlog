---
sidebar: auto
---

# 前端知识图谱

## HTML CSS

- HTML
  - [元素 Elements](/frontend/HTML.html#_1-elements)
  - [DOM - Document Object Model](/frontend/HTML.html#_2-dom)
  - [BOM - Browser Object Model](/frontend/HTML.htmll#_3-bom)
- CSS
  - [选择器](/frontend/CSS.html#_1-选择器)
  - [CSSOM](/frontend/CSS.html#_2-cssom)
  - 布局
    - 正常布局流(Normal flow)
    - display 属性(The display property)
    - 弹性盒子(Flexbox)
    - Grid 布局(Grid)
    - 浮动布局(Floats)
    - 定位(Positioning)
    - 表格布局(Table layout)
    - 多列布局(Multiple-column layout)
  - 交互
  - 绘制
  - 预处理器： [Sass](/frontend/css/sass.html) | [Less](/frontend/css/less.html)

## JavaScript

- 函数

  - underscore 源码分析

  - compose 函数和 pipe 函数

  - 高阶函数

  - [防抖和节流](/frontend/JavaScript.html#一、深拷贝和浅拷贝)

  - [深拷贝和浅拷贝](/frontend/JavaScript.html#一、深拷贝和浅拷贝)

- 异步编程

  - [理解异步](/engineering/async.html)

  - Event Loop 机制

    - 浏览器

    - Node.js

  - 异步编程方法

    - [回调函数](/engineering/async.html#_1-回调函数)

    - 发布/订阅

    - [深入理解 promise](/frontend/JavaScript.html#_1-promise)

    - [generator 函数及异步应用](/frontend/JavaScript.html#_2-generator)

  - [深入理解 async 和 await](/frontend/JavaScript.html#_1-async-await)

  - 处理异步的框架 RxJS

  - Web Worker 的多线程机制

- 模块加载

  - [模块加载方案](/engineering/module.html)

  - [闭包](/frontend/JavaScript.html#闭包)

  - 资源定位 异步加载

  - 解析依赖

  - WebComponent

- [V8 内存管理](<](/engineering/v8.html)>)

  - JavaScript 中的垃圾收集、内存管理

  - V8 垃圾回收机制分类

  - 引用计数、标记清除、标记整理和增量标记

## 计算机网络

- 网络协议

  - OSI 七层模型

  - TCP/IP 参考模型

  - TLS

  - 物理层

  - 数据链路层

    - 以太网

    - 总线型拓扑

    - 冲突检测

    - MAC 地址

    - 以太网帧

    - ARP 协议

  - 互联网层(网络层)

    - IP 协议

    - 选址

    - 子网掩码和子网划分

  - 传输层

    - TCP 数据包、TCP 序列号

    - 滑动窗口的拥塞检测

    - 三次握手和四次挥手

    - UDP 协议、DNS 协议

  - 应用层

    - [HTTP](/engineering/network/http.html#_1-http)

    - [HTTPS](/engineering/network/http.html#_2-https)

    - [HTTP2](/engineering/network/http.html#_3-http2)

- 网络请求

  - Request

    - Form 提交

    - Ajax 和 Fetch

    - [文件上传](https://github.com/LuckRain7/growth-record/tree/master/Demo/file-upload)

    - [Axios 源码分析](https://github.com/LuckRain7/Knowledge-Sharing/blob/master/translate/axios.md)

  - [WebSocket](/server/Node.html#_1-2-websocket)

  - [缓存](https://rain7.top/cache/)

- 网络安全

  - Web 漏洞的分析与防御、同源策略

  - XSS（跨站脚本攻击）

  - CSRF（跨站请求伪造攻击）

## Vue

- Vue 基础

  - 什么是组件 | 组件的应用

  - 组件的属性和校验

  - 组件间通信、EventBus 应用

  - 组件 slot 用法

  - 双向绑定与单向数据流

  - 组件化设计

  - 公共组件封装

  - 上拉刷新、下拉加载、图片懒加载

  - [axios 数据获取/应用拦截器](/engineering/axios.html)

* Vue-Router（权限控制）

  - [vue router 的基础应用](/Vue/Vue-router.html)

  - [编程式导航](/Vue/Vue-router.html#_14、编程式的导航)、 [命名视图](/Vue/Vue-router.html#_8、命名视图)、 [路由重定向](/Vue/Vue-router.html#_3、重定向)

  - [路由守卫](/Vue/Vue-router.html#_11、路由守卫)、 [路由懒加载](/Vue/Vue-router.html#_15、路由懒加载)、 [路由元信息](/Vue/Vue-router.html#_13、路由元信息)、[路由监听](/Vue/Vue-router.html#_5、路由监听)

  - 实现动态权限

  - 菜单、按钮及权限认证、登录权限

  - 路由动画配置

* Vuex （状态管理）

  - [Vuex 基础](https://vuex.vuejs.org/zh/)

  - [数据持久化](/Vue/Vuex.html#_1-数据持久化)

* Vue CLI （脚手架工具）

  - Vue CLI 4.0 项目搭建

  - [如何 Mock 后台数据](/engineering/Mock.html)

  - 项目布署和上线

* Vue SSR 服务端渲染

  - SSR 原理和设计理念

  - 集成路由及代码分割

  - 集成 KOA 实现服务器端渲染

  - 集成 VueSSR 和 Vuex 实现数据同步

  - Webpack 构建 Vue SSR 项目

  - 路由懒加载

  - Vue 骨架屏、页面预渲染

  - Vue-devtools 开发插件

  - [Nuxt 实战(Webhooks 生成器项目)](/Vue/nuxt/nuxt实战.html)

  - Vue 动画原理

* Vue 实践

  - 动画切换效果

  - 基于 JWT 的注册登录权限管理

  - 从零封装系列（模态窗口组件、装轮播图组件、表格组件、上拉加载和下拉刷新组件、树形组件、日历组件、表单组件、异步加载的省和市级联组件）

  - 基于 element-ui/iview 二次封装

  - 组件的单元测试和集成测试

  - 国际化设置

  - 自动化页面埋点

  - 自定义皮肤设置

* 深入 Vue 源码

  - MVVM 响应式原理及源码分析

  - 手写实现 Vue3.0 响应式原理

  - 手写实现 Vue-Router

  - 手写实现 vuex 中的 state、getter、commit、dispatch、actions/mutations、模块化

  - 虚拟 DOM

  - DOM diff

  - 模板编译和代码生成

## React

- React 基础

  - React 环境搭建

  - 组件和 JSX

  - Props、列表渲染、条件渲染、事件绑定和处理

  - CSS In React

  - 使用和理解 state、state 进阶、静态检查

  - 生命周期的理解、React 哲学、高阶组件

- React-Router（路由管理）

  - 动态路由、嵌套、路由组件传参、[重定向](/React/React.html#简单应用)

  - 路由配置和二级路由、路由懒加载

  - 权限管理和受保护的路由

  - 手写 1 个完整的 React-router4 路由库（HashRouter 和 BrowserRouter、Route、Switch、Link 和 NavLink、Prompt 、Redirect）

- Reudx（状态管理）

  - [Redux 核心用法 Action/Reducer/Store](/React/React.html#redux)、

  - Redux 进阶

    - （reselect，@rematch/core，redux-actions，dva，immutable 数据方案）

    - redux- thunk

    - redux- -saga

    - dva

    - mobx（mobx 实战 observable、computed、 autorun、when、reaction）

  - 手写实现 Redux、react-redux、 connected-react-router

  - 手写 Redux、react-redux、 redux-logger. redux-promise、redux-thunk、redux-saga、redux- actions、reselect、 redux-persist 等经典 redux 中间件类库

- SSR 服务器端渲染

  - 客户端渲染 VS 服务端渲染

  - React 中的服务端渲染

  - 同构的原理和意义

  - SSR 中使用路由

  - SSR 中使用 Redux

  - SEO 优化

  - 预渲染

  - Koa2+Nextjs 服务器端渲染实战

- 组件化开发

  - 从零实现 Ant design 表单组件

  - 从零实现 Ant design 拖拽上传组件

  - 从零实现 Ant design 树型组件

  - 从零实现轮播图组件

- React 高级实践和性能优化

  - nunjucks 模版引擎、yaml 配置与法| mock.js 模拟数据

  - 可配置的 create-react appI 具 roadhog, 手写实现 roadhog

  - umi 配置静态和动态路由、权限和动画、UMI 实现原理，手写实现 UMI

  - dva 创建应用、集成 AntDesign. 定义路由和 UI 组件、链接仓库、使用 effects 和 reducers

  - 手写实现 dva 和核心库 redux- saga

  - 使用 Button、Modal、 Loading、 Notifcation、 Message、 List、Carousel 等 AntDesign 组件

  - React 中的长列表优化，只渲染可视区域 DOM

  - 使用 Immutablejs 和 PureComponent

  - ErrorBoundary、Suspense 和 Fragment

  - React 中的高阶组件和 render、props

  - React 中的图片和组件懒加载

  - 实现 React 骨架屏 webpack 插件

  - Jest+ Enzyme 实现 React 单元测试

- React 原理

  - JSX 原理和虚拟 DOM 原理

  - setState 异步原理实现

  - React 中的事务实现

  - React Virtual-DOM 原理

  - React Fiber

  - [React 新生命周期](/React/React.html#生命周期)

  - [React Hooks](/React/React.html#hook)

  - React new feature

- 企业级 React 框架

  - [Umi v3](/React/umi-v3.html)

  - Ant Design pro

- 源码

  - react 15 源码

    - 实现虚拟 DOM

    - 实现类组件、函数组件和原生组件的渲染

    - 实现 setState

    - 实现 DOM-DIFF

    - 实现 DOM 更新

    - 实现合成事件和事务机制

  - react 16 源码

    - 虚拟 DOM

    - Fiber 架构算法和数据结构

    - Hooks 的原理和实现

## Node.js

- Node 基础

  - Nodejs 提供的能力原生 API

  - Node 原生的 Web Server 实践、单测的写法

  - Node 进阶及原理解析

  - [NVM Node 版本管理工具](/engineering/nvm.html)

- Node 核心模块

  - Event loop 和事件队列

  - process 全局对象、events 事件处理模块、commonjs 原理解析

  - 深入字符编码、Buffer 对象、fs 文件模块、压缩与解压缩

  - stream 流的原理和应用

  - cookie 和 session 原理

- Node 框架

  - [Express](/server/node/express.html)

    - 路由配置、处理参数、中间件、模板引擎、静态文件服务器、重定向

  - [Koa](/server/node/koa.html)

    - Koa 给出的答卷，解决原生困境、重写 Web Server、进阶及原理解析

    - Koa 源码分析 & 手写 Koa 核心代码

    - Koa 在企业开发中的应用

  - [Egg](/server/node/egg.html)

    - 项目架构

    - 配置路由、静态文件中间件、模版引擎

    - 远程接口服务

    - 计划任务

    - 集成 MYSQL

    - Restful 接口

    - Sequelize 持久化工具

    - 国际化

    - 扩展工具方法

    - 中间件

    - 多进程与集群

    - 运行环境、单元测试

    - 服务器部署和运维

    - 手写自己的 Eggjs 框架， 包括 egg-core、 egg-init、 egg- cluster

    - 自定义插件和框架,手写 egg- sock-et.io 插件

- Node 实践

  - JWT 权限认证原理

  - 手写 Express、koa2

  - 多语言、防盗链、正向和反向代理服务器

  - 加密和签名算法

## Webpack

- webpack4 实战 entry、output、 loaders、 plugins、 文件指纹

- webpack4 优化(dll、resolve、 模块热替换、压缩、代码分割、可视化工具)

- Webpack4 源码分析，懒加载原理、热更新原理

- 编写自定义 Loader(style-loader css-loader less-loader 等)

- 编写自定义 Plugin(html-webpack- plugin)

- 编写 Babel treeshaking 插件

- Webpack 的事件机制 tapable 和 AST 抽象语法树

- 手写自己的 Webpack4

- Babel

  - token 到 ast，编译理论

  - 基本概念

  - 使用

  - 插件编写

- 设计思想

  - Tapable 源码分析

## TypeScript

- [开发环境搭建](/frontend/TypeScript.html#_1-开发环境搭建)

- TypeScript 安装和编译

- [数据类型](/frontend/TypeScript.html#_3-数据类型)、[函数](/frontend/TypeScript.html#_5-函数)、类、[接口](/frontend/TypeScript.html#_4-接口)、[泛型](/frontend/TypeScript.html#_6-泛型)

- 结构类型系统、类型变换

- 模块 VS 命名空间

- 类型声明、声明文件

- Typescript + React 集成开发

- Typescript 工程化

## PWA

- manifest.json 配置

- service worker 生命周期

- fetch

- 请求拦截

- cache api 以及缓存策略

- Notification

- API

- workbox 应用

- Vue 中应用 PWA

## 微前端

- 微前端背景

- 微前端工程化

- 同时支持 angular、vue、react 的微前端框架实战

- 从零编写一个微前端框架

  - 初始化工程

  - .app 相关概念

  - 路由拦截

  - 执行流程(核心)

  - location 事件

## GraphQL

- GraphQL 概念

- 使用 GraphQL 查询和变更数据

- 后端搭建 GraphQL 服务器

- ReactHooks 和 GraphQL 项目实战

- GraphQL+Nest.js 微服务开发

  - Nest.js 模块定义

  - Nest 实现后端微服务

  - ypeScript+Nest.js 项目构建

  - GraphQL 的服务器搭建与查询操作

## 跨端

- Flutter

  - dart 语法

  - flutter 环境配置

  - 常用组件

  - 布局

  - 导航和动画

  - flutter 项目实战

- uni-app

  - 调试

  - 使用 hbuilder

  - nlex 布局

  - 多端发布

  - 路由和动画

  - 微信分享

  - uni- app 版珠峰课堂项目实战

- React Native

  - UIExplorer 项目

  - css 盒子模型和样式

  - cSss 元素浮动

  - flexbox 布局

  - ReactNative 长度单位

  - RN 事件

  - React 动画原理

  - 实现一个 Navigator

  - App 架构之目录结构、路由和组件

  - App 架构之网络和 Container

  - App 架构之命名空间

  - ReactNative 第三方插件

  - 珠峰课堂项目实战

## 前端性能优化

- webpack 优化方案

- 浏览器缓存原理和最佳设置策略

- CDN 缓存优化

- EventLoop 异步更新

- 避免回流和重绘

- 节流与防抖

- 通过 Performance 监控性能

## Linux

- Linux 与 Windows 的不同

- Linux 安装和虚拟机的使用

- 桥接、NAT、Host-Only 等 网络连接

- 快照、克隆、挂载点和分区

- Linux 常用命令 VI 编辑器、用户与权限管理、服务管理、软件管理、网络管理、系统命令

- Shell 实战监控服务和主机网络状态

## Nginx

- [nginx 的安装和使用](/engineering/nginx.html#_1-安装)

- 模块和基本配置

- 正向反向代理等应用场景

- CDN

- 浏览器缓存

- 跨域

- 防盗链

- [rewrite](/engineering/nginx.html#_5-rewrite)

- 负载均衡集群

## Docker

- [docker 安装与使用](/engineering/docker.html)

- 虚拟机

- Linux 容器

- Docker 核心概念

- Docker 架构

- Docker 镜像

- Docker 容器

- Dockerfle

- Docker 数据盘

- 网络配置

- docker-compose

## 设计模式

- UML 模型图

  - 用例图

  - 活动图

  - 类图和对象图

    - 依赖关系(Dependence)

    - 泛化关系(Generalization)

    - 实现关系(lmplementation)

    - 关联关系

    - 聚合关系

    - 组合关系

  - 时序图

  - 协作图

  - 组件图

  - 部署图

- 面向对象

  - 什么是面向对象

  - 封装、继承和多态

  - 面向对象和面向过程

- 设计原则

  - 开放封闭原则

  - 接口隔离原则

  - 单一职责原则

  - 迪米特法则

  - 里氏替换原则

  - 合成复用原则

  - 依赖倒置原则

- 创建型模式

  - 建造者模式(Builder)

  - 抽象工厂模式(Abstract Factory)

  - 原型模式(Prototype)

  - 工厂方法模式(Factory Method)

  - 单例模式(Singleton)

- 结构型模式

  - 适配器模式(Adapter)

  - 外观模式(Facade)

  - 桥接模式(Bridge)

  - 享元模式(Flyweight)

  - 组合模式(Composite)

  - 代理模式(Proxy)

  - 装饰模式(Decorator)

- 行为型模式

  - 命令模式(Command)

  - 职责链模式(Chain of Responsibility)

  - 解释器模式(Interpreter)

  - 迭代器模式(lterator)

  - 状态模式(State)

  - 中介者模式(Mediator)

  - 策略模式(Strategy)

  - 备忘录模式(Memento)

  - 模板方法模式(Template Method)

  - 观察者模式(Observer)

  - 访问者模式(Visitor)

## 数据结构和算法

- 算法的基础知识

  - 输入、输出和数量级|计算能力的变革

  - CPU、寄存器和内存|二分查找 I 插入排序 I 置泡排序

- 算法的衡量和优化

  - 时间复杂度和空间复杂度 I 复杂度的本质

  - 合并排序| 递归函数复杂度分析

  - 递归表达式分析法 I 递归数学归纳法分析

  - 主定理

- 排序算法

  - 排序算法介绍

  - 计数排序

  - 基于比较的排序算法

  - 基数排序

  - 合并排序优化

  - 桶排序

  - 快速排序

  - 外部排序

  - 快速排序复杂度和优化

- 递归

  - 递归的基本概念

  - 回溯算法

  - 递归图形的绘制

  - 重复子问题优化

  - 递归和穷举问题

  - 尾递归

  - 组合问题

  - 搜索问题(8 皇后)

  - 递归空间优化

  - 深度优先搜索和广度优先搜索

- 数据结构

  - 数组

  - 堆

  - 双向链表

  - 栈

  - 反转单向链表

  - 队列

- 进阶算法

  - 动态规划的概念

  - 填表法

  - LCS 问题的子结构

  - 构造结果

- BAT 面试真题

  - 反转二叉树

  - 火车排序问题和队列

  - 解析 Query 字符串

  - 网格走法动态规划

  - 取 N 个数字为 M

  - 两个栈实现一个队列

## Git

- [Git 原理介绍](/tools/Git.html#_1-git-原理)

- [Git 基础操作-常用命令](/tools/Git.html#_3-常用命令)

- Git 进阶

  - [rebase 的作用](/tools/Git.html#_3-2-git-rebase)

  - [reset 与 revert 的区别](/tools/Git.html#_7-reset-与-revert-回滚-回退)

  - [reflog](/tools/Git.html#_8-git-reflog)

  - [cherry-pick](/tools/Git.html#_6-git-cherry-pick)

  - Git 与 shell 结合

- 前端工程化应用 husky link-staged

## 工程化

- 脚本世界

  - [npm & yarn 包管理工具](/tools/package.html)

  - [package.json 项目说明文件](/engineering/package.json.html)

  - [bash 简介和快速入门](/server/Bash.html)

  - node 开发简单 CLI 工具

- 规范先行

  - 代码风格

    - Eslint

    - [prettier 代码格式化](/share/config.html#prettier)

  - 版本规范和 Changlog

  - 其他规约

- 质量

  - code review

  - 测试基础

  - 单元测试

  - e2e 测试

  - 测试驱动开发

  - 监控和异常上报

- 工程设计

  - 工程设计简介

  - 工程结构范式

  - 多仓库选型

- 持续集成与部署

  - CI/CD 简介

  - 持续集成

    - [巧用 GitHub Action](/tools/GitHub.html#github-action)

    - CI 平台-以 jenkins 为例

  - 部署

    - 前后端分离

    - 发布策略

    - 多环境发布

  - 虚拟化

    - [docker](/engineering/docker.html)

    - kubernetes

- 效率工具

  - 真机远程代码调试

  - “无线”调试

  - 在移动端调试

  - 使用代理工具进行调试

  - 在公网访问本地服务

  - 随机数据的生成

  - RESTful API 快速模拟

  - SVRX

    - 一个平台代替前面所有工具

    - Server-X 的进阶用法

## MongoDB

- [MongoDB 安装和使用](/DB/MongoDB.html)

- MongoDB 的系统架构

- MongoDB 高级查询

- MongoDB 索引

- MongoDB 安全与权限

- mongoose 模块之 Schema

- mongoose 模块之 Model

## MySQL

- MySQL 安装与使用

- MySQL 系统架构

- 数据处理之增删改查

- 数据类型和约束分页

- 索引和慢查询性能分析

- 数据库安全之防止 SQL 注入

- 数据库设计 ER 图设计

- 数据库事务和锁

- 数据库设计之三大范式

- 分组和聚合函数

- 基于角色的权限访问控制(Role Based Access Control)

## Redis

- 5 种数据结构及使用场景

- API 的理解和使用

- Redis 客户端

- 发布订阅

- 事务

- 备份和恢复
