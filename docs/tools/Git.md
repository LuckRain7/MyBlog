---
sidebar: auto
---
# GIT

##  一、git 是什么？ 

 Git是目前世界上最先进的分布式版本控制系统（没有之一）。 

## 二、git 原理

还是去看看阮老师写的吧，链接：  [Git 原理入门- 阮一峰]( http://www.ruanyifeng.com/blog/2018/10/git-internals.html )

## 三、git 目录

.git目录下有几个重要的文件/文件夹

- config   文件，主要存储项目的一些配置信息
- objects 文件夹， 存储git对象
- HEAD    文件，记录当前的头指针
- index    文件，存储暂存区的信息
- refs       文件夹， 存储分支的指针
-  hooks    文件夹，存储钩子文件

![git-catalog](/img/git-catalog.png)

## 四、git 常用命令

```bash
git init # 初始化git

git status -s #以极简的方式显示文件状态

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


git reset --hard HEAD^ #版本回退到上一个版本
git reset --hard [commitId] #取消回退，commitId为你想要回到的未来版本号
```

### git remote 

> 管理远程仓库 

```bash
#查看远程仓库
git remote 
#查看关联的远程仓库的详细信息
git remote -v 
#添加远程仓库的关联
git remote add origin [远程仓库地址] 
#删除远程仓库的关联
git remote remove [远程仓库名称] 
#更新远程仓库的分支
git remote update origin --prune 
```

### git rebase

> rebase操作可以把本地未push的分叉提交历史整理成直线；
>
> rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。



## 五、git的常见应用

### 1、本地项目上传至多个远程库

```shell
# 关联远程库
git remote add gitee [url]
git remote add github [url]
git remote rm [origin] # 删除

# 推送
git push gitee master
git push github master
```

### 2、git远程分支强制覆盖本地分支

```bash
git fetch --all  
git reset --hard [origin/master] 
git pull
```

#### 3、Git忽略规则(.gitignore配置）不生效解决方案

清除缓存 重新提交

```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git push
```

## 六、Git提交规范

```
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```



## 参考文章

[Git常用命令总结](https://www.jianshu.com/p/cdccfef91ae1 )

[git - 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)

[提醒！你可能会忽略的 Git 提交规范](https://segmentfault.com/a/1190000022440330)