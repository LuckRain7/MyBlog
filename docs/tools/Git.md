---
sidebar: auto
---

# GIT

## 1. git 原理

Git 是目前世界上最先进的分布式版本控制系统（没有之一）。

还是去看看阮老师写的吧，链接： [Git 原理入门- 阮一峰](http://www.ruanyifeng.com/blog/2018/10/git-internals.html)

## 2. 目录解析

.git 目录下有几个重要的文件/文件夹

```bash
* config    # 文件，主要存储项目的一些配置信息
* objects   # 文件夹， 存储git对象
* HEAD      # 文件，记录当前的头指针
* index     # 文件，存储暂存区的信息
* refs      # 文件夹， 存储分支的指针
* hooks     # 文件夹，存储钩子文件
```

## 3. 常用命令

```bash
git init        # 初始化git

git status -s   # 以极简的方式显示文件状态

git clone <url> # 克隆项目

git add .       # 添加所有文件到暂存区
git add <fileName> # 添加指定文件到暂存区

git commit -m <commitInfo>   # 提交暂存区到仓库区
git commit --amend           # 会将修改追加到上一次的提交里

git pull           # 取回远程仓库的变化，并与本地分支合并
git pull --rebase  # 推荐添加 --rebase

git push # 推送到远程仓库
git push [远程主机名] [本地分支名]

git fetch --all # 下载远程仓库的所有变动

git merge [分支名] # 合并指定分支到当前分支

git branch  # 列出所有本地分支
git checkout [分支名] # 切换到指定分支
git checkout -b [本地分支名] origin/[远程分支名] # 拉取远程分支
git branch -d [本地分支名] # 删除本地分支

#查看项目中git配置
git config --list
# 配置全局信息
git config --global user.name "[name]"
git config --global user.email "[email address]"
# 项目中配置
git config user.name "[name]"
git config user.email "[email address]"

# 查看当前分支是从哪个分支拉出来的
git reflog --date=local | grep <branchName>
```

### 3.1 git remote

> 管理远程仓库

```bash
git remote                          # 查看远程仓库
git remote -v                       # 查看关联的远程仓库的详细信息
git remote add origin [远程仓库地址]  # 添加远程仓库的关联
git remote remove [远程仓库名称]      # 删除远程仓库的关联
git remote update origin --prune    # 更新远程仓库的分支
```

### 3.2 git rebase

git rebase 一般被翻译为 变基，这个名字很灵性。他会找共同的父亲，然后将 commit 插入到 commit 列表中，可以把本地未 push 的分叉提交历史整理成直线；

**git rebase 不适合多人协作!**

## 4. 常见应用

### 4.1 本地项目上传至多个远程库

```shell
# 关联远程库
git remote add gitee [项目URL地址]
git remote add github [项目URL地址]
git remote rm [origin] # 删除

# 推送
git push gitee  master
git push github master
```

### 4.2 git 远程分支强制覆盖本地分支

```bash
git fetch --all
git reset --hard [origin/master]
git pull
```

### 4.3 .gitignore 不生效解决方案

> 清除缓存 重新提交

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git push
```

### 4.4 远程分支操作

```bash
git push origin --delete [远程分支名称] # 删除远程分支
```

### 4.5 本地分支操作

```bash
git branch                   # 查看本地分支
git branch -D <branchName>   # 删除本地分支
git checkout <branchName>    # 切换本地分支
```

### 4.6 git stash 暂存

```bash
git stash                 # 将修改存储到暂存区，工作区会删除这些修改
git stash pop             # 取出修改
git stash list            # 查看暂存区的所有暂存修改
git stash apply stash@{0} # 取出相应的暂存
git stash drop stash@{0}  # 将记录列表中取出的对应暂存记录删除
```

### 4.7 清除无用的 branch ref

> [git 官网: git remote prune [-n | --dry-run] <name>…​](https://git-scm.com/docs/git-remote#Documentation/git-remote.txt-empruneem)
>
> Deletes stale references associated with `<name>` . By default, stale remote-tracking branches under `<name>` are deleted, but depending on global configuration and the configuration of the remote we might even prune local tags that haven’t been pushed there. Equivalent to git fetch --prune <name>, except that no new references will be fetched.
>
> 删除与 `<name>` 关联的陈旧引用。 默认情况下，删除 `<name>` 下过时的远程跟踪分支，但根据全局配置和远程配置，我们甚至可能会修剪尚未推送到那里的本地标签。 等同于 git fetch --prune <name> ，除了不会获取新的引用。

```bash
git remote prune origin  # 清除无用的 branch ref
```

### 4.8 撤销本次 pull rebase(变基) 回退到 pull 前的代码

```BASH
git reflog                      # 参看本地记录
git reset --hard <commitId>     # 回退到指定 commit
git rebase --abort              # 取消 rebase 状态
```

### 4.9 批量删除分支

```bash
# 批量删除本地分支 xxx 为匹配字符
git branch |grep 'xxx' |xargs git branch -D

# 批量删除本地非 develop master 分支
git branch |egrep -v "(^\*|master|develop)" |xargs git branch -D

# 批量删除远程分支 xxx 为匹配字符
git branch -r |grep 'xxx' |xargs |awk '{gsub("origin/","");print $0}' |xargs git push origin -d
```

### 4.10 代码回退到某个 commit

> 谨慎使用，回退不可逆 或使用 --soft

```BASH
git log  # 查找指定 commit 的 id
git reset –hard edfab6afce95d0ebbd35d34219dba365773b5b4e # 版本回退
```

## 5. git 提交规范

```
Feat：新功能（feature）
Fix：修补bug
Docs：文档（documentation）
Style： 格式（不影响代码运行的变动）
Refactor：重构（即不是新增功能，也不是修改bug的代码变动）
Test：增加测试
Chore：构建过程或辅助工具的变动
Modify: 修改
```

## 6. git cherry-pick

> git cherry-pick 是将某个分支的 commit 提交到当前分支

```bash
git checkout <needPickBranch>   # 进入需要被提交的分支
git cherry-pick <commitHash>    # 填写 commitHash 进行提交
```

## 7. reset 与 revert（回滚/回退）

**git revert**

> 回滚(撤销)对应 commit 。git revert 后多出一条 commit 来提醒开发者，这里是回撤。

```bash
git revert HEAD             # 撤销前一次 commit
git revert HEAD^            # 撤销前前一次 commit
git revert <commitHash>     # 撤销指定的版本

# 参数
git revert <commitHash> --no-edit   # 执行时不打开默认编辑器，直接使用 Git 自动生成的提交信息。
git revert <commitHash> --no-commit # 只抵消暂存区和工作区的文件变化，不产生新的提交。
```

**git reset**

> 回退到对应 commit 版本，直接将之前 commit 丢弃。

```BASH
git reset HEAD                  # 回退前一次 commit
git reset HEAD^                 # 回退前前一次 commit
git reset <commitHash>          # 回退到指定的版本

# 参数
git reset --hard  <commitHash>  # 参数可以让工作区里面的文件也回到以前的状态。
git reset --soft  <commitHash>  # 回退后a分支修改的代码被保留并标记为add的状态（git status 是绿色的状态）
git reset --mixed <commitHash>  # 重置索引，但不重置工作树，更改后的文件标记为未提交（add）的状态。默认操作。
git reset --hard  <commitHash>  # 重置索引和工作树，并且a分支修改的所有文件和中间的提交，没提交的代码都被丢弃了。
git reset --merge <commitHash>  # 和--hard类似，只不过如果在执行reset命令之前你有改动一些文件并且未提交，merge会保留你的这些修改，hard则不会。【注：如果你的这些修改add过或commit过，merge和hard都将删除你的提交】
git reset --keep  <commitHash>  #和--hard类似，执行reset之前改动文件如果是a分支修改了的，会提示你修改了相同的文件，不能合并。如果不是a分支修改的文件，会移除缓存区。git status还是可以看到保持了这些修改。
```

## 8. git reflog

`git reflog <subcommand> <options>`

```bash
git reflog [show] [log-options] [<ref>]

# expire 子命令会删除掉更老的 reflog 条目。
git reflog expire [--expire=<time>] [--expire-unreachable=<time>] [--rewrite] [--updateref] [--stale-fix] [--dry-run | -n] [--verbose] [--all | <refs>…​]

# delete 子命令从 reflog 中删除一个条目。
git reflog delete [--rewrite] [--updateref] [--dry-run | -n] [--verbose] ref@{specifier}…​

# exists 子命令检查一个 ref 是否有一个 reflog。
git reflog exists <ref>
```

git log 是显示当前的 HEAD 和它的祖先的，递归是沿着当前指针的父亲，父亲的父亲，…，这样的原则。

git reflog 根本不遍历 HEAD 的祖先。它是 HEAD 所指向的一个顺序的提交列表：它的 undo 历史。reflog 并不是 repo（仓库）的一部分，它单独存储，而且不包含在 pushes，fetches 或者 clones 里面，它纯属是本地的。

reflog 可以很好地帮助你恢复你误操作的数据，例如你错误地 reset 了一个旧的提交，或者 rebase，…，这个时候你可以使用 reflog 去查看在误操作之前的信息，并且使用 git reset --hard 去恢复之前的状态。

下面研究一下这个命令的具体用法。

先了解一下 git 的版本表示方法：

HEAD@{2} means “where HEAD used to be two moves ago”, master@{one.week.ago}means “where master used to point to one week ago in this local repository”

HEAD@{2}表示 HEAD 指针在两次移动之前的情况；而 master@{one.week.ago}表示 master 在本地仓库一周之前的情况。

“show”子命令显示所指定的参考的日志。

---

参考文章

- [Git 常用命令总结](https://www.jianshu.com/p/cdccfef91ae1)
- [Git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [提醒！你可能会忽略的 Git 提交规范](https://segmentfault.com/a/1190000022440330)
- [git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)
- [如何撤销 Git 操作？](https://www.ruanyifeng.com/blog/2019/12/git-undo.html)
- [我在工作中是如何使用 git 的](https://juejin.cn/post/6974184935804534815)
