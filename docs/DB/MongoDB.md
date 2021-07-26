# MongoDB

> 一下系统环境为 Mac 

## 下载

由于 MongoDB 修改了自己的开源协议，Homebrew 不在提供，只能去[官网](https://www.mongodb.com/try/download/community?jmp=nav)下载。

## 安装


```shell
# 打开 bash_profile 文件
vi ~/. bash_profile

# 添加环境变量(路径可以随意设置)
export PATH="/Users/***/APP/mongodb-4.4.7/bin:$PATH"

# 重载 bash_profile
source ~/.bash_profile 

# 测试是否安装成功
mongod --version
```

## 启动

在 MongoDB 目录中新建 data 和 log 文件夹、mongo.conf

mongo.conf 文件内添加以下配置内容

```
# mongod.conf
# https://docs.mongodb.com/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: /Users/***/APP/mongodb-4.4.7/data
  journal:
    enabled: true
  directoryPerDB: true

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: /Users/***/APP/mongodb-4.4.7/log/systemLog.log
  traceAllExceptions: true # Print verbose information for debugging

# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1
```

配置 zsh 别名，方便启动

```shell
# 开启编辑
vi ~/.bash_profile

# 添加下面内容
alias mongo_start="sudo mongod -f /Users/***/APP/mongodb-4.4.7/mongo.conf"

# 重载
source ~/.bash_profile
```

启动

```shell
mongo_start # 启动
```


```shell
# 新终端标签页
mongo # 开启 MongoDB 链接

# 测试
show dbs # 会显示 admin config local
```

## 数据库常用命令

```shell
show dbs     # 查询所有数据库
use db_name  # 切换/创建数据库

db.createCollection("col_name")        # 创建集合
db.col_name.insert({"test":"测试一下"}) # 插入数据

show collections    # 列出所有 collections
show tables         # 列出所有 tables

db.createCollection("test",{size:20,capped:5,max:100}) # 插入一条数据
```

## 报错

> `Access control is not enabled for the database. Read and write access to data and configuration is unrestricted`

创建管理员并设置密码

```shell
use rain
db.createUser(
  {
    user: "rain", //用户名
    pwd: "xxxx", //密码
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] //设置权限
  }
)
```

