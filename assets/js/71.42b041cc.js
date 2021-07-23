(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{441:function(s,t,a){"use strict";a.r(t);var e=a(27),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mac-相关工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-相关工具"}},[s._v("#")]),s._v(" Mac 相关工具")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("目录：")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#app"}},[s._v("APP")])]),a("li",[a("a",{attrs:{href:"#yarn"}},[s._v("Yarn")])]),a("li",[a("a",{attrs:{href:"#homebrew"}},[s._v("HomeBrew")])]),a("li",[a("a",{attrs:{href:"#nginx"}},[s._v("Nginx")])]),a("li",[a("a",{attrs:{href:"#终端配置"}},[s._v("终端配置")])]),a("li",[a("a",{attrs:{href:"#修改启动台图标排布"}},[s._v("修改启动台图标排布")])])])]),a("p")]),s._v(" "),a("h2",{attrs:{id:"app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app"}},[s._v("#")]),s._v(" APP")]),s._v(" "),a("ul",[a("li",[s._v("[ Markdown 编辑器 ]  "),a("a",{attrs:{href:"https://www.typora.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Typora"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("[ 视频播放器 ] IINA")]),s._v(" "),a("li",[s._v("[ 鼠标滚轮平滑滚动 ] Mos")]),s._v(" "),a("li",[s._v("[ 终端工具 ] iTerm + zsh")]),s._v(" "),a("li",[s._v("[ PDF 编辑器 ] PDF Expert")]),s._v(" "),a("li",[s._v("[ Web 浏览器 ] Chrome | Firefox | Edge")]),s._v(" "),a("li",[s._v("[ 抓包工具 ] Charles")]),s._v(" "),a("li",[s._v("[ 代码编辑器 ] Visual Studio Code | Sublime Text")]),s._v(" "),a("li",[s._v("[ 截图工具 ] Xnip")]),s._v(" "),a("li",[s._v("[ 风扇控制 ] Macs Fan Control")]),s._v(" "),a("li",[s._v("[ 翻译 ] DeepL")]),s._v(" "),a("li",[s._v("[ 压缩软件 ] MacZip")]),s._v(" "),a("li",[s._v("[ 虚拟机 ] VMware Fusion")]),s._v(" "),a("li",[s._v("[ 脑图 ] Xmind")]),s._v(" "),a("li",[s._v("[ 更好用的 command + tab ] "),a("a",{attrs:{href:"https://contexts.co/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Contexts"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[s._v("#")]),s._v(" Yarn")]),s._v(" "),a("blockquote",[a("p",[s._v("压缩包安装 ↓")])]),s._v(" "),a("p",[s._v("1、下载：https://github.com/yarnpkg/yarn/releases 中 yarn-v1.22.10.tar.gz")]),s._v(" "),a("p",[s._v('2、配置环境变量：export PATH="$PATH:/Users/nowcoder/app/yarn/bin/"')]),s._v(" "),a("h2",{attrs:{id:"homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#homebrew"}},[s._v("#")]),s._v(" HomeBrew")]),s._v(" "),a("blockquote",[a("p",[s._v("踩坑：推荐中科院的源")])]),s._v(" "),a("p",[s._v("1、安装地址："),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/111014448",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://zhuanlan.zhihu.com/p/111014448"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("2、换源地址："),a("a",{attrs:{href:"https://www.zhihu.com/question/31360766/answer/749386652",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.zhihu.com/question/31360766/answer/749386652"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换 Homebrew")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" remote set-url origin https://mirrors.ustc.edu.cn/brew.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换 Homebrew Core")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo homebrew/core"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换 Homebrew Cask")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("brew --repo homebrew/cask"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换 Homebrew-bottles")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于 bash 用户：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bash_profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bash_profile\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对于 zsh 用户：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.zshrc\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])]),a("h2",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),a("p",[s._v("install:  brew install nginx")]),s._v(" "),a("p",[s._v("nginx 路径:  /usr/local/etc/nginx/")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s stop     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结束")]),s._v("\n")])])]),a("h2",{attrs:{id:"终端配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#终端配置"}},[s._v("#")]),s._v(" 终端配置")]),s._v(" "),a("p",[a("strong",[s._v("tree")])]),s._v(" "),a("blockquote",[a("p",[s._v("命令行打印目录树")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tree\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们要在目录遍历时使用 -L 参数指定遍历层级")]),s._v("\ntree -L "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历两级目录")]),s._v("\n")])])]),a("p",[a("strong",[s._v("autojump")])]),s._v(" "),a("blockquote",[a("p",[s._v("快捷目录跳转")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autojump\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 .zshrc 中添加插件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 找到 plugins 并添加 autojump插件")]),s._v("\nplugins "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" autojump "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启 zsh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.zshrc\n")])])]),a("p",[a("strong",[s._v("zsh-syntax-highlighting")])]),s._v(" "),a("blockquote",[a("p",[s._v("命令行高亮")])]),s._v(" "),a("p",[a("strong",[s._v("zsh-autosuggestions")])]),s._v(" "),a("blockquote",[a("p",[s._v("命令记忆提示")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"修改启动台图标排布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改启动台图标排布"}},[s._v("#")]),s._v(" 修改启动台图标排布")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("defaults "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.dock springboard-rows -int "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\ndefaults "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.dock springboard-columns -int "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\ndefaults "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.dock ResetLaunchPad -bool TRUE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("killall")]),s._v(" Dock\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);