---
sidebar: auto
---

# 解决方案

## 1. Web

### 1.1 来源

document.referrer

## 2. H5

## 3. Node

### 3.1 路径参数匹配

> 背景：进行路径匹配 Web H5 自适应
> 
> /user/:name   /user/:name/detail/:url

借鉴 vue-router 的路由匹配，使用 [Path-to-RegExp](https://github.com/pillarjs/path-to-regexp)。


```Vue
<script>
const {pathToRegexp, match, parse, compile} = require('path-to-regexp');

export default {
    data() {
        return {
            MatchRedirectPath: {
                '/w/deft-job-set/:url': '/m/deft-job-set/:url',
                '/w/user/:name/detail/:model': '/m/user/:name/detail/:model'
            },
            testPath: '/w/user/rain/detail/school',
            testRedirectPath: '/w/deft-job-set/:url/index/:id',
            keys: [],
            regexp: '',
            matchOut: '',
            parseOut: '',
            compileOut: ''
        };
    },
    mounted() {
        const that = this;
        const matchPcToH5Path = that.factoryMatchPcToH5Path(that.MatchRedirectPath);
        console.log(matchPcToH5Path(that.testPath));
    },
    methods: {
        // 获取模糊匹配的重定向地址 PC => H5
        factoryMatchPcToH5Path(_path) {
            return this.factoryFuzzyMatchingAndJoin(this.pathToRegexpAndMatch(_path));
        },
        /**
         * @description: 将路径转化为可匹配正则
         * @param {Object} oPath
         * @return {Array}
         *  @return {RegExp}    reg    根据路径生成对应的正则表达式 模糊匹配
         *  @return {Function}  match  匹配路径中对应位置的 参数和值
         *  @return {string}    goal   重定向目标链接
         */
        pathToRegexpAndMatch(oPath) {
            return Object.keys(oPath).map(key => {
                return {
                    reg: pathToRegexp(key),
                    match: match(key),
                    parse: match(key),
                    compile: compile(oPath[key], {encode: encodeURIComponent})
                };
            });
        },
        /**
         * @description: 创建 模糊匹配和拼接函数
         * @param {Array} aPath 通过 pathToRegexpAndMatch 函数创建的数组
         * @return {Function} 接受URL进行匹配
         */
        factoryFuzzyMatchingAndJoin(aPath) {
            return function(_url) {
                let redirectPath = null;
                aPath.forEach(item => {
                    if (item.reg.test(_url)) {
                        const {params} = item.match(_url); // 获取对应参数
                        redirectPath = item.compile(params);
                    }
                });
                return redirectPath;
            };
        }
    }
};
</script>
```