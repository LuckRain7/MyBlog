---
sidebar: auto
---
# Vue-router

> version ^3.1.5

## 一、两个标签

### `<router-view></router-view>`

>  占位，在标签处进行渲染路由组件

### `<router-link>`

> `<router-link>`  组件支持用户在具有路由功能的应用中 (点击) 导航。 

#### 常用形式：

```html
# to=“path” 跳转到 /home 路径
<router-link to="/home">Home</router-link>
# 可以单项数据绑定
<router-link :to="{ path:'/home' }">Home</router-link> 
# 跳转至路由 name 为 HOME 的路由
<router-link :to="{ name:'HOME' }">Home</router-link>

# tag=“type” 这个元素可以被修饰成 span 标签  tag=“div” 修饰成div标签
<router-link to="/home" tag=“span”>Home</router-link>

# replace 导航后不会留下 history 记录
<router-link :to="{ path: '/abc'}" replace></router-link>
```

#### 激活路由标签类

> 设置路由标签高亮

-  active-class  设置链接激活时使用的 CSS 类名。 

CSS类名：.router-link-active {}

-  exact-active-class   配置当链接被精确匹配的时候应该激活的 class。 

CSS类名：.router-link-exact-active {}





## 二、路由监听

在组件中，通过 Watch 进行监听

```js
// 写法一
watch:{
  $route(to, from){
    console.log(to.path);
  }
},

//写法二
methods:{
    routeChange(to,from){
	//具体操作
    }
},
watch: {
    $route: 'routeChange',
},
```





---

   <Vue/>