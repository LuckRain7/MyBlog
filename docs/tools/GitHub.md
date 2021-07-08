---
sidebar: auto
---

# 玩转GitHub

::: tip 目录：
[[toc]]

:::

## GitHub 搜索技巧

项目名称搜索 in:name xxx​

项目描述搜索 in:description xxx

项目 README 搜索 in:readme xxx

利用 star, fork 搜索 starts:>3000 xxx  fork:>300 xxx

## GitHub action

在根目录下添加文件： `.github/workflows/action.yml`

action配置：（以 VuePress 打包上传 GitHub pages 为例）

```yml
# name字段是配置文件的描述
name: "rain7.top update"

# on 配置触发条件
on:
  # 在推送到master分支时会自动运行一次
  push:
    branches:
      - master

jobs:
  bot:
    runs-on: ubuntu-latest # 运行环境指定为最新版的 Ubuntu
    # 步骤
    steps:
      # 第一步 从代码仓库获取代码
      - name: Checkout
        uses: actions/checkout@v1

      # 第二步 配置安装 Node 环境
      - name: use Node.js 14
        uses: actions/setup-node@v1
        with:
          node-version: 12
      # 第三部 安装依赖 项目打包
      - name: Install and Build
        run: |
          npm install
          npm run docs:build
          cd docs/.vuepress/dist
          echo 'rain7.top' > CNAME
          cd -

      # 第四部 项目提交
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          token: ${{ secrets.GITHUBTOKEN }}
          branch: gh-pages # The branch the action should deploy to.
          folder: docs/.vuepress/dist # The folder the action should deploy.
          git-config-name: luckrain7
          git-config-email: luckrain7@foxmail.com

```

* GitHub支持
  + [Publishing a package using an action](https://docs.github.com/en/packages/managing-github-packages-using-github-actions-workflows/publishing-and-installing-a-package-with-github-actions#publishing-a-package-using-an-action)
  + [HTTP-based Git access by an installation](https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps#http-based-git-access-by-an-installation)
* 参考文章
  + [GitHub Actions 入门教程 - 阮一峰](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html)

## Vue项目推荐

* [vuepress-theme-resume](https://github.com/wannaxiao/vuepress-theme-resume)  🐈 书写简洁优雅的前端程序员 markdown 简历，由 vuepress 驱动

## 开源项目推荐

 [GitHub-Chinese-Top-Charts](https://github.com/kon9chunkit/GitHub-Chinese-Top-Charts) 

> 🇨🇳 GitHub中文排行榜，帮助你发现高分优秀中文项目、更高效地吸收国人的优秀经验成果；榜单每周更新一次，敬请关注！（武汉加油！中国加油！世界加油！）
