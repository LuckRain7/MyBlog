(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{457:function(e,r,v){"use strict";v.r(r);var w=v(34),s=Object(w.a)({},(function(){var e=this,r=e.$createElement,v=e._self._c||r;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"dns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[e._v("#")]),e._v(" DNS")]),e._v(" "),v("p",[e._v("现在举一个具体的例子，比如客户端请求 www.server.com 这个域名，解析域名的过程如下：")]),e._v(" "),v("ol",[v("li",[e._v("客户端首先会发出一个 DNS 请求，问 www.server.com 的 IP 是啥，并发给本地 DNS 服务器（也就是客户端的 TCP/IP 设置中填写的 DNS 服务器地址）。")]),e._v(" "),v("li",[e._v("本地域名服务器收到客户端的请求后，如果缓存里的表格能找到 www.server.com，则它直接返回 IP 地址。如果没有，本地 DNS 会去问它的根域名服务器：“老大， 能告诉我 www.server.com 的 IP 地址吗？” 根域名服务器是最高层次的，它不直接用于域名解析，但能指明一条道路。")]),e._v(" "),v("li",[e._v("根 DNS 收到来自本地 DNS 的请求后，发现后置是 .com，说：“www.server.com 这个域名归 .com 区域管理”，我给你 .com 顶级域名服务器地址给你，你去问问它吧。”")]),e._v(" "),v("li",[e._v("本地 DNS 收到顶级域名服务器的地址后，发起请求问“老二， 你能告诉我 www.server.com 的 IP 地址吗？”")]),e._v(" "),v("li",[e._v("顶级域名服务器说：“我给你负责 www.server.com 区域的权威 DNS 服务器的地址，你去问它应该能问到”。")]),e._v(" "),v("li",[e._v("本地 DNS 于是转向问权威 DNS 服务器：“老三，www.server.com 对应的 IP 是啥呀？” server.com 的权威 DNS 服务器，它是域名解析结果的原出处。为啥叫权威呢？就是我的域名我做主。")]),e._v(" "),v("li",[e._v("权威 DNS 服务器查询后将对应的 IP 地址 X.X.X.X 告诉本地 DNS。")]),e._v(" "),v("li",[e._v("本地 DNS 再将 IP 地址返回客户端，客户端和目标建立连接。")])])])}),[],!1,null,null,null);r.default=s.exports}}]);