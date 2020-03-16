# GIT

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

# 设置提交代码时的用户信息
git config [--global] user.name "[name]"
git config [--global] user.email "[email address]"
```

## 本地项目上传至多个远程库

```shell
# 关联远程库
git remote add gitee [url]
git remote add github [url]

# 推送
git push gitee master
git push github master
```

