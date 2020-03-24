---
sidebar: auto
---
# Webpack

## 一、webpack配置

### 源码映射:帮助我们调试源代码

devtool与mode是同级的

> 单独生成一个sourcemap文件 会标识当前报错的行和列 非常全 

```javascript
devtool:'source-map'
```
> 不会产生单独的文件 但是可以显示行和列
```javascript
 devtool:'eval-source-map'
```
> 不会产生列 但是是一个单独的映射文件
```javascript
 devtool:'cheap-module-source-map'
```
> 不会产生文件，集成在打包后的文件中，不会产生列
```javascript
 devtool:'cheap-module-eval-source-map'
```

### watch的应用

启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。

```javascript
watch: true,
watchOptions:{//监控的选项
    // 每秒检查一次变动
    poll:1000, 
    // 当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
    aggregateTimeout:500 ,
    // 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹，例如 node_modules：
    ignored: /node_modules/
},
```




### webpack 小插件应用

> 拷贝插件 copy-webpack-plugin

> 清除插件 clean-webpack-plugin

> 版权插件 BannerPlugin （webpack内置插件）

```javascript
plugins: [

        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
        }),

        new CleanWebpackPlugin('./dist'),

        // 拷贝插件 把其他文件夹文件 拷贝到build文件夹内
        new CopyWebpackPlugin([
            { from: 'doc', to: './' }
        ]),

        new webpack.BannerPlugin('make by rain')


    ],
```

### webpack跨域

1. > 配置代理
   >
    ```javascript
   devServer: {
   proxy: { //重写的方式 把请求代理到express服务器上
        '/api': {
            target: 'http://localhost:3000',
            pathRewrite: { '/api': '' }
        } 
    }
   }  
    ```

2. > 单纯的模拟数据

    ```javascript
   devServer: {
   before(app){ //提供的方法 钩子
      app.get('/api/user', (req, res) => {
            res.json({name:'hello world-before'});
        })
    }
   }
    ```

3. > 在服务器端口上启动webpack
    ```javascript
    // 直接在服务器端口启动webpack（中间件）
    const webpack = require('webpack');
    let middle = require('webpack-dev-middleware');
    let config = require('./webpack.config');
    let compiler = webpack(config);
    app.use(middle(compiler));
    ```


### resolve 解析第三方包  属性配置

   识别bootstrap的css样式

   ```javascript
   alias:{ //别名 
       bootstrap:'bootstrap/dist/css/bootstrap.css'
   }
   ```

### 定义环境变量

例如：生产环境的地址和开发环境的地址不同

webpack自带插件 `webpack.DefinePlugin`

```javascript
//webpack.config.js
plugins: [
new webpack.DefinePlugin({
  DEV:JSON.stringify('production'),   
  FLAG:'true',
  EXPORESSION:JSON.stringify('1+1')
}),
]

//index.js
let url = '';
if(DEV === 'dev'){
    url = 'http://localhost:3000'
}else{
    url = 'http://www.rain.cn'
}
```

### 区别不同环境

使用 `webpack-merge` 插件

在不用的 `js` 中进行单独的配置

```
npm run buile -- --config webpack.dev.js
npm run buile -- --config webpack.prod.js
```

-----webpack.base.js

-----webpack.dev.js

-----webpack.prod.js

```javascript
//webpack.dev.js
let {smart} =require('webpack-merge');

let base= require('./webpack.base.js');

module.exports = smart(base,{
    mode:'development'
});


//webpack.prod.js
let {smart} =require('webpack-merge');

let base= require('./webpack.base.js');

module.exports = smart(base,{
    mode:'development'
});

```

## 二、webpack优化项

### noParse的使用

```javascript
module: {
// 不去解析jquery中的依赖库
noParse: /jquery/,
}
```

### 忽略插件IgnorePlugin

例子：moment中会引入所有的语言包，但是我们只使用中文。先忽略全部，再单独加载中文包

```javascript
//index.js
improt moment from 'moment';
//手动引入所需语言
improt 'moment/locale/zh-cn';
moment.locale('zh-cn');
let r = moment().endOf('day').formNow();
console.log(r);

//webpack.config.js
plugins: [
    
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),

]
```

### dllPligin

