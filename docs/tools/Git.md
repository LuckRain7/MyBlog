---
sidebar: auto
---
# GIT

##  git 是什么？ 

 Git是目前世界上最先进的分布式版本控制系统（没有之一）。 

## git 原理

还是去看看阮老师写的吧，链接：  [Git 原理入门- 阮一峰]( http://www.ruanyifeng.com/blog/2018/10/git-internals.html )

## git 目录

.git目录下有几个重要的文件/文件夹

- config   文件，主要存储项目的一些配置信息
- objects 文件夹， 存储git对象
- HEAD    文件，记录当前的头指针
- index    文件，存储暂存区的信息
- refs       文件夹， 存储分支的指针
-  hooks    文件夹，存储钩子文件

![git-catalog](/img/git-catalog.png)

## git 常用命令

```bash
git init # 初始化git

git clone [url] # 克隆项目

git add . #添加所有文件到暂存区
git add [文件名] #添加指定文件到暂存区

git commit -m [提交信息] # 提交暂存区到仓库区

git pull # 取回远程仓库的变化，并与本地分支合并

git push # 推送到远程仓库
git push [远程主机名] [本地分支名]

git fetch --all # 下载远程仓库的所有变动

git merge [分支名] # 合并指定分支到当前分支

git branch # 列出所有本地分支
git checkout [分支名] # 切换到指定分支

# 配置全局信息
git config --global user.name "[name]"
git config --global user.email "[email address]"
# 项目中配置
git config user.name "[name]"
git config user.email "[email address]"
```

## git rebase

> rebase操作可以把本地未push的分叉提交历史整理成直线；
>
> rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。

## 本地项目上传至多个远程库

```shell
# 关联远程库
git remote add gitee [url]
git remote add github [url]
git remote rm [origin] # 删除

# 推送
git push gitee master
git push github master
```

## git远程分支强制覆盖本地分支

```bash
git fetch --all  
git reset --hard [origin/master] 
git pull
```

## Git忽略规则(.gitignore配置）不生效解决方案

清除缓存 重新提交

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git push
```
