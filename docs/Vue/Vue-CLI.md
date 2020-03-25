---
sidebar: auto
---

# Vue-CLI 

> 版本 @vue/cli 4.2.3

## 一、安装

```bash
yarn global add @vue/cli
```

## 二、使用

```bas
vue create [appname]
```
执行命令后会进行先择

```bash
Vue CLI v4.2.3
? Please pick a preset: (Use arrow keys)
> default (babel, eslint)   #默认项目  内含babel eslint
  Manually select features  # 自定义选项（肯定选择个呀！）
```

选择需要插件

```bash
? Check the features needed for your project: #用空格进行选择  回车确定进入下一步
 (*) Babel                                #babel必装
 ( ) TypeScript                           #用 TypeScript 的话选上
 ( ) Progressive Web App (PWA) Support    #是否需要 PWA
 (*) Router                               #Router必备
 (*) Vuex                                 #Vuex 必备
>(*) CSS Pre-processors                   #需不需要css预处理器（人生苦短，用起来！）
 (*) Linter / Formatter                   #需不需要规范和格式化工具
 ( ) Unit Testing                         #单元测试工具
 ( ) E2E Testing                          #E2E 工具
```

路由模式的选择，输入y 选择经典路由 ; 输入n 使用hash路由  根据个人喜好

```bash
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)   y
```

选择css预处理器 （sass和less差不都，语法稍稍不同）

```bash
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys) 
  Sass/SCSS (with dart-sass)   
  Sass/SCSS (with node-sass)   
> Less                         
  Stylus                       
```

选择代码规范和格式化样式，不是很想被支配的就选第一个

```bash
? Pick a linter / formatter config: (Use arrow keys) 
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
> ESLint + Prettier
```

配置代码检查

```bash
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>(*) Lint on save             #保存时进行检查
 ( ) Lint and fix on commit   #保存时进行检查并且进行修复
```

配置文件存储

```bash
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
> In dedicated config files   # 形成单独文件
  In package.json             # 放到 package.json 里
```

是否记住这次的配置选择

```bash
? Save this as a preset for future projects? (y/N) n
```

完成，进入项目 ，执行yarn serve 启动项目

## 插件

###  代码压缩

```js
// 生产环境
const merge = require("lodash/merge"),
  common = require("./common"),
  UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
  CompressionWebpackPlugin = require("compression-webpack-plugin"),
  productionGzipExtensions = ["js", "css"],
  production = {
    configureWebpack: config => {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: "gzip",
          test: new RegExp(`\\.(${productionGzipExtensions.join("|")})$`),
          threshold: 10240,
          minRatio: 0.8
        })
      );
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true, // console
              drop_console: true
              //   pure_funcs: ["console.log"] // 移除console
            }
          },
          sourceMap: false,
          parallel: true
        })
      );
    }
  };

module.exports = merge(common, production);
```







---

   <Vue/>
