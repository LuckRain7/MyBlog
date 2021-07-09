(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{437:function(t,s,a){"use strict";a.r(s);var e=a(27),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"mac-相关工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-相关工具"}},[t._v("#")]),t._v(" Mac 相关工具")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("目录：")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#app"}},[t._v("APP")])]),a("li",[a("a",{attrs:{href:"#yarn"}},[t._v("Yarn")])]),a("li",[a("a",{attrs:{href:"#homebrew"}},[t._v("HomeBrew")])]),a("li",[a("a",{attrs:{href:"#nginx"}},[t._v("Nginx")])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app"}},[t._v("#")]),t._v(" APP")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Typora"),a("OutboundLink")],1),t._v(" [ Markdown 编辑器 ]")]),t._v(" "),a("li",[t._v("IINA [ 视频播放器 ]")]),t._v(" "),a("li",[t._v("Mos [ 鼠标滚轮平滑滚动 ]")]),t._v(" "),a("li",[t._v("iTerm + zsh [ 终端工具 ]")])]),t._v(" "),a("h2",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" Yarn")]),t._v(" "),a("blockquote",[a("p",[t._v("压缩包安装 ↓")])]),t._v(" "),a("p",[t._v("1、下载：https://github.com/yarnpkg/yarn/releases 中 yarn-v1.22.10.tar.gz")]),t._v(" "),a("p",[t._v('2、配置环境变量：export PATH="$PATH:/Users/nowcoder/app/yarn/bin/"')]),t._v(" "),a("h2",{attrs:{id:"homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[t._v("#")]),t._v(" HomeBrew")]),t._v(" "),a("blockquote",[a("p",[t._v("踩坑：推荐中科院的源")])]),t._v(" "),a("p",[t._v("1、安装地址："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/111014448",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/111014448"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("2、换源地址："),a("a",{attrs:{href:"https://www.zhihu.com/question/31360766/answer/749386652",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.zhihu.com/question/31360766/answer/749386652"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 Homebrew")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --repo"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" remote set-url origin https://mirrors.ustc.edu.cn/brew.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 Homebrew Core")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --repo homebrew/core"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 Homebrew Cask")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("brew --repo homebrew/cask"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 替换 Homebrew-bottles")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于 bash 用户：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 对于 zsh 用户：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" ~/.zshrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" ~/.zshrc\n")])])]),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[t._v("#")]),t._v(" Nginx")]),t._v(" "),a("p",[t._v("install:  brew install nginx")]),t._v(" "),a("p",[t._v("nginx 路径:  /usr/local/etc/nginx/")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#启动")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -s reload   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -s stop     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#结束")]),t._v("\n")])])]),a("hr")])}),[],!1,null,null,null);s.default=r.exports}}]);