---
sidebar: auto
---

# NVM

## 1. 安装

- win10 下安装

下载地址：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

百度网盘地址: 链接：https://pan.baidu.com/s/1q8ogEnJv59k6LSLPOp1ngw 提取码：8nuh

![nvm](/img/nvm1.png)

> nvm-noinstall.zip： 绿色免安装版本，但是使用之前需要配置
>
> **nvm-setup.zip**：安装包，下载之后点击安装，无需配置就可以使用，方便。
>
> Source code(zip)：zip 压缩的源码
>
> Sourc code(tar.gz)：tar.gz 的源码，一般用于\*nix 系统

默认安装即可（别问可不可以自定义 问就是闭眼下一步）

验证安装是否成功，运行 `nvm -v` ，出现版本信息

- Linux

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

## 2. 解决 NVM 源问题

默认 nvm 是国外的源，下载基本上是下载不下来的！！！在 `./bash_profile` 中添加一下配置信息

```BASH
# BASH
########### nvm #############
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# 淘宝源
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node/
export NVM_IOJS_ORG_MIRROR=https://npmmirror.com/mirrors/iojs/
########### nvm #############
```

执行 `source ./bash_profile` ，重新加载配置


## 3. 常用命令

下面命令以 node 10 版本为例

```shell
nvm -v # 查看当前NVM版本

nvm ls # 查找本电脑上所有的node版本

nvm install v10.19.0 # 安装指定版本
nvm uninstall v10.19.0 # 卸载指定版本

nvm use v10.19.0 # 切换使用指定的版本node
```
