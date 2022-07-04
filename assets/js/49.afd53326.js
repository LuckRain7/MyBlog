(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{323:function(t,_,v){"use strict";v.r(_);var e=v(10),r=Object(e.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http、https、http2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http、https、http2"}},[t._v("#")]),t._v(" http、https、http2")]),t._v(" "),_("h2",{attrs:{id:"_1-http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-http"}},[t._v("#")]),t._v(" 1. http")]),t._v(" "),_("h3",{attrs:{id:"_1-1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概念"}},[t._v("#")]),t._v(" 1.1 概念")]),t._v(" "),_("p",[t._v("HTTP 是一种 "),_("code",[t._v("超文本传输协议(Hypertext Transfer Protocol)")]),t._v(" ，"),_("strong",[t._v("HTTP 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范")])]),t._v(" "),_("p",[t._v("HTTP 主要内容分为三部分，"),_("strong",[t._v("超文本（Hypertext）、传输（Transfer）、协议（Protocol）")]),t._v("。")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("超文本就是不单单只是本文，它还可以传输图片、音频、视频，甚至点击文字或图片能够进行"),_("code",[t._v("超链接")]),t._v("的跳转。")])]),t._v(" "),_("li",[_("p",[t._v("上面这些概念可以统称为数据，传输就是数据需要经过一系列的物理介质从一个端系统传送到另外一个端系统的过程。通常我们把传输数据包的一方称为"),_("code",[t._v("请求方")]),t._v("，把接到二进制数据包的一方称为"),_("code",[t._v("应答方")]),t._v("。")])]),t._v(" "),_("li",[_("p",[t._v("而协议指的就是是网络中(包括互联网)传递、管理信息的一些规范。如同人与人之间相互交流是需要遵循一定的规矩一样，计算机之间的相互通信需要共同遵守一定的规则，这些规则就称为协议，只不过是网络协议。")])])]),t._v(" "),_("h2",{attrs:{id:"_2-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-https"}},[t._v("#")]),t._v(" 2. https")]),t._v(" "),_("h3",{attrs:{id:"_2-1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概念"}},[t._v("#")]),t._v(" 2.1 概念")]),t._v(" "),_("p",[t._v("https 的全称是 "),_("code",[t._v("Hypertext Transfer Protocol Secure")]),t._v(" ，从名称我们可以看出 https 要比 https 多了 secure 安全性这个概念，实际上， https 并不是一个新的应用层协议，它其实就是 HTTP + TLS/SSL 协议组合而成，而安全性的保证正是 TLS/SSL 所做的工作。")]),t._v(" "),_("p",[t._v("也就是说，"),_("strong",[t._v("https 就是身披了一层 SSL 的 http")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"_2-2-http1-的缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-http1-的缺点"}},[t._v("#")]),t._v(" 2.2 HTTP1 的缺点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("HTTP1.x 在传输数据时，每次都需要重新建立连接，无疑增加了大量的延迟时间，特别是在移动端更为突出。")])]),t._v(" "),_("li",[_("p",[t._v("HTTP1.x 在传输数据时，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份，这在一定程度上无法保证数据的安全性。")])]),t._v(" "),_("li",[_("p",[t._v("HTTP1.x 在使用时，header 里携带的内容过大，在一定程度上增加了传输的成本，并且每次请求 header 基本不怎么变化，尤其在移动端增加用户流量。")])]),t._v(" "),_("li",[_("p",[t._v("虽然 HTTP1.x 支持了 keep-alive，来弥补多次创建连接产生的延迟，但是 keep-alive 使用多了同样会给服务端带来大量的性能压力，并且对于单个文件被不断请求的服务(例如图片存放网站)，keep-alive 可能会极大的影响性能，因为它在文件被请求之后还保持了不必要的连接很长时间。")])])]),t._v(" "),_("h3",{attrs:{id:"_2-2-http-和-https-的主要区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-http-和-https-的主要区别"}},[t._v("#")]),t._v(" 2.2 http 和 https 的主要区别")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("最简单的，HTTP 在地址栏上的协议是以 "),_("code",[t._v("http://")]),t._v(" 开头，而 HTTPS 在地址栏上的协议是以 "),_("code",[t._v("https://")]),t._v(" 开头")])]),t._v(" "),_("li",[_("p",[t._v("HTTP 是未经安全加密的协议，它的传输过程容易被攻击者监听、数据容易被窃取、发送方和接收方容易被伪造；而 HTTPS 是安全的协议，它通过 "),_("strong",[t._v("密钥交换算法 - 签名算法 - 对称加密算法 - 摘要算法")]),t._v(" 能够解决上面这些问题。")])]),t._v(" "),_("li",[_("p",[t._v("HTTP 的默认端口是 80，而 HTTPS 的默认端口是 443。")])]),t._v(" "),_("li",[_("p",[t._v("https 协议需要到 ca 申请证书，一般免费证书较少，因而需要一定费用。")])]),t._v(" "),_("li",[_("p",[t._v("http 是超文本传输协议，信息是明文传输，https 则是具有安全性的 ssl 加密传输协议。")])]),t._v(" "),_("li",[_("p",[t._v("http 和 https 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者是 443。")])]),t._v(" "),_("li",[_("p",[t._v("http 的连接很简单，是无状态的；HTTPS 协议是由 SSL + HTTP 协议构建的可进行加密传输、身份认证的网络协议，比 http 协议安全。(无状态的意思是其数据包的发送、传输和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。)")])])]),t._v(" "),_("h3",{attrs:{id:"_2-3-https-的优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-https-的优点"}},[t._v("#")]),t._v(" 2.3 https 的优点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("SEO 方面，排名会更高。")])]),t._v(" "),_("li",[_("p",[t._v("身份认证：使用 HTTPS 协议可认证用户和服务器，确保数据发送到正确的客户机和服务器。")])]),t._v(" "),_("li",[_("p",[t._v("内容加密——防窃听：HTTPS 协议是由 SSL + HTTP 协议构建的可进行加密传输、身份认证的网络协议，要比 http 协议安全，可防止数据在传输过程中不被窃取。")])]),t._v(" "),_("li",[_("p",[t._v("一致性校验——防篡改：通过对数据和共享密钥的 MAC 码来防止中间者篡改消息内容，确保数据的一致性。")])]),t._v(" "),_("li",[_("p",[t._v("HTTPS 网络传输安全系数相对较高，可以大幅增加中间人攻击的成本。")])])]),t._v(" "),_("h3",{attrs:{id:"_2-4-https-的缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-https-的缺点"}},[t._v("#")]),t._v(" 2.4 https 的缺点")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("速度慢")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("网络耗时：由于协议的规定，必须要进行的网络传输。比如 SSL 完全握手，302 跳转等。HTTPS 协议握手阶段比较费时，会使页面的加载时间延长近 50%，增加 10%到 20%的耗电。")])]),t._v(" "),_("li",[_("p",[t._v("计算耗时：无论是客户端还是服务端，都需要进行对称加解密，协议解析，私钥计算，证书校验等计算，增加大量的计算时间。")])])])]),t._v(" "),_("li",[_("p",[t._v("HTTPS 连接缓存不如 HTTP 高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响；")])]),t._v(" "),_("li",[_("p",[t._v("成本高")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("服务器成本：HTTPS 的私钥计算会导致服务端性能的急剧下降，甚至不到 HTTP 协议的十分之一，也就是说，如果 HTTP 的性能是 10000cps，HTTPS 的性能可能只有几百 cps，会增加数倍甚至数十倍的服务器成本。")])]),t._v(" "),_("li",[_("p",[t._v("证书成本：根据证书个数及证书类型，一年可能需要花费几百到几百万不等的证书成本。")])]),t._v(" "),_("li",[_("p",[t._v("开发和运维成本：HTTPS 协议比较复杂，包括协议的配置，证书的更新，过期监控，客户端的兼容等一系列问题都需要具备专业背景的技术人员跟进处理。")])])])])]),t._v(" "),_("h3",{attrs:{id:"_2-5-https-握手过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-https-握手过程"}},[t._v("#")]),t._v(" 2.5 https 握手过程")]),t._v(" "),_("ul",[_("li",[t._v("TCP 三次握手")]),t._v(" "),_("li",[t._v("客户端发送 client_hello：\n"),_("ul",[_("li",[t._v("包含 TLS 版本信息")]),t._v(" "),_("li",[t._v("随机数（用于后续的密钥协商）random_C")]),t._v(" "),_("li",[t._v("加密套件候选列表")]),t._v(" "),_("li",[t._v("压缩算法候选列表")]),t._v(" "),_("li",[t._v("扩展字段")])])]),t._v(" "),_("li",[t._v("服务端发送 server_hello：服务端收到客户端的 client_hello 之后，发送 server_hello，\n"),_("ul",[_("li",[t._v("选择使用的 TLS 协议版本 version")]),t._v(" "),_("li",[t._v("选择的加密套件 cipher suite")]),t._v(" "),_("li",[t._v("选择的压缩算法 compression method")]),t._v(" "),_("li",[t._v("随机数 random_S")])])]),t._v(" "),_("li",[t._v("服务端发送证书：服务端发送完 server_hello 后，紧接着开始发送自己的证书\n"),_("ul",[_("li",[t._v("因包含证书的报文长度是 3761，所以此报文在 tcp 这块做了分段，分了 3 个报文把证书发送完了")])])]),t._v(" "),_("li",[t._v("服务端发送 Server Key Exchange：对于使用 DHE/ECDHE 非对称密钥协商算法的 SSL 握手，将发送该类型握手。RSA 算法不会进行该握手流程（DH、ECDH 也不会发送 server key exchange）, 也就是说此报文不一定要发送，视加密算法而定。")]),t._v(" "),_("li",[t._v("服务端发送 Server Hello Done：通知客户端 server_hello 信息发送结束")]),t._v(" "),_("li",[t._v("客户端发送.client_key_exchange + change_cipher_spec + encrypted_handshake_message\n"),_("ul",[_("li",[t._v("client_key_exchange，合法性验证通过之后，向服务器发送自己的公钥参数，这里客户端实际上已经计算出了密钥")]),t._v(" "),_("li",[t._v("change_cipher_spec，客户端通知服务器后续的通信都采用协商的通信密钥和加密算法进行加密通信")]),t._v(" "),_("li",[t._v("encrypted_handshake_message，主要是用来测试密钥的有效性和一致性")])])]),t._v(" "),_("li",[t._v("服务端发送 New Session Ticket：服务器给客户端一个会话，用处就是在一段时间之内（超时时间到来之前），双方都以协商的密钥进行通信。")]),t._v(" "),_("li",[t._v("服务端发送 change_cipher_spec：服务端解密客户端发送的参数，然后按照同样的算法计算出协商密钥，并通过客户端发送的 encrypted_handshake_message 验证有效性，验证通过，发送该报文，告知客户端，以后可以拿协商的密钥来通信了")]),t._v(" "),_("li",[t._v("服务端发送 encrypted_handshake_message：目的同样是测试密钥的有效性，客户端发送该报文是为了验证服务端能正常解密，客户端能正常加密，相反：服务端发送该报文是为了验证客户端能正常解密，服务端能正常加密")]),t._v(" "),_("li",[t._v("完成密钥协商，开始发送数据：数据同样是分段发送的")]),t._v(" "),_("li",[t._v("完成数据发送，4 次 TCP 挥手：客户端或服务器发送的，意味着加密通信因为某些原因需要中断，警告对方不要再发送敏感的数据, 服务端数据发送完成也会有此数据包，可不关注")])]),t._v(" "),_("p",[_("strong",[t._v("总结：")]),t._v(" "),_("a",{attrs:{href:"https://juejin.cn/post/6844903613479796750",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考 1"),_("OutboundLink")],1)]),t._v(" "),_("ol",[_("li",[_("p",[t._v("TCP 三次握手：开始链接")])]),t._v(" "),_("li",[_("p",[t._v("client_hello：发给服务器一个随机数、TLS 协议版本、压缩算法、加密套件")])]),t._v(" "),_("li",[_("p",[t._v("server_hello：回复服务器一个随机数、TLS 使用版本、使用的压缩算法、服务器证书 + 数字签名")])]),t._v(" "),_("li",[_("p",[t._v("客户端回应：验证证书、回复服务器自己的公钥参数")])]),t._v(" "),_("li",[_("p",[t._v("服务端回应：验证证书、通知客户端可以进行加密通信了")])]),t._v(" "),_("li",[_("p",[t._v("HTTPS 通信：通信加密")])]),t._v(" "),_("li",[_("p",[t._v("TCP 四次握手：结束链接")])])]),t._v(" "),_("h2",{attrs:{id:"_3-http2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-http2"}},[t._v("#")]),t._v(" 3. http2")]),t._v(" "),_("h3",{attrs:{id:"_3-1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-概念"}},[t._v("#")]),t._v(" 3.1 概念")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://httpwg.org/specs/rfc7540.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 7540"),_("OutboundLink")],1),t._v(" 定义了 HTTP/2 的协议规范和细节。")]),t._v(" "),_("h3",{attrs:{id:"_3-2-http2-的改进"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-http2-的改进"}},[t._v("#")]),t._v(" 3.2 http2 的改进")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("二进制分帧层 (Binary Framing Layer)")]),t._v(" "),_("p",[t._v("帧是数据传输的最小单位，以二进制传输代替原本的明文传输，原本的报文消息被划分为更小的数据帧:")])]),t._v(" "),_("li",[_("p",[t._v("多路复用 (MultiPlexing)")]),t._v(" "),_("p",[t._v("在一个 TCP 连接上，我们可以向对方不断发送帧，每帧的 stream identifier 的标明这一帧属于哪个流，然后在对方接收时，根据 stream identifier 拼接每个流的所有帧组成一整块数据。 把 HTTP/1.1 每个请求都当作一个流，那么多个请求变成多个流，请求响应数据分成多个帧，不同流中的帧交错地发送给对方，这就是 HTTP/2 中的多路复用。")]),t._v(" "),_("p",[t._v("流的概念实现了单连接上多请求 - 响应并行，解决了线头阻塞的问题，减少了 TCP 连接数量和 TCP 连接慢启动造成的问题")])]),t._v(" "),_("li",[_("p",[t._v("服务端推送 (Server Push) :")]),t._v(" "),_("p",[t._v("浏览器发送一个请求，服务器主动向浏览器推送与这个请求相关的资源，这样浏览器就不用发起后续请求。")])]),t._v(" "),_("li",[_("p",[t._v("头部压缩：使用 "),_("a",{attrs:{href:"https://httpwg.org/specs/rfc7541.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HPACK"),_("OutboundLink")],1),t._v(" 算法来压缩首部内容")])]),t._v(" "),_("li",[_("p",[t._v("应用层的重置连接")])]),t._v(" "),_("li",[_("p",[t._v("请求优先级设置")]),t._v(" "),_("p",[t._v("HTTP/2 里的每个 stream 都可以设置依赖 (Dependency) 和权重，可以按依赖树分配优先级，解决了关键请求被阻塞的问题")])]),t._v(" "),_("li",[_("p",[t._v("流量控制")]),t._v(" "),_("p",[t._v("每个 http2 流都拥有自己的公示的流量窗口，它可以限制另一端发送数据。对于每个流来说，两端都必须告诉对方自己还有足够的空间来处理新的数据，而在该窗口被扩大前，另一端只被允许发送这么多数据。")])])]),t._v(" "),_("h3",{attrs:{id:"_3-3-http2-的头部压缩的原理-hpack-算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-http2-的头部压缩的原理-hpack-算法"}},[t._v("#")]),t._v(" 3.3 http2 的头部压缩的原理 (HPACK 算法)")]),t._v(" "),_("p",[t._v("其原理就是匹配当前连接存在的索引空间，若某个键值已存在，则用相应的索引代替首部条目，比如 “:method: GET” 可以匹配到静态索引中的 index 2，传输时只需要传输一个包含 2 的字节即可；若索引空间中不存在，则用字符编码传输，字符编码可以选择哈夫曼编码，然后分情况判断是否需要存入动态索引表中")]),t._v(" "),_("p",[t._v("客户端服务端都一样，目前协议商定的静态索引包含 61 个键值")]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("参考文章")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://juejin.cn/post/6844904089495535624",target:"_blank",rel:"noopener noreferrer"}},[t._v("看完这篇 HTTPS，和面试官扯皮就没问题了"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.cn/post/6844903734670000142",target:"_blank",rel:"noopener noreferrer"}},[t._v("面试官问：你了解HTTP2.0吗？"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://blog.wangriyu.wang/2018/05-HTTP2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP2 详解"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);