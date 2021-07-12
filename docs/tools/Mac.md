---
sidebar: auto
---

# Mac 相关工具

::: tip 目录：
[[toc]]

:::

## APP

* [ Markdown 编辑器 ]  [Typora](https://www.typora.io/) 
* [ 视频播放器 ] IINA 
* [ 鼠标滚轮平滑滚动 ] Mos 
* [ 终端工具 ] iTerm + zsh 
- [ PDF 编辑器 ] PDF Expert 
- [ Web 浏览器 ] Chrome | Firefox | Edge
- [ 抓包工具 ] Charles 
- [ 代码编辑器 ] Visual Studio Code | Sublime Text 
- [ 截图工具 ] Xnip 
- [ 风扇控制 ] Macs Fan Control 
- [ 翻译 ] DeepL 
- [ 压缩软件 ] MacZip 
- [ 虚拟机 ] VMware Fusion 
- [ 脑图 ] Xmind 

## Yarn 

> 压缩包安装 ↓

1、下载：https://github.com/yarnpkg/yarn/releases 中 yarn-v1.22.10.tar.gz

2、配置环境变量：export PATH="$PATH:/Users/nowcoder/app/yarn/bin/"

## HomeBrew

> 踩坑：推荐中科院的源

1、安装地址：[https://zhuanlan.zhihu.com/p/111014448](https://zhuanlan.zhihu.com/p/111014448)

2、换源地址：[https://www.zhihu.com/question/31360766/answer/749386652](https://www.zhihu.com/question/31360766/answer/749386652)

```shell
# 替换 Homebrew
git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git

# 替换 Homebrew Core
git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

# 替换 Homebrew Cask
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

# 替换 Homebrew-bottles
# 对于 bash 用户：
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile

# 对于 zsh 用户：
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

## Nginx

install:  brew install nginx

nginx 路径:  /usr/local/etc/nginx/

```shell
sudo nginx             # 启动
sudo nginx -s reload   # 重启
sudo nginx -s stop     # 结束
```

---