单独打包react react-dom 并在html中利用标签进行引用

```javascript
//webpack.config.react.js

let path = require('path');
let webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    react: ['react', 'react-dom'],
  },
  output: {
    filename: '_dll_[name].js', // 产生的文件名
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]', // _dll_react
    //libraryTarget:'var' // commonjs var this ....
  },
  plugins: [
    new webpack.DllPlugin({ // name == library
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    })
  ]
}

//webpack.config.js

plugins: [
    new webpack.DllReferencePlugin({
    manifest: path.resolve(__dirname, 'dist', 'manifest.json')
     }),
  ]
```

### 多线程进行打包 happypack



```javascript
//webpack.config.js

let Happypack = require('happypack');

module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve('src'),
        use: 'Happypack/loader?id=js'
      },
      {
        test: /\.css$/,
        use: 'Happypack/loader?id=css'
      }
    ]
  },
      
plugins: [
new Happypack({
  id: 'css',
  use: ['style-loader', 'css-loader']
}),
new Happypack({
  id: 'js',
  use: [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ]
    }
  }]
}),
]
```

### webpack自带优化

import在生产环境中 会自动去除没用到的代码

tree-shaking 把没用的代码 自动删除 

```javascript
//推荐使用import
import clac from './test.js'


//ES6 模块会把结果放到defalut里边
let clac = require('./test.js');
console.log(clac.dafault.sum(1,2));
```

### 抽取公共代码

```javascript
optimization: {
    splitChunks: { //分割代码块
        cacheGroups: { // 缓存组
            common: { //公共的模块
                chunks: 'initial',
                minSize: 0, //文件大小0以上
                minChunks: 2//用过两次以上
            },
            // 第三方包抽离
            vendor: {
                priority: 1,//权重 表示先进第三方模块的抽离
                test: /node_modules/,//抽离出来的
                chunks: 'initial',
                minSize: 0,
                minChunks: 2
            }
        }
    }
},
mode: 'production',
```

### 懒加载

```javascript
## index.js

let button = document.createElement('button');
button.innerHTML = 'hello';
// vue的懒加 react懒加载
button.addEventListener('click',function () {
  // es6 草案中的语法 jsonp实现动态加载文件
  import('./source.js').then(data=>{
    console.log(data.default);
  })
});
document.body.appendChild(button);

## source.js

export default 'zfpx12345'

## webpack.config.js

//需要先添加插件
plugins:[
          '@babel/plugin-syntax-dynamic-import'
        ]
```

### 热更新

```javascript
let webpack = require('webpack');

devServer: {
    hot:true, // 启用热更新
  },
      
plugins: [
    new webpack.NamedModulesPlugin(), // 打印更新的模块路径
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
```

## 三、Tapable

Tapable介绍

`webpack`本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是`Tapable`，`webpack`中最核心的负责编译的`Compiler`和负责创建bundles的`Compilation`都是`Tapable`的实例。

参考文章：<https://juejin.im/post/5abf33f16fb9a028e46ec352>

实现发布和订阅库

## 四、手写webpack

现在package.json中添加bin属性

```json
{
  "name": "rain-pack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "bin": {
    "rain-pack": "./bin/rain-pack.js"
  }
}
```

使用命令行工具进行连接

```
npm link rain-pack
```

## 五、loader
### 多个loader的引入方法

```javascript
# 方法一
{
    test: /\.js$/,
    // loader执行顺序是从右向左
    use: ['loader3','loader2','loader1']
}


# 方法二
{
    test: /\.js$/,
    use:{
        loader:'loader1'
    }
},
{
    test: /\.js$/,
    use:{
        loader:'loader2'
    }
},
{
    test: /\.js$/,
    use:{
        loader:'loader3'
    }
}
```

### loader的分类

loader执行顺序 从上到下 从右到左

1. 前置loader：pre 
2. 后置loader：post 
3. 普通loader：normal 

> 优先级 ： pre -> normal -> inline -> post

```javascript
{
    test: /\.js$/,
    use:{
        loader:'loader1'
    },
    enforce:'pre'
},
{
    test: /\.js$/,
    use:{
        loader:'loader2'
    }
},
{
    test: /\.js$/,
    use:{
        loader:'loader3'
    },
    enforce:'post'
}

# 输出结果
loader1
loader3
loader2
```

