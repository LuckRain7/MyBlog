---
sidebar: auto
---

# 包管理器

::: tip 目录：
[[toc]]
:::

## npm

> 官网：[ https://www.npmjs.com/ ](https://www.npmjs.com/)
>
> NPM 核心目标：Bring the best of open source to you, your team and your company.

### 1. 操作

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


npm config get cache  # 查看本地缓存
npm config ls -l      # 查看所有默认配置
```

**NPM 发布自己的组件包**

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

npm cache clean --force # 清除缓存
```

### 2. NPM 的安装机制

1. 执行 `npm install`
2. 获取并检查 npm 的配置（项目下的.npmrc -> 系统用户的 .npmrc -> 全局的 .npmrc -> npm 默认的 .npmrc）
3. 检查项目是否有 `package-lock.json`

   - yes: 检查 package-lock.json 和 package.json 声明的依赖是否一致

     - 一致：直接使用 package-lock.json 中的依赖信息，进行加载（本地缓存 -> 网络）
     - 不一致：不同版本 npm 的应对也不一致
       - npm v5.0.x 根据 package-lock.json 下载
       - V5.1.0-v5.4.2 当 package.json 声明的依赖版本规范有符合的更新的版本时候，会忽略 package-lock.json ，按照 package.json 进行安装，更新到 package-lock.json
       - V5.4.2⬆️ 兼容则根据 package-lock.json，不兼容则根据 package.json 安装。

   - No: 根据 package.json 递归构建依赖树（扁平化）（本地缓存 -> 网络）

4. 生成 package-lock.json 文件

## Yarn

> 官网：[ https://yarn.bootcss.com/ ](https://yarn.bootcss.com/)

### 1. 使用

```shell
yarn init # 初始化项目

# 安装依赖
yarn add [package_name] # 在项目中安装指依赖
yarn add [package_name] -D # 在项目中安装开发依赖
yarn global add [package_name] # 全局安装

yarn remove [package_name] # 删除依赖

yarn install # 安装所有依赖

# yarn配置淘宝镜像
yarn config set registry https://registry.npm.taobao.org

yarn [script] # 运行脚本指令

yarn config list # 查看yarn配置

yarn global list # 查看全局安装的包

yarn cache clean # 清除缓存

yarn global bin # 查看 yarn 全局bin位置
yarn global dir # 查看 yarn 全局安装位置
yarn cache dir # 查看 yarn 全局cache位置
```

### 2. 安装机制

1. 检测(checking): 获取 package.json 中的依赖信息。会采用遍历首层依赖的方式来获取包的依赖信息, 以及递归查找每个依赖下嵌套依赖的版本信息，并将解析过的包和正在进行解析包呢用 `Set` 数据结构进行存储, 这样就可以保证同一版本范围内的包不会进行重复的解析。
2. 解析包(Resolving Packages)
3. 获取包(Fetching)
4. 链接包(Linking Packages)
5. 构建包(Building Packages)

Q: 如何去判断缓存中有当前的依赖包呢？

A: 其实呢，在 Yarn 中会根据 cacheFolder + slug + node_modules + pkg.name 生成一个路径; 判断系统中是否存在该 path, 如果存在证明已经有缓存, 不用重新下载。这个 path 也就是依赖包缓存的具体路径。

### 3. 备注

yarn 默认采用的是 `perfer-online` 模式，即优先使用网络资源。如果网络资源请求失败，再去请求缓存数据。

## nrm

> nrm(npm registry manager )是 npm 的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换

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

参考文献：

[字节的一个小问题 npm 和 yarn 不一样吗？ - 酒窝 yun 过去了](https://juejin.cn/post/7060844948316225572)
