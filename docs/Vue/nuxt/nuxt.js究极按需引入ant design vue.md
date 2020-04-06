# nuxt.js 究极按需引入 ant design vue

![header](/img/nuxt/nuxtimg.jpg)


在网络上看了很多ui组件按需加载的案例，但是那不是我想要的

## 1. 首先我们看一下 错误的示范！！

1.1.配置插件 plugins\antd-ui.js



```js
import Vue from 'vue'
import Button from 'ant-design-vue/lib/button'
import Steps from 'ant-design-vue/lib/steps'
import Form from 'ant-design-vue/lib/form'
import Input from 'ant-design-vue/lib/input'

Vue.use(Button)
Vue.use(Steps) // 步骤条
Vue.use(Form)
Vue.use(Form.Item)
Vue.use(Input)
```



1.2.引入css样式 nuxt.config.js

```javascript
# nuxt.config.js

module.exports = {
  css: [
    './style/basic.less'
    'ant-design-vue/lib/button/style/index.css',
    'ant-design-vue/lib/steps/style/index.css',
    'ant-design-vue/lib/form/style/index.css',
    'ant-design-vue/lib/input/style/index.css'
  ],

  plugins: [{ src: '@/plugins/antd-ui', ssr: true }],
  
}

```

不知道大家看出错什么问题

**我们去官方文档中寻找一点线索**

![nuxt css1](/img/nuxt/css.png)

**重点来喽！！！！！**

![nuxt css2](/img/nuxt/css2.png)

css引入的样式是全局样式！！！如果这里是SPA，我觉着这OK，但是我们是SSR，需要进一步的优化

## 2.  真正的按需加载

我们抛弃在全局样式中进行加载，在组件中引用

```vue

<template>
  <div >
  </div>
</template>

<script>
import '@/node_modules/ant-design-vue/lib/button/style/index.css'
import '@/node_modules/ant-design-vue/lib/steps/style/index.css'
import '@/node_modules/ant-design-vue/lib/form/style/index.css'
import '@/node_modules/ant-design-vue/lib/input/style/index.css'
export default {
  components: {}
}
</script>

  }
}
</style>

```

虽然这样或许不是很优雅，但是这才是真正意义上的 SSR 按需加载 UI 组件