### inline-loader的符号含义

- 禁止前置和正常loader：-！
- 禁止正常loader：！
- 禁止前置、正常和后置loader：！！

```javascript
let str = require('inline-loader!./a.js');

//-！不会让文件 通过 pre normal loader来处理
let str = require('-!inline-loader!./a.js');
#结果：
inline-loader
loader3

// ！没有normal
let str = require('!inline-loader!./a.js');
#结果：
loader1
inline-loader
loader3

// ！！什么都不要  只要行内处理
let str = require('!!inline-loader!./a.js');
#结果：
inline-loader
```

### pitchLoader和normalLoader

loader默认有两部分组成 pitch normal

#### Pitch loader-无返回值

```javascript
# 输出顺序
loader3-pitch
loader2-pitch
loader1-pitch
loader1
loader2
loader3
```

Pitch loader-有返回值

> 具有阻断的功能

```javascript
# 输出顺序
loader3-pitch
loader2-pitch
loader3
```

#### loader特点

第一个loader要返回js脚本

每个loader只做一件内容，为了是loader在更多场景链式调用（组合）

每一个loader都是一个模块

每个loader都是无状态的，确保loader在不同模块转换之间不保存状态

#### 实现babel-loader

安装babel和babel相关插件

```
yarn add @babel/core @babel/preset-env
```

添加规则

```javascript
module: {
    rules: [
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        }
    ]
}
```

安装工具包

yarn add loader-utils

编写

```javascript
const babel = require('@babel/core');
const loaderUtils = require('loader-utils');
/**
 * @param {*} source 传递的源码
 * @returns 改变的源码
 */
function loader(source) {   //this loaderContext
    const options = loaderUtils.getOptions(this);
    const callback = this.async();
    babel.transform(source, {
        ...options,
        sourceMap: true,
        filename: this.resourcePath.split('/').pop()//文件名
    }, function (err, result) {
        callback(err, result.code, result.map);  //异步的
    });
    // return source;
}
module.exports = loader;
```

自己编写banner-loader

安装校验包

```
yarn add schema-utils

```

自动添加文件依赖

```javascript
this.addDependency(options.filename);
```

API文档：<https://webpack.docschina.org/api/loaders/#this-cacheable>

```javascript
# webpack.config.js

const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')],
    },
    devtool: 'source-map',
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'banner-loader',
                    options: {
                        text: 'Rain',
                        filename: path.resolve(__dirname, 'banner.js')
                    }
                }
            }
        ]
    }
}


# banner-loader.js

const schemaUtils = require('schema-utils');
const loaderUtils = require('loader-utils');
const fs = require('fs');
/**
 * @param {*} source 传递的源码
 * @returns 改变的源码
 */
function loader(source) {   //this loaderContext
    // 使用缓存
    this.cacheable && this.cacheable();
    let callback = this.async();
    // 拿到选项
    const options = loaderUtils.getOptions(this);
    const schema = {
        type:'object',
        properties:{
            text:{
                type:'string'
            },
            filename:{
                type:'string'
            }
        }
    }
    //校验
    schemaUtils(schema, options, 'banner-loader');
    if(options.filename){
        // 这个文件变化了 也会然webpack重新打包
        // 自动添加模块依赖
        this.addDependency(options.filename);
        fs.readFile(options.filename,'utf8',function(err, data){
            callback(err,`/**${data}**/${source}`);
        });
    }else{
        callback(null,`/**${options.text}**/${source}`);
    }
}
module.exports = loader;
```

### 实现file-loader和url-loader

#### file-loader

```javascript
# webpack.config.js

{
    test: /\.jpg$/,
    // 根据图片生成一个md5 发射到dist目录下 file-loader还会返回图片路径
    use: 'file-loader'
},
    
    
    
# file-loader.js
// 二进制文件
const loaderUtils = require('loader-utils');
/**
 * @param {*} source
 * @returns 需要返回一个路径
 */
function loader(source) {
    // 根据内容生成文件名
    const filename = loaderUtils.interpolateName(this, '[hash].[ext]', { content: source });
    // 发射文件(文件名，源码)
    this.emitFile(filename, source);
    return `module.exports = "${filename}"`;
}
loader.raw = true;
module.exports = loader;
```

