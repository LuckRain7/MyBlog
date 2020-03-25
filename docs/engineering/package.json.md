# package.json

## 作用

*package.json* 包含关于项目的重要信息。  定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据） 

## 常见字段

```json
{
  #项目名称
  "name": "zhuchengvue",
  #项目版本信息
  "version": "2.0.0",
  #项目描述信息
  "description": "ZhuengCheng by Vue",
  #项目是否为私有项目
  "private": true,
  #项目入口文件
  "main": "src/main.js",
  #记录项目代码所在的资源库
  "repository": {
    "type": "git",
    "url": "https://gitee.com/sdau_zhcz/ZhuCheng-Vue.git"
  },
  #作者名字
  "author": "LuckRain",
  #指定了运行脚本命令的npm命令行缩写
  "scripts": {
    "dev": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  #项目的依赖
  "dependencies": {
    "axios": "^0.19.2",
    "core-js": "^3.6.4",
    "element-ui": "^2.4.5",
    "qs": "^6.9.1",
    "vue": "^2.6.11",
    "vue-router": "^3.1.5",
    "vuex": "^3.1.2",
    "vuex-persistedstate": "^2.7.1"
  },
  #项目的开发依赖
  "devDependencies": {
    "@vue/cli-plugin-babel": "^4.2.0",
    "@vue/cli-plugin-eslint": "^4.2.0",
    "@vue/cli-plugin-router": "^4.2.0",
    "@vue/cli-plugin-vuex": "^4.2.0",
    "@vue/cli-service": "^4.2.0",
    "babel-eslint": "^10.0.3",
    "babel-plugin-component": "^1.1.1",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.1.2",
    "mockjs": "^1.1.0",
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.2",
    "vue-cli-plugin-element": "^1.0.1",
    "vue-template-compiler": "^2.6.11"
  },
  #项目的开源协议
  "license": "UNLICENSED",
  # engines指明了该项目所需要的node.js版本及其他版本信息。
  "engines": {
    "node": "12.13.0", 
    "npm": "xx.xx.xx", 
  }
}
```



## 注意

### 1、dependencies 与 devDependencies 的区别

dependencies是项目依赖，项目打包时一同打包

yarn add [packname]

------------------------------------------------------------------------------------------------

devDependencies 是项目开发依赖，只有开发的时候用

yarn add [packname] -D

### 2、scripts 运行脚本

`yarn [scripts ]`  和  `yarn run [scripts]`  是一样的

