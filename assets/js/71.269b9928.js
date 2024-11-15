(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{405:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[s._v("#")]),s._v(" NVM")]),s._v(" "),t("h2",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[s._v("#")]),s._v(" 1. 安装")]),s._v(" "),t("ul",[t("li",[s._v("win10 下安装")])]),s._v(" "),t("p",[s._v("下载地址："),t("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/coreybutler/nvm-windows/releases"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("百度网盘地址: 链接：https://pan.baidu.com/s/1q8ogEnJv59k6LSLPOp1ngw 提取码：8nuh")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/nvm1.png",alt:"nvm"}})]),s._v(" "),t("blockquote",[t("p",[s._v("nvm-noinstall.zip： 绿色免安装版本，但是使用之前需要配置")]),s._v(" "),t("p",[t("strong",[s._v("nvm-setup.zip")]),s._v("：安装包，下载之后点击安装，无需配置就可以使用，方便。")]),s._v(" "),t("p",[s._v("Source code(zip)：zip 压缩的源码")]),s._v(" "),t("p",[s._v("Sourc code(tar.gz)：tar.gz 的源码，一般用于*nix 系统")])]),s._v(" "),t("p",[s._v("默认安装即可（别问可不可以自定义 问就是闭眼下一步）")]),s._v(" "),t("p",[s._v("验证安装是否成功，运行 "),t("code",[s._v("nvm -v")]),s._v(" ，出现版本信息")]),s._v(" "),t("ul",[t("li",[s._v("Linux")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),t("h2",{attrs:{id:"_2-解决-nvm-源问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决-nvm-源问题"}},[s._v("#")]),s._v(" 2. 解决 NVM 源问题")]),s._v(" "),t("p",[s._v("默认 nvm 是国外的源，下载基本上是下载不下来的！！！在 "),t("code",[s._v("./bash_profile")]),s._v(" 中添加一下配置信息")]),s._v(" "),t("div",{staticClass:"language-BASH extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# BASH")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########### nvm #############")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.nvm"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/bash_completion"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/bash_completion"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm bash_completion")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 淘宝源")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_NODEJS_ORG_MIRROR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npmmirror.com/mirrors/node/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_IOJS_ORG_MIRROR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://npmmirror.com/mirrors/iojs/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("########### nvm #############")]),s._v("\n")])])]),t("p",[s._v("执行 "),t("code",[s._v("source ./bash_profile")]),s._v(" ，重新加载配置")]),s._v(" "),t("h2",{attrs:{id:"_3-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用命令"}},[s._v("#")]),s._v(" 3. 常用命令")]),s._v(" "),t("p",[s._v("下面命令以 node 10 版本为例")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("nvm "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前NVM版本")]),s._v("\n\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找本电脑上所有的node版本")]),s._v("\n\nnvm "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" v10.19.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装指定版本")]),s._v("\nnvm uninstall v10.19.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 卸载指定版本")]),s._v("\n\nnvm use v10.19.0 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换使用指定的版本node")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);