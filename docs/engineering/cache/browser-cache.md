---
sidebar: auto
---

# 浏览器缓存

> web 缓存分为很多种，比如：数据库缓存 / 代理服务器缓存 / CDN 缓存 / 浏览器缓存 。
>
> 流程：浏览器 -> 代理服务器 -> 资源服务器

**HTTP 缓存又分为强缓存和协商缓存：**

* 首先通过 Cache-Control 验证强缓存是否可用，如果强缓存可用，那么直接读取缓存
* 如果不可以，那么进入协商缓存阶段，发起 HTTP 请求，服务器通过请求头中是否带上 If-Modified-Since 和 If-None-Match 这些条件请求字段检查资源是否更新：
  + 若资源更新，那么返回资源和 200 状态码
  + 如果资源未更新，那么告诉浏览器直接使用缓存获取资源

**强缓存和协商缓存请求头：**

* 强缓存：Expires | Cache-Control
  + memory cache 内存缓存，一般存放 js，刷新网页
  + disk cache 硬盘缓存，一般存放 css，重新打开网页
* 协商缓存：e-tag | Last-modified

**浏览器加载资源，根据资源的 `http`  `header` 判断是否命中强缓存；**

* 若命中：浏览器直接从自己缓存中读取资源，不会发生 `http` 请求到服务器；
* 没有命中：浏览器会发送请求到服务器，通过服务器中 `http` `header` 验证这个资源是否命中**协商缓存**；
  + 命中：请求返回，但不返回资源，告诉客户端可直接从缓存中加载；
  + 没有命中：请求返回，返回资源；

可以得出：强缓存与协商缓存区别：强缓存不发生请求到服务器，协商缓存会发请求到服务器。

## 1. 强缓存

**页面的缓存状态是由 header 决定的**，header 的参数有四种：

### 1.1 Cache-Control（重要策略）

* max-age
  + （单位为 s）指定设置缓存最大的有效时间，定义的是时间长短
  + max-age=2592000 缓存 30 天，即使服务器上的资源发生了变化，浏览器也不会得到通知。
  + max-age 会覆盖掉 Expires
* s-maxage
  + （单位为 s）同 max-age，只用于共享缓存（比如 CDN 缓存）。
  + 也就是说 max-age 用于普通缓存，而 s-maxage 用于代理缓存。
  + 如果存在 s-maxage，则会覆盖掉 max-age 和 Expires header。
* public
  + 指定响应会被缓存，并且在多用户间共享。
  + 如果没有指定 public 还是 private，则默认为 public。
  + 浏览器 -> 缓存 -> 服务器（先访问缓存，没有在访问服务器）
* private
  + 响应只作为私有的缓存（见下图），不能在用户间共享。
* no-cache
  + 指定不缓存响应，表明资源不进行缓存
* no-store
  + 绝对禁止缓存
* must-revalidate
  + 指定如果页面是过期的，则去服务器进行获取。

### 1.2 Expires

example： `Expires: Wed, 01 Mar 2017 11:20:22 GMT`

缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说，Expires=max-age + 请求时间，需要和 Last-modified 结合使用。但在上面我们提到过，cache-control 的优先级更高。

## 2. 协商缓存

> 协商缓存浏览器响应 Code 是 304

### 2.1 Last-modified

1. 浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，会在 `Respone` 的 `Header` 的 `Last-Modified` 值设置为，该资源最后修改的时间；

2. 第二次请求的时候，在 `Request` 的 `Header` 上加上 `If-Modified-Since`，值为上次请求资源的 `Last-Modified`；

3. 服务器收到 `If-Modified-Since` 与服务器文件的 `Last-Modified` 比对，
   1. 命中：无变化则返回 `304` ，不返回资源。浏览器收到 `304` 使用本地缓存；不更新 `Last-Modified` ；
   2. 不命中：有变化返回 `200` ，重新更新 `Last-Modified` 、返回 `200` 、返回资源。

服务器端文件的最后修改时间，需要和 cache-control 共同使用，是检查服务器端资源是否更新的一种方式。当浏览器再次进行请求时，会向服务器传送 If-Modified-Since 报头，询问 Last-Modified 时间点之后资源是否被修改过。如果没有修改，则返回码为 304，使用缓存；如果修改过，则再次去服务器请求资源，返回码和首次请求相同为 200，资源为服务器最新资源。

### 2.2 ETag

> Etag 是服务器响应请求时，返回当前资源文件的一个唯一标识(由服务器生成)。