### url-loader

安装拿后缀

```
yarn add mime

```

```javascript
# webpack.config.js

{
    test: /\.jpg$/,
    // 根据图片生成一个md5 发射到dist目录下 file-loader还会返回图片路径
    // use: 'file-loader' //file-loader处理路径
    use: {
        loader: 'url-loader',
        options: {
            limit: 200 * 2014
        }
    }
},
    
# url-loader.js

const loaderUtils = require('loader-utils');
const mime = require('mime');
function loader(source) {
    const { limit } = loaderUtils.getOptions(this);
    // 确定是否limit参数 及其确定的大小
    if (limit && limit >= source.length) {
        return `module.exports = "data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}"`
    } else {
        // 没有的话就引用file-loader
        return require('./file-loader').call(this, source);
    }
}
loader.raw = true;
module.exports = loader;

# index.js

import a from './a.jpg';
let img = document.createElement('img');
img.src = a;
setTimeout(function () {
    let id = document.getElementById('main');
    id.appendChild(img);
}, 1000)
```

### less-loader、 css-loader和style-loader

安装less包

```
yarn add less

```

 

```javascript
# webpack.config.js

{
    test:/\.less$/,
    use:['style-loader','css-loader','less-loader']
},

    
# less-loader.js 

const less =require('less');
function loader(source){
    let css ;
    less.render(source, function(err, r){
        css = r.css
    });
    return css ;
}
module.exports = loader;


# css-loader.js

function loader(source) {
    let reg = /url\((.+?)\)/g;
    let current;
    let preNum = 0;
    let resultArray = ['let list = []'];
    // 整个的while(current = reg.exec(source)){}自带循环结果
    while(current = reg.exec(source)){
        let [matchUrl, g] = current;
        // 拿到第一部分 url之前
        let urlFirstIndex = reg.lastIndex - matchUrl.length;
        // 拼接第一部分
resultArray.push(`list.push(${JSON.stringify(source.slice(preNum,urlFirstIndex))})`);
        // 转换第二部分 使用 require 进行拿取 拼接
        resultArray.push(`list.push('url('+ require(${g}) +')')`);
        // 重置起始位置 进行循环查找和拼接
        preNum = reg.lastIndex;
    }
    // 拼接最后一部分
    resultArray.push(`list.push(${JSON.stringify(source.slice(preNum))})`);
    // 最后拼接导入
    resultArray.push(`module.exports = list.join('')`);
    return resultArray.join('\r\n');
    // return source;
}
module.exports = loader;


# ctyle-loader.js

const loaderUtils = require('loader-utils');
function loader(source) {
    return `
    const style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
    `
}
// 在style-loader上 写了pitch
// style-loader  less-loader!css-loader/./index.less
loader.pitch = function (remainingRequest) { //剩余请求
    //让style-loader 去处理 less-loader!css-loader/./index.less
    // require路径 返回的就是css-loader处理好的结果require
    //使用require进行行内loader 执行除了style之外的两个loader
    return `
    const style = document.createElement('style');
    style.innerHTML = require(${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)});
    document.head.appendChild(style);
    `
}
module.exports = loader;


# 执行顺序

执行style-loader-pitch
执行less-loader
执行css-loader
```

## 六、webpack中的Plugin
## 六、webpack中的Plugin

加载插件的对象

| 对象                    | 钩子                       |
| ----------------------- | -------------------------- |
| Compiler 编译对象       | run 开始运行               |
|                         | compile 开始编译           |
|                         | compilation 创建编译对象   |
|                         | make 创建模块对象          |
|                         | emit 发射文件              |
|                         | done 完成                  |
| Compilation 资源构建    | buildModule 创建模块       |
|                         | normalModule 普通模块加载  |
|                         | finishModules 模块加载完成 |
|                         | seal 封装 整理代码         |
|                         | opitimze 优化              |
|                         | after-seal 封装后          |
| Module Factory 模块处理 | beforeResolver 解析前      |
|                         | afterResolver 解析后       |
|                         | parser 解析                |
| Module 模块             |                            |
| Parser 解析             | program 开始遍历           |
|                         | statement 语句             |
|                         | call 调用                  |
|                         | expression 处理表达式      |
| Template 模板           | hash 处理 hash             |
|                         | bootstrap 启动             |
|                         | localVars 变量             |
|                         | render 渲染                |

