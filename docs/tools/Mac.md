---
sidebar: auto
---

# Mac 相关工具

::: tip 目录：
[[toc]]

:::

## 1. APP

- [ 视频播放器 ] IINA
- [ 鼠标滚轮平滑滚动 ] Mos
- [ 终端工具 ] iTerm + zsh | Alacritty + Fish + Tmux
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
- [ 更好用的 command + tab ][contexts](https://contexts.co/)
- [ Homebrew 可视化工具 ][cakebrew](https://www.cakebrew.com/)
- [ 系统清理 ][腾讯柠檬](https://lemon.qq.com/lab/)
- [Postman - 接口请求](https://www.postman.com/)
- [TotalFinder - Finder 增强，多标签页管理 Finder](https://totalfinder.binaryage.com/)
- [Sequel Pro - MySQL 数据库连接软件](https://www.sequelpro.com/)
- Fig - 命令行提示工具
- [typora - Markdown 编辑器](https://www.typora.io/) [主题风格](https://github.com/liangjingkanji/DrakeTyporaTheme)

## 2. Yarn

> 压缩包安装 ↓

1、下载：https://github.com/yarnpkg/yarn/releases 中 yarn-v1.22.10.tar.gz

2、配置环境变量：export PATH="\$PATH:/Users/nowcoder/app/yarn/bin/"

## 3. HomeBrew

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

## 4. Nginx

install: brew install nginx

nginx 路径: /usr/local/etc/nginx/

```shell
sudo nginx             # 启动
sudo nginx -s reload   # 重启
sudo nginx -s stop     # 结束
```

## 5. 终端配置

**tree**

> 命令行打印目录树

```shell
# 安装
brew install tree

# 使用
# 我们要在目录遍历时使用 -L 参数指定遍历层级
tree -L 2 # 遍历两级目录
```

**autojump**

> 快捷目录跳转

```shell
# 安装
brew install autojump

# 在 .zshrc 中添加插件
vim ~/.zshrc #

# 找到 plugins 并添加 autojump 插件
plugins = ( git autojump )

# 重启 zsh
source ~/.zshrc
```

**zsh-syntax-highlighting**

> 命令行高亮

```shell
# 进入插件目录
cd ~/.oh-my-zsh/custom/plugins/

# 下载插件
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git

# 找到 plugins 并添加 zsh-syntax-highlighting 插件
plugins = ( git autojump zsh-syntax-highlighting )

# 重启 zsh
source ~/.zshrc
```

**zsh-autosuggestions**

> 命令记忆提示

```shell
# 进入插件目录
cd ~/.oh-my-zsh/custom/plugins/

# 下载插件
git clone https://github.com/zsh-users/zsh-autosuggestions

# 找到 plugins 并添加 zsh-autosuggestions 插件
plugins = ( git autojump zsh-syntax-highlighting zsh-autosuggestions )

# 重启 zsh
source ~/.zshrc
```

---

## 6. Chrome 插件

- octotree GitHub 目录插件 [GitHub](https://github.com/ovity/octotree) | [官网 GitHub code tree](https://www.octotree.io/)
- 沙拉查词-聚合词典划词翻译
- Vue.js devtools
- AdBlock — 最佳广告拦截工具
- Infinity 新标签页 (Pro)
- Tampermonkey 脚本

## 7. 修改启动台图标排布

```shell
defaults write com.apple.dock springboard-rows -int 7
defaults write com.apple.dock springboard-columns -int 6
defaults write com.apple.dock ResetLaunchPad -bool TRUE;killall Dock
```

## 8. 命令行

```shell
sudo lsof -i :9000  # 查看端口号进程
sudo kill -9 PID    # 杀掉对应PID的进程
```
