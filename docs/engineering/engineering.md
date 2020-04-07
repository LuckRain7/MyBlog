---
sidebar: auto
---
# 前端知识图谱

## JavaScript

- 函数
  - underscore源码分析

  - compose函数和pipe函数

  - 高阶函数

  - [防抖和节流](/frontend/JavaScript.html#一、深拷贝和浅拷贝)

  - [深拷贝和浅拷贝](/frontend/JavaScript.html#一、深拷贝和浅拷贝)

- 异步编程
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

- 模块加载

    - [模块加载方案](/engineering/模块加载方案)

    - 闭包

    - 资源定位 异步加载

    - 解析依赖

    - WebComponent

- V8 内存管理

  - JavaScript中的垃圾收集、内存管理

  - V8垃圾回收机制分类

  - 引用计数、标记清除、标记整理和增量标记



## 计算机网络

- 网络协议

  - OSI七层模型

  - TCP/IP 参考模型

  - TLS

  - 物理层

  - 数据链路层

    - 以太网

    - 总线型拓扑

    - 冲突检测

    - MAC地址

    - 以太网帧

    - ARP协议

  - 互联网层(网络层)

    - IP协议

    - 选址

    - 子网掩码和子网划分

  - 传输层

    - TCP数据包、TCP序列号

    - 滑动窗口的拥塞检测

    - 三次握手和四次挥手

    - UDP协议、DNS协议

  - 应用层

    - .HTTP、HTTPS、HTTP2

- 网络请求

  - Request

    - Form 提交

    - Ajax 和 Fetch

    - 文件上传

    - Axios源码分析

  - WebSocket

  - 缓存

- 网络安全

  - Web漏洞的分析与防御、同源策略

  - XSS（跨站脚本攻击）

  - CSRF（跨站请求伪造攻击）

## Vue

  - Vue 基础

    - 什么是组件 | 组件的应用

    - 组件的属性和校验

    - 组件间通信、EventBus应用

    - 组件slot用法

    - 双向绑定与单向数据流

    - 组件化设计

    - 公共组件封装

    - 上拉刷新、下拉加载、图片懒加载

    - 数据获取和axios应用拦截器


- Vue-Router（权限控制）

  - [vue router的基础应用](/Vue/Vue-router.html)

  - [编程式导航](/Vue/Vue-router.html#_14、编程式的导航)、 [命名视图](/Vue/Vue-router.html#_8、命名视图)、 [路由重定向](/Vue/Vue-router.html#_3、重定向)

  - [路由守卫](/Vue/Vue-router.html#_11、路由守卫)、 [路由懒加载](/Vue/Vue-router.html#_15、路由懒加载)、 [路由元信息](/Vue/Vue-router.html#_13、路由元信息)、[路由监听](/Vue/Vue-router.html#_5、路由监听)

  - 实现动态权限

  - 菜单、按钮及权限认证、登录权限

  - 路由动画配置

- Vuex （状态管理）

  - [Vuex 基础](https://vuex.vuejs.org/zh/)

  - [数据持久化](/Vue/Vuex.html#_1-数据持久化)

- Vue CLI （脚手架工具）

  - Vue CLI 4.0 项目搭建

  - 如何Mock后台数据

  - 项目布署和上线

- Vue SSR 服务端渲染

  - SSR原理和设计理念

  - 集成路由及代码分割

  - 集成KOA实现服务器端渲染

  - 集成VueSSR和Vuex实现数据同步

  - webpack构建Vue SSR项目

  - 路由懒加载

  - Vue 骨架屏、页面预渲染

  - Vue-devtools 开发插件

  - [Nuxt 实战(Webhooks生成器项目)](/Vue/nuxt/nuxt实战.html)

  - Vue 动画原理

- Vue实践

  - 动画切换效果

  - 基于 JWT 的注册登录权限管理

  - 从零封装系列（模态窗口组件、装轮播图组件、表格组件、上拉加载和下拉刷新组件、树形组件、日历组件、表单组件、异步加载的省和市级联组件）

  - 基于element-ui/iview二次封装

  - 组件的单元测试和集成测试

  - 国际化设置

  - 自动化页面埋点

  - 自定义皮肤设置

- 深入Vue源码

  - MVVM响应式原理及源码分析

  - 手写实现Vue3.0响应式原理

  - 手写实现Vue-Router

  - 手写实现vuex中的state、getter、commit、dispatch、actions/mutations、模块化

  - 虚拟DOM

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

  - 手写1个完整的React- router4路由库（HashRouter和BrowserRouter、Route、Switch、Link和NavLink、Prompt 、Redirect）

- Reudx（状态管理）

  - [Redux核心用法Action/Reducer/Store](/React/React.html#redux)、

  - Redux 进阶

    - （reselect，@rematch/core，redux-actions，dva，immutable 数据方案）

    - redux- thunk

    - redux- -saga

    - dva

    - mobx（mobx实战observable、computed、 autorun、when、reaction）

  - 手写实现Redux、react-redux、 connected- react-router

  - 手写Redux、react-redux、 redux-logger. redux-promise、redux- thunk、redux- -saga、redux- actions、reselect、 redux-persist等经典redux中间件类库

- SSR 服务器端渲染

  - 客户端渲染VS服务端渲染

  - React中的服务端渲染

  - 同构的原理和意义

  - SSR中使用路由

  - SSR中使用Redux

  - SEO优化

  - 预渲染

  - Koa2+Nextjs服务器端渲染实战

- 组件化开发

  - 从零实现Antdesign表单组件

  - 从零实现Antdesign拖拽上传组件

  - 从零实现Antdesign树型组件

  - 从零实现轮播图组件

- React 高级实践和性能优化

  - nunjucks模版引擎、yaml配置与法| mock.js模拟数据

  - 可配置的create-react appI具roadhog,手写实现roadhog

  - umi配置静态和动态路由、权限和动画、UMI实现原理，手写实现UMI

  - dva创建应用、集成AntDesign. 定义路由和UI组件、链接仓库、使用effects和reducers

  - 手写实现dva和核心库redux- saga

  - 使用Button、Modal、 Loading、 Notifcation、 Message、 List、Carousel等AntDesign组件

  - React中的长列表优化，只渲染可视区域DOM

  - 使用Immutablejs和 PureComponent 

  - ErrorBoundary、Suspense和Fragment

  - React中的高阶组件和render、props

  - React中的图片和组件懒加载

  - 实现React骨架屏webpack插件

  - Jest+ Enzyme实现React单元测试

- React 原理

  - JSX原理和虚拟DOM原理

  - setState异步原理实现

  - React中的事务实现

  - React Virtual-DOM 原理

  - React Fiber

  - [React 新生命周期](/React/React.html#生命周期)

  - [React Hooks](/React/React.html#hook)

  - React new feature

- 企业级React框架

  - [Umi v3](/React/umi-v3.html)

  - Ant Design pro

- 源码

  - react 15源码

    - 实现虚拟DOM

    - 实现类组件、函数组件和原生组件的渲染

    - 实现setState

    - 实现DOM-DIFF

    - 实现DOM更新

    - 实现合成事件和事务机制

  - react 16源码

    - 虚拟DOM

    - Fiber架构算法和数据结构

    - Hooks的原理和实现



## Node.JS

- Node 基础
  - Nodejs 提供的能力原生API

  - Node 原生的Web Server实践、单测的写法

  - Node 进阶及原理解析

  - [NVM  Node版本管理工具](/engineering/nvm.html) 
  
- Node 核心模块

  - Event oop和事件队列

  - process全局对象、events事件处理模块、commonjs原理解析

  - 深入字符编码、Buffer对象、fs文件模块、压缩与解压缩

  - stream流的原理和应用

  - cookie和session原理

- Node框架

  - Express

    - 路由配置、处理参数、中间件、模板引擎、静态文件服务器、重定向

  - Koa

    - Koa 给出的答卷，解决原生困境、重写 Web Server、进阶及原理解析

    - Koa 源码分析 & 手写Koa 核心代码

    - Koa 在企业开发中的应用

  - Egg

    - 项目架构

    - 配置路由、静态文件中间件、模版引擎

    - 远程接口服务

    - 计划任务

    - 集成MYSQL

    - Restful接口

    - Sequelize持久化工具

    - 国际化

    - 扩展工具方法

    - 中间件

    - 多进程与集群

    - 运行环境、单元测试

    - 服务器部署和运维

    - 手写自己的Eggjs框架， 包括egg-core、 egg-init、 egg- cluster

    - 自定义插件和框架,手写egg- sock-et.io插件

- Node 实践

  - JWT权限认证原理

  - 手写Express、koa2

  - 多语言、防盗链、正向和反向代理服务器

  - 加密和签名算法 



## Webpack

- webpack4实战entry、output、 loaders、 plugins、 文件指纹

- webpack4优化(dll、resolve、 模块热替换、压缩、代码分割、可视化工具)

- Webpack4源码分析，懒加载原理、热更新原理

- 编写自定义Loader(style-loader css-loader less-loader等)

- 编写自定义Plugin(html-webpack- plugin) 

- 编写Babel treeshaking插件

- Webpack的事件机制tapable和AST抽象语法树

- 手写自己的Webpack4

- Babel

  - token到ast，编译理论
  - 基本概念
  - 使用
  - 插件编写

- 设计思想

  - Tapable源码分析

  

## TypeScript

- 开发环境

- TypeScript安装和编译

- 数据类型、函数、类、接口、泛型

- 结构类型系统、类型变换

- 模块VS命名空间

- 类型声明、声明文件

- Typescript+ React集成开发

- Typescript工程化



## PWA

- manifest.json配置

- service worker生命周期

- fetch

- 请求拦截

- cache api以及缓存策略

- Notification

- API
  
- workbox应用
  
- Vue中应用PWA



## 微前端

- 微前端背景

- 微前端工程化

- 同时支持angular、vue、react的微前端框架实战

- 从零编写一个微前端框架

  - 初始化工程

  - . app相关概念

  - 路由拦截

  - 执行流程(核心)

  - location事件



## GraphQL

- GraphQL概念

- 使用GraphQL查询和变更数据

- 后端搭建GraphQL服务器

- ReactHooks和GraphQL项目实战

- GraphQL+Nest.js微服务开发

  - Nest.js模块定义

  - Nest实现后端微服务

  - ypeScript+Nest.js项目构建

  - GraphQL的服务器搭建与查询操作



## 跨端

- Flutter

  - dart语法

  - flutter环境配置

  - 常用组件

  - 布局

  - 导航和动画

  - flutter项目实战

- uni-app

  - 调试

  - 使用hbuilder

  - nlex布局

  - 多端发布

  - 路由和动画

  - 微信分享

  - uni- app版珠峰课堂项目实战

- React Native

  - UIExplorer项目

  - css盒子模型和样式

  - cSss元素浮动

  - flexbox布局

  - ReactNative长度单位

  - RN事件

  - React动画原理

  - 实现一个Navigator

  - App架构之目录结构、路由和组件

  - App架构之网络和Container

  - App架构之命名空间

  - ReactNative第三方插件

  - 珠峰课堂项目实战
  



## 前端性能优化

- webpack优化方案

- 浏览器缓存原理和最佳设置策略

- CDN缓存优化

- EventLoop异步更新

- 避免回流和重绘

- 节流与防抖

- 通过Performance监控性能



## Linux

- Linux与Windows的不同

- Linux安装和虚拟机的使用

- 桥接、NAT、Host-Only等 网络连接

- 快照、克隆、挂载点和分区

- Linux常用命令VI编辑器、用户与权限管理、服务管理、软件管理、网络管理、系统命令

- Shell实战监控服务和主机网络状态


## Nginx

- nginx的安装和使用

- 模块和基本配置

- 正向反向代理等应用场景

- CDN

- 浏览器缓存

- 跨域

- 防盗链

- rewrite

- 负载均衡集群



## Docker

- 虚拟机

- Linux容器

- Docker核心概念

- Docker架构

- Docker镜像

- Docker容器

- Dockerfle 

- Docker数据盘

- 网络配置

- docker- compose

## CI/CD持续集成

- jenkins job

- shell集成

- 集成nginx和git

- 持续集成和部署

- travis gitlab ci



## MongoDB

- Mongodb安装和使用

- Mongodb的系统架构

- Mongodb高级查询

- Mongodb索引

- Mangodb安全与权限

- mongoose模块之Schema

- mongoose模块之Model

## MYSQL

- MYSQL安装与使用

- MYSQL系统架构

- 数据处理之增删改查

- 数据类型和约束分页

- 索引和慢查询性能分析

- 数据库安全之防止SQL注入

- 数据库设计ER图设计

- 数据库事务和锁

- 数据库设计之三大范式

- 分组和聚合函数

- 基于角色的权限访问控制(Role Based Access Control)

## Redis

- 5种数据结构及使用场景

- API的理解和使用

- Redis客户端

- 发布订阅

- 事务

- 备份和恢复



## 设计模式

- UML模型图

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

  - CPU、寄存器和内存|二分查找I插入排序I置泡排序

- 算法的衡量和优化

  - 时间复杂度和空间复杂度I复杂度的本质

  - 合并排序| 递归函数复杂度分析

  - 递归表达式分析法I递归数学归纳法分析

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

  - 搜索问题(8皇后)

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

  - LCS问题的子结构

  - 构造结果

- BAT面试真题

  - 反转二叉树

  - 火车排序问题和队列

  - 解析Query字符串

  - 网格走法动态规划

  - 取N个数字为M

  - 两个栈实现一个队列




## Git

- [Git原理介绍](/tools/Git.html#git-原理)

- [git基础操作-常用命令](/tools/Git.html#git-常用命令)

- git进阶

  - [rebase的作用](/tools/Git.html#git-rebase)

  - reset与revert的区别

  - reflog

  - cherry-pick

  - git与shell结合

- 前端工程化应用- husky link-staged



## 工程化

- 脚本世界

  - [npm & yarn  包管理工具](/tools/package.html) 

  - [package.json  项目说明文件](/engineering/package.json.html) 

  - bash简介和快速入门

  - node开发简单CLI工具

- 规范先行

  - 代码风格

    - Eslint

    - [prettierrc  代码格式化](/share/config.html#prettierrc)

  - 版本规范和Changlog

  - 其他规约

- 质量

  - code review

  - 测试基础

  - 单元测试

  - e2e测试

  - 测试驱动开发

  - 监控和异常上报

- 工程设计

  - 工程设计简介

  - 工程结构范式

  - 多仓库选型



- 持续集成与部署

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

    - Server-X的进阶用法