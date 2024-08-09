---
sidebar: auto
---

# Weapp web-view

> 官网文档地址： [web-view | 微信开放文档](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html)
>
> 社区官方问答地址：[[web-view]问题汇总 | 微信开放社区](https://developers.weixin.qq.com/community/develop/doc/ebfd9e5ec9986b4f23c41f8d8bbf2730)（看时间比较老了）

**由于很多使用中的一些问题：**

1. 打开的域名没有在小程序管理后台设置业务域名（注意是业务域名，不是服务器域名）
2. **小程序中的webview如需使用微信相关能力，须配置jssdk**
3. **小程序中的webview有较强的缓存（社区相关问题较多）** <br/>
[web-view嵌入的h5页面缓存严重，如何清除？ | 微信开放社区](https://developers.weixin.qq.com/community/develop/doc/00068c92ca01d8f8455d9fc0f58c00) <br/>
[微信小程序web-view缓存问题及解决方案 - 掘金 (juejin.cn)](https://juejin.cn/post/7098522027291574280)
4. 打开的页面必须为https服务
5. 打开的页面302过去的地址也必须设置过业务域名
6. web-view空白问题，请升级微信客户端到 6.5.16
7. 页面可以包含iframe，但是iframe的地址必须为业务域名
8. web-view不支持支付能力，web-view的API能力见web-view的文档说明
9. 开发者自己检查自己的https服务是否正常，测试方法：普通浏览器打开对应的地址
10. 如果web-view使用了公众号授权的服务，开发者工具提示网页开发者的问题
11. [navigationStyle: custom](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html) 对 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 组件无效
12. 在 iOS 中，若存在JSSDK接口调用无响应的情况，可在 [web-view](https://developers.weixin.qq.com/miniprogram/dev/component/web-view.html) 的 src 后面加个#wechat_redirect解决。
13. 避免在链接中带有中文字符，在 iOS 中会有打开白屏的问题，建议加一下 encodeURIComponent

**其他的问题注意：**

1. 每个页面只能有一个 `<web-view/>`，`<web-view/>` 会自动铺满整个页面，并覆盖其他组件，小程序对webview的监控状态基本没有，只能设置src设置url。
2. 关于小程序和web-view的通信，`<web-view/>` 小程序只能通过JSSDK 1.3.0提供的接口返回小程序页面，设置参数来传值，反之，小程序到webview也是一样的，只能是src的路径带上参数；
3. web-view不支持支付能力,是指无法唤起小程序的直接支付窗口，对于h5的那套支付应该是支持的，但是web-view 里边没法使用 微信支付的 JSAPI，也就是可能可以h5的相关的的支付中心来支付；
4. 关于层级，在webview中可以无限跳转，对于导航条返回和物理键返回都会回到上一个页面直到退出webview，就像`history.back`。
5. webview中的html的title会自动放到小程序的头部作为标题；
6. webview中可以正常使用ajax之类的操作。
