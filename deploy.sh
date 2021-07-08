###
 # @Description:  
 # @Author: LuckRain7
 # @Date: 2020-04-14 15:35:03
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# git add .
# git commit -m 'update'

# git push github master
# git push gitee master

# 生成静态文件
npm run docs:build

# git add .
# git commit -m 'update'

# git push github master
# git push gitee master

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'rain7.top' > CNAME

git init
git add -A
git commit -m 'deploy'


# Gitee
# git push  -f git@gitee.com:LuckRain/blog.git master

# coding
# git push  -f git@e.coding.net:luckrain7/luckrain7.git master

# GitHub
git push  -f git@github.com:LuckRain7/MyBlog.git master:gh-pages

cd -