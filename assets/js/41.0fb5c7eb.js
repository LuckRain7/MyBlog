(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{468:function(a,t,s){"use strict";s.r(t);var n=s(34),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HomeBrew 快捷安装")]),a._v("\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 编译安装")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])])]),s("h2",{attrs:{id:"常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[a._v("#")]),a._v(" 常用命令")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动（管理员）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx -s stop   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 关闭（管理员）")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" nginx -s reload "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 重启（管理员）")]),a._v("\n")])])]),s("h2",{attrs:{id:"内置变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[a._v("#")]),a._v(" 内置变量")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$args")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 这个变量等于请求行中的参数，同"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$query_string")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$content_length")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 请求头中的Content-length字段。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$content_type")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 请求头中的Content-Type字段。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$document_root")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 当前请求在root指令中指定的值。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 请求主机头字段，否则为服务器名称。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_user_agent")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 客户端agent信息\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$http_cookie")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 客户端cookie信息\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$limit_rate")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 这个变量可以限制连接速率。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request_method")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 客户端请求的动作，通常为GET或POST。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_addr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 客户端的IP地址。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 客户端的端口。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$remote_user")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 已经经过Auth Basic Module验证的用户名。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request_filename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 当前请求的文件路径，由root或alias指令与URI请求生成。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" HTTP方法（如http，https）。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$server_protocol")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$server_addr")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 服务器地址，在完成一次系统调用后可以确定这个值。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$server_name")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 服务器名称。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$server_port")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 请求到达服务器的端口号。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$request_uri")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 包含请求参数的原始URI，不包含主机名，如: ”/foo/bar.php?arg"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("baz”。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 不带请求参数的当前URI，"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v("不包含主机名，如”/foo/bar.html”。\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$document_uri")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" 与"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$uri")]),a._v("相同\n")])])]),s("h2",{attrs:{id:"location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[a._v("#")]),a._v(" location")]),a._v(" "),s("h3",{attrs:{id:"_1-location-路径映射路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-location-路径映射路径"}},[a._v("#")]),a._v(" 1. location 路径映射路径")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("=      进行普通字符精确匹配。也就是完全匹配。\n^~     前缀匹配。如果匹配成功，则不再匹配其他location。\n~      表示执行一个正则匹配，区分大小写\n~*     表示执行一个正则匹配，不区分大小写\n/xxx/  常规字符串路径匹配\n/      通用匹配，任何请求都会匹配到\n")])])]),s("p",[a._v("location 优先级从高到底:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("= > /a/b/c >  ^~ path >  ~,~* path > /a/b > /\n")])])]),s("p",[a._v("example:")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("location = / {\n    # 精确匹配/，主机名后面不能带任何字符串 /\n    [ configuration A ]\n}\nlocation / {\n    # 匹配所有以 / 开头的请求。\n    # 但是如果有更长的同类型的表达式，则选择更长的表达式。\n    # 如果有正则表达式可以匹配，则优先匹配正则表达式。\n    [ configuration B ]\n}\nlocation /documents/ {\n    # 匹配所有以 /documents/ 开头的请求，匹配符合以后，还要继续往下搜索。\n    # 但是如果有更长的同类型的表达式，则选择更长的表达式。\n    # 如果有正则表达式可以匹配，则优先匹配正则表达式。\n    [ configuration C ]\n}\nlocation ^~ /images/ {\n    # 匹配所有以 /images/ 开头的表达式，如果匹配成功，则停止匹配查找，停止搜索。\n    # 所以，即便有符合的正则表达式location，也不会被使用\n    [ configuration D ]\n}\n\nlocation ~* \\.(gif|jpg|jpeg)$ {\n    # 匹配所有以 gif jpg jpeg结尾的请求。\n    # 但是 以 /images/开头的请求，将使用 Configuration D，D具有更高的优先级\n    [ configuration E ]\n}\n\nlocation /images/ {\n    # 字符匹配到 /images/，还会继续往下搜索\n    [ configuration F ]\n}\n\nlocation = /test.htm {\n    root   /usr/local/var/www/htm;\n    index  index.htm;\n}\n")])])]),s("h3",{attrs:{id:"_2-路径拼接问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-路径拼接问题"}},[a._v("#")]),a._v(" 2. 路径拼接问题")]),a._v(" "),s("p",[a._v("下面四种情况分别用 http://192.168.1.4/proxy/test.html 进行访问。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1 会被代理到http://127.0.0.1:81/test.html 这个url")]),a._v("\nlocation  /proxy/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    proxy_pass http://127.0.0.1:81/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2 会被代理到http://127.0.0.1:81/proxy/test.html 这个url")]),a._v("\nlocation  /proxy/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    proxy_pass http://127.0.0.1:81"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3 会被代理到http://127.0.0.1:81/ftlynx/test.html 这个url。")]),a._v("\nlocation  /proxy/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    proxy_pass http://127.0.0.1:81/ftlynx/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 4 会被代理到http://127.0.0.1:81/ftlynxtest.html 这个url")]),a._v("\nlocation  /proxy/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    proxy_pass http://127.0.0.1:81/ftlynx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"_3-本地文件代理-alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-本地文件代理-alias"}},[a._v("#")]),a._v(" 3. 本地文件代理 alias")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("location ^~ /asset/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" /Users/Rain/code/Project/src/asset/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    autoindex on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    index index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"rewrite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rewrite"}},[a._v("#")]),a._v(" rewrite")]),a._v(" "),s("blockquote",[s("p",[a._v("重写链接")])]),a._v(" "),s("p",[s("code",[a._v("rewrite regex replacement [flag];")])]),a._v(" "),s("p",[a._v("flag")]),a._v(" "),s("ul",[s("li",[a._v("last：停止处理当前的 ngx_http_rewrite_module 的指令集，并开始搜索与更改后的 URI 相匹配的 location;")]),a._v(" "),s("li",[a._v("break：停止处理当前的 ngx_http_rewrite_module 指令集，就像上面说的 break 指令一样;")]),a._v(" "),s("li",[a._v("redirect：返回 302 临时重定向。")]),a._v(" "),s("li",[a._v("permanent：返回 301 永久重定向。")])]),a._v(" "),s("p",[s("strong",[a._v("example:")])]),a._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("rewrite")]),a._v(" ^/recommend/campus$ "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),a._v("://nowpick.nowcoder.com/w/recommend/campus redirect")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("rewrite")]),a._v(" ^/school/schedule/(\\d+)$ https://nowpick.nowcoder.com/w/school/schedule/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v(" redirect")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("rewrite")]),a._v(" ^/activity/v2/special-activity/index/(\\w+)$ "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$scheme")]),a._v("://www.nowcoder.com/jobs/activity/v2/special-activity/index/"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$1")]),a._v(" redirect")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("hr"),a._v(" "),s("p",[a._v("TODO")]),a._v(" "),s("ul",[s("li",[a._v("转发与重定向之间的区别")])])])}),[],!1,null,null,null);t.default=e.exports}}]);