* 1、浏览器第一次跟服务器请求一个资源，服务器在返回这个资源的同时，会在 `Respone` 的 `Header` 的 `ETag` 值设置为，该资源当前资源文件的一个唯一标识；

* 2、第二次请求的时候，在 `Request` 的 `Header` 上加上 `If-None-Match`，值为上次请求资源的 `ETag`；

* 3、服务器收到 `If-None-Match` 与服务器文件的 `ETag` 比对，
  + 命中：一致则返回 `304`，代表资源无更新，故不返回资源。浏览器将会收到 `304` 使用本地缓存；更新 `ETag`；
  + 不命中：不一致返回 `200`，重新更新 `ETag`、返回 `200`、返回资源。

根据实体内容生成一段 hash 字符串，标识资源的状态，由服务端产生。浏览器会将这串字符串传回服务器，验证资源是否已经修改，如果没有修改，过程如下：

* 客户端 -->> 请求页面 A -->> 服务器端

* 客户端 <<-- 页面 A+ETag <<-- 服务器端

* 客户端 -->> 再次请求页面 A+ETag -->> 服务器端

* 服务器端 检查 ETag

* 客户端 <<-- 304+空响应 <<-- 服务器端

使用 ETag 可以解决 Last-modified 存在的一些问题：

```
a、某些服务器不能精确得到资源的最后修改时间，这样就无法通过最后修改时间判断资源是否更新
b、如果资源修改非常频繁，在秒以下的时间内进行修改，而Last-modified只能精确到秒
c、一些资源的最后修改时间改变了，但是内容没改变，使用ETag就认为资源还是没有修改的。
```

### 2.3 e-tag 和 Last-Modified 优先级

Last-Modified 与 ETag 是可以一起使用的（见下图），**服务器会优先验证** ETag ，一致的情况下，才会继续比对 Last-Modified，最后才决定是否返回 304 Not Modified。

ETag 可以解决 Last-Modified 存在的一些问题，**既生 `Last-Modified` 何生 `ETag` ?**

* 文件内容不更改，但修改时间发生改变，这时候不希望客户端认为这个文件修改了。

* 某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说 `1S` 内修改了 `N` 次)，`If-Modified-Since` 能检查到的粒度是 `S` 级的，这种修改无法判断；

* 某些服务器不能精确的得到文件的最后修改时间。

## 3. LocalStorage / sessionStorage / cookie

除了开头提到的那么多缓存方式以外，还有一种我们都熟悉的缓存方式，**LocalStorage 和 sessionStorage**。

LocalStorage 是一种本地存储的公共资源，域名下很多应用共享这份资源会有风险；LocalStorage 是以页面域名划分的，如果有多个等价域名之间的 LocalStorage 不互通，则会造成缓存多份浪费。

LocalStorage 在 PC 上的兼容性不太好，而且当网络速度快、协商缓存响应快时使用 localStorage 的速度比不上 304。并且不能缓存 css 文件。而移动端由于网速慢，使用 localStorage 要快于 304。

而相对 LocalStorage 来说，SessionStorage 的数据只存储到特定的会话中，不属于持久化的存储，所以关闭浏览器会清除数据。和 localstorage 具有相同的方法。

在前端开发中缓存是必不可少的，那么使用怎样的缓存方式更高效、让我们项目的性能更优，还是需要我们仔细斟酌。

### 3.1 三者区别

1. 都会在浏览器端保存，有大小限制，同源限制

2. cookie 会在请求时发送到服务器，作为会话标识，服务器可修改 cookie；web storage 不会发送到服务器

3. cookie 有 path 概念，子路径可以访问父路径 cookie，父路径不能访问子路径 cookie

4. 有效期：cookie 在设置的有效期内有效，默认为浏览器关闭；sessionStorage 在窗口关闭前有效，localStorage 长期有效，直到用户删除

5. 共享：sessionStorage 不能共享，localStorage 在同源文档之间共享，cookie 在同源且符合 path 规则的文档之间共享

6. localStorage 的修改会促发其他文档窗口的 update 事件

7. cookie 有 secure 属性要求 HTTPS 传输

8. 浏览器不能保存超过 300 个 cookie，单个服务器不能超过 20 个，每个 cookie 不能超过 4k。web storage 大小支持能达到 5M

---

参考文章: 
* [浏览器缓存](https://juejin.cn/post/6844903546119258125)
* [浏览器缓存之强缓存与协商缓存](https://juejin.cn/post/6844904067882287111)
