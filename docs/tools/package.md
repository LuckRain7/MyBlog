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
npm i [package] -s # 在项目中安装指依赖
npm i [package] -D # 在项目中安装开发依赖
npm i [package] -g # 全局安装
#运行脚本指令
npm run [script]
#查看npm配置
npm config list
#查看全局安装的包
npm list -g --depth 0
```

>NPM发布自己的组件包
>
>npm config set registry http://registry.npmjs.org 
>
>然后在终端执行npm login命令：
>
>npm publish




## YARN（推荐）

> 官网：[ https://yarn.bootcss.com/ ]( https://yarn.bootcss.com/ )

```bash
# 初始化项目
yarn init 
# 安装依赖
yarn add [package] # 在项目中安装指依赖
yarn add [package] -D # 在项目中安装开发依赖
yarn global add [package] # 全局安装
# 删除依赖
yarn remove [package] 
# 安装所有依赖
yarn install 
#yarn配置淘宝镜像
yarn config set registry https://registry.npm.taobao.org
#运行脚本指令
yarn [script]
#查看yarn配置
yarn config list
#查看全局安装的包
yarn global list
```

