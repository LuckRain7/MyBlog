---
sidebar: auto
---

# 包管理器

::: tip 目录：
[[toc]]
:::

## NPM

> 官网：[ https://www.npmjs.com/ ]( https://www.npmjs.com/ )

```bash
#npm配置淘宝镜像
npm config set registry https://registry.npm.taobao.org
npm install #安装模块
npm uninstall #卸载模块

# 安装依赖
npm i [packageName] -s # 在项目中安装指依赖
npm i [packageName] -D # 在项目中安装开发依赖
npm i [packageName] -g # 全局安装

npm run [script] # 运行脚本指令

npm config list # 查看npm配置

npm list -g --depth 0 # 查看全局安装的包
```

> NPM发布自己的组件包
>
> npm config set registry http://registry.npmjs.org 
>
> 然后在终端执行npm login命令：
>
> npm publish

## YARN（推荐）

> 官网：[ https://yarn.bootcss.com/ ]( https://yarn.bootcss.com/ )

```bash
yarn init # 初始化项目

# 安装依赖
yarn add [packageName] # 在项目中安装指依赖
yarn add [packageName] -D # 在项目中安装开发依赖
yarn global add [packageName] # 全局安装

yarn remove [packageName] # 删除依赖

yarn install # 安装所有依赖

#yarn配置淘宝镜像
yarn config set registry https://registry.npm.taobao.org

yarn [script] # 运行脚本指令

yarn config list # 查看yarn配置

yarn global list #查看全局安装的包
```
