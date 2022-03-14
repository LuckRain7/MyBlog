(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{501:function(t,s,a){"use strict";a.r(s);var n=a(34),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" GIT")]),t._v(" "),a("h2",{attrs:{id:"_1-git-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-原理"}},[t._v("#")]),t._v(" 1. git 原理")]),t._v(" "),a("p",[t._v("Git 是目前世界上最先进的分布式版本控制系统（没有之一）。")]),t._v(" "),a("p",[t._v("还是去看看阮老师写的吧，链接： "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/10/git-internals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 原理入门- 阮一峰"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"_2-目录解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-目录解析"}},[t._v("#")]),t._v(" 2. 目录解析")]),t._v(" "),a("p",[t._v(".git 目录下有几个重要的文件/文件夹")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("* config    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件，主要存储项目的一些配置信息")]),t._v("\n* objects   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件夹， 存储git对象")]),t._v("\n* HEAD      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件，记录当前的头指针")]),t._v("\n* index     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件，存储暂存区的信息")]),t._v("\n* refs      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件夹， 存储分支的指针")]),t._v("\n* hooks     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件夹，存储钩子文件")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用命令"}},[t._v("#")]),t._v(" 3. 常用命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化git")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status -s   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以极简的方式显示文件状态")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加所有文件到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fileName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件到暂存区")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitInfo"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交暂存区到仓库区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 会将修改追加到上一次的提交里")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取回远程仓库的变化，并与本地分支合并")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --rebase  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推荐添加 --rebase")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程主机名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载远程仓库的所有变动")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并指定分支到当前分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 列出所有本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到指定分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" origin/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看项目中git配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置全局信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目中配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name]"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[email address]"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前分支是从哪个分支拉出来的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog --date"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("local "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-1-git-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-git-remote"}},[t._v("#")]),t._v(" 3.1 git remote")]),t._v(" "),a("blockquote",[a("p",[t._v("管理远程仓库")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看关联的远程仓库的详细信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库的关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote remove "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程仓库的关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote update origin --prune    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新远程仓库的分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-2-git-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-git-rebase"}},[t._v("#")]),t._v(" 3.2 git rebase")]),t._v(" "),a("p",[t._v("git rebase 一般被翻译为 变基，这个名字很灵性。他会找共同的父亲，然后将 commit 插入到 commit 列表中，可以把本地未 push 的分叉提交历史整理成直线；")]),t._v(" "),a("p",[a("strong",[t._v("git rebase 不适合多人协作!")])]),t._v(" "),a("h2",{attrs:{id:"_4-常见应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常见应用"}},[t._v("#")]),t._v(" 4. 常见应用")]),t._v(" "),a("h3",{attrs:{id:"_4-1-本地项目上传至多个远程库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-本地项目上传至多个远程库"}},[t._v("#")]),t._v(" 4.1 本地项目上传至多个远程库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联远程库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("项目URL地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" github "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("项目URL地址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push gitee  master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push github master\n")])])]),a("h3",{attrs:{id:"_4-2-git-远程分支强制覆盖本地分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-git-远程分支强制覆盖本地分支"}},[t._v("#")]),t._v(" 4.2 git 远程分支强制覆盖本地分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])])]),a("h3",{attrs:{id:"_4-3-gitignore-不生效解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-gitignore-不生效解决方案"}},[t._v("#")]),t._v(" 4.3 .gitignore 不生效解决方案")]),t._v(" "),a("blockquote",[a("p",[t._v("清除缓存 重新提交")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update .gitignore'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])]),a("h3",{attrs:{id:"_4-4-远程分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-远程分支操作"}},[t._v("#")]),t._v(" 4.4 远程分支操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程分支名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-5-本地分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-本地分支操作"}},[t._v("#")]),t._v(" 4.5 本地分支操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branchName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换本地分支")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-6-git-stash-暂存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-git-stash-暂存"}},[t._v("#")]),t._v(" 4.6 git stash 暂存")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将修改存储到暂存区，工作区会删除这些修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取出修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看暂存区的所有暂存修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取出相应的暂存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将记录列表中取出的对应暂存记录删除")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-7-清除无用的-branch-ref"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-清除无用的-branch-ref"}},[t._v("#")]),t._v(" 4.7 清除无用的 branch ref")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://git-scm.com/docs/git-remote#Documentation/git-remote.txt-empruneem",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 官网: git remote prune [-n | --dry-run] "),a("name",[t._v("…​"),a("OutboundLink")],1)],1)]),t._v(" "),a("p",[t._v("Deletes stale references associated with "),a("code",[t._v("<name>")]),t._v(" . By default, stale remote-tracking branches under "),a("code",[t._v("<name>")]),t._v(" are deleted, but depending on global configuration and the configuration of the remote we might even prune local tags that haven’t been pushed there. Equivalent to git fetch --prune "),a("name",[t._v(", except that no new references will be fetched.")])],1),t._v(" "),a("p",[t._v("删除与 "),a("code",[t._v("<name>")]),t._v(" 关联的陈旧引用。 默认情况下，删除 "),a("code",[t._v("<name>")]),t._v(" 下过时的远程跟踪分支，但根据全局配置和远程配置，我们甚至可能会修剪尚未推送到那里的本地标签。 等同于 git fetch --prune "),a("name",[t._v(" ，除了不会获取新的引用。")])],1)]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote prune origin  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清除无用的 branch ref")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-8-撤销本次-pull-rebase-变基-回退到-pull-前的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-撤销本次-pull-rebase-变基-回退到-pull-前的代码"}},[t._v("#")]),t._v(" 4.8 撤销本次 pull rebase(变基) 回退到 pull 前的代码")]),t._v(" "),a("div",{staticClass:"language-BASH extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参看本地记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到指定 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --abort              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 取消 rebase 状态")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-9-批量删除分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-批量删除分支"}},[t._v("#")]),t._v(" 4.9 批量删除分支")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# xxx 为匹配字符")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-10-代码回退到某个-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-10-代码回退到某个-commit"}},[t._v("#")]),t._v(" 4.10 代码回退到某个 commit")]),t._v(" "),a("blockquote",[a("p",[t._v("谨慎使用，回退不可逆 或使用 --soft")])]),t._v(" "),a("div",{staticClass:"language-BASH extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查找指定 commit 的 id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset –hard edfab6afce95d0ebbd35d34219dba365773b5b4e "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 版本回退")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-git-提交规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-git-提交规范"}},[t._v("#")]),t._v(" 5. git 提交规范")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Feat：新功能（feature）\nFix：修补bug\nDocs：文档（documentation）\nStyle： 格式（不影响代码运行的变动）\nRefactor：重构（即不是新增功能，也不是修改bug的代码变动）\nTest：增加测试\nChore：构建过程或辅助工具的变动\nModify: 修改\n")])])]),a("h2",{attrs:{id:"_6-git-cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-git-cherry-pick"}},[t._v("#")]),t._v(" 6. git cherry-pick")]),t._v(" "),a("blockquote",[a("p",[t._v("git cherry-pick 是将某个分支的 commit 提交到当前分支")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("needPickBranch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入需要被提交的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 填写 commitHash 进行提交")]),t._v("\n")])])]),a("h2",{attrs:{id:"_7-reset-与-revert-回滚-回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-reset-与-revert-回滚-回退"}},[t._v("#")]),t._v(" 7. reset 与 revert（回滚/回退）")]),t._v(" "),a("p",[a("strong",[t._v("git revert")])]),t._v(" "),a("blockquote",[a("p",[t._v("回滚(撤销)对应 commit 。git revert 后多出一条 commit 来提醒开发者，这里是回撤。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert HEAD             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销前一次 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert HEAD^            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销前前一次 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销指定的版本")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --no-edit   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行时不打开默认编辑器，直接使用 Git 自动生成的提交信息。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --no-commit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只抵消暂存区和工作区的文件变化，不产生新的提交。")]),t._v("\n")])])]),a("p",[a("strong",[t._v("git reset")])]),t._v(" "),a("blockquote",[a("p",[t._v("回退到对应 commit 版本，直接将之前 commit 丢弃。")])]),t._v(" "),a("div",{staticClass:"language-BASH extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退前一次 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD^                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退前前一次 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到指定的版本")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("commitHash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --hard 参数可以让工作区里面的文件也回到以前的状态。")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[t._v("参考文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/cdccfef91ae1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 常用命令总结"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://rogerdudler.github.io/git-guide/index.zh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git - 简明指南"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000022440330",target:"_blank",rel:"noopener noreferrer"}},[t._v("提醒！你可能会忽略的 Git 提交规范"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("git cherry-pick 教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2019/12/git-undo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何撤销 Git 操作？"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/6974184935804534815",target:"_blank",rel:"noopener noreferrer"}},[t._v("我在工作中是如何使用 git 的"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);