在插件开发中最重要的两个资源就是compiler 和 compilation 对象。compiler对象代表了完整的webpack环境配置。compilation对象代表了一次资源版本构建。

基本配置

```javascript
# webpack.config.js

const path = require('path');

const DonePlugin = require('./plugins/DonePlugin.js');

const AsyncPlugin = require('./plugins/AsyncPlugin.js');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new DonePlugin(),
        new AsyncPlugin(),
    ]
}

# DonePlugin.js


class DonePlugin {
    apply(compiler) { //compiler.hooks
        // 第一个参数 一般是插件的名字 后一个参数是一个回调
        compiler.hooks.done.tap('DonePlugin',(stats)=>{
            console.log('编译完成~~~~~~');
        });
    }
}

module.exports = DonePlugin;


#  AsyncPlugin.js


class AsyncPlugin {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('AsyncPlugin', (compliation, callback) => {
            setTimeout(() => {
                console.log('文件发射 等一下');
                callback();
            }, 1000);
        });
        compiler.hooks.emit.tapPromise('AsyncPlugin', (compliation) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('在等一秒');
                    resolve();
                }, 1000);
            });
        });
    }
}
module.exports = AsyncPlugin;

```

文件列表插件

yarn add -D html-webpack-plugin

```javascript
# webpack.config.js

new FileListPlugin({
    filename: 'list.md'
})



# FileListPlugin.js

class FileListPlugin {
    constructor({ filename }) {
        this.filename = filename;
    }
    apply(compiler) {
        // 文件已经准备好了 要进行发射emit
        compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
            let assets = compilation.assets;
            let content = `##  文件名    资源大小\r\n`;
            Object.entries(assets).forEach(([filename, statObj]) => {
                content += `-  ${filename}    ${statObj.size()}\r\n`;
            });
            // 拿到文件名对应数组的内容
            assets[this.filename] = {
                source() {
                    return content;
                },
                size() {
                    return content.length;
                }
            }
        });
    }
}
module.exports = FileListPlugin;
```

### 内联样式插件

yarn add css-loader mini-css-extract-plugin -D

 yarn add --dev html-webpack-plugin@next

```javascript
 # webpack.config.js
 
plugins: [
        new DonePlugin(),
        new AsyncPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new FileListPlugin({
            filename: 'list.md'
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        }),
        new InlineSourcePlugin({
            match:/\.(js|css)$/
        })
    ],
    
    
 # InlineSourcePlugin.js

const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');
// 吧外联的标签  编程内敛的标签

class InlineSourcePlugin {
    constructor({ match }) {
        this.reg = match; //正则
    }

    // 处理某一个标签的
    processTag(tag, compilation) {
        let newTag, url;
        if (tag.tagName === 'link' && this.reg.test(tag.attributes.href)) {
            newTag = {
                tagName: 'style',
                attributes: { type: 'text/css' }
            }
            url = tag.attributes.href;
        }
        if (tag.tagName === 'script' && this.reg.test(tag.attributes.src)) {
            newTag = {
                tagName: 'script',
                attributes: { type: 'application/javascript' }
            }
            url = tag.attributes.src;
        }

        if (url) {
            newTag.innerHTML = compilation.assets[url].source();//文件内容放到innerHTML属性上
            // 删除原有应该生成的资源
            delete compilation.assets[url];
            return newTag;
        }
        return tag;
    }

    //处理引入标签 
    processTags(data,compilation) {
        let headTags = [];
        let bodyTags = [];
        data.headTags.forEach(headTag => {
            headTags.push(this.processTag(headTag, compilation));
        });
        data.bodyTags.forEach(bodyTag => {
            bodyTags.push(this.processTag(bodyTag, compilation));
        });
        return { ...data, headTags, bodyTags }
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('InlineSourcePlugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
                'InlineSourcePlugin',
                (data, cb) => {
                    data = this.processTags(data, compilation);
                    cb(null, data);
                }
            )
        })
    }
}
module.exports = InlineSourcePlugin;    
```


