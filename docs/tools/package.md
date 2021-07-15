---
sidebar: auto
---

# 包管理器

::: tip 目录：
[[toc]]
:::

## NPM

> 官网：[ https://www.npmjs.com/ ]( https://www.npmjs.com/ )

```shell
#npm配置淘宝镜像
npm config set registry https://registry.npm.taobao.org
npm install #安装模块
npm uninstall #卸载模块

# 安装依赖
npm i [package_name] -s # 在项目中安装指依赖
npm i [package_name] -D # 在项目中安装开发依赖
npm i [package_name] -g # 全局安装

npm run [script] # 运行脚本指令

npm config list # 查看npm配置

npm list -g --depth 0 # 查看全局安装的包
```·

**NPM发布自己的组件包**

```shell
npm config set registry http://registry.npmjs.org # 切换回npm源

npm login # 登录

npm publish # 发包
```

**添加私有源**

```shell
npm i -g nrm # 先安装 nrm

nrm add [registry_name] [registry_url] # 添加私有源地址 起一个别名

nrm use [registry_name] # 切换到私有源

npm adduser --registry [registry_url] [email] # 进行私有源登录
```


## YARN（推荐）

> 官网：[ https://yarn.bootcss.com/ ]( https://yarn.bootcss.com/ )

```shell
yarn init # 初始化项目

# 安装依赖
yarn add [package_name] # 在项目中安装指依赖
yarn add [package_name] -D # 在项目中安装开发依赖
yarn global add [package_name] # 全局安装

yarn remove [package_name] # 删除依赖

yarn install # 安装所有依赖

#yarn配置淘宝镜像
yarn config set registry https://registry.npm.taobao.org

yarn [script] # 运行脚本指令

yarn config list # 查看yarn配置

yarn global list #查看全局安装的包
```

## nrm -- NPM registry manager

> nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换

**安装**

```shell
yarn global add nrm 
# or
npm install -g nrm
```

**常用命令**

```shell
nrm ls # 查看源

nrm use taobao # 切换源

nrm add [registry_name] [registry_url] # 添加源
```