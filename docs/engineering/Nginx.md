---
sidebar: auto
---

# Nginx

## 1. 安装

```bash
# HomeBrew 快捷安装
brew install nginx

# 编译安装
...
```

## 2. 常用命令

```bash
sudo nginx           # 启动（管理员）
sudo nginx -s stop   # 关闭（管理员）
sudo nginx -s reload # 重启（管理员）
```

## 3. location

location 路径映射路径

```text
=      进行普通字符精确匹配。也就是完全匹配。
^~     前缀匹配。如果匹配成功，则不再匹配其他location。
~      表示执行一个正则匹配，区分大小写
~*     表示执行一个正则匹配，不区分大小写
/xxx/  常规字符串路径匹配
/      通用匹配，任何请求都会匹配到
```

location 优先级从高到底:

```text
= > /a/b/c >  ^~ path >  ~,~* path > /a/b > /
```

example:

```text
location = / {
    # 精确匹配/，主机名后面不能带任何字符串 /
    [ configuration A ]
}
location / {
    # 匹配所有以 / 开头的请求。
    # 但是如果有更长的同类型的表达式，则选择更长的表达式。
    # 如果有正则表达式可以匹配，则优先匹配正则表达式。
    [ configuration B ]
}
location /documents/ {
    # 匹配所有以 /documents/ 开头的请求，匹配符合以后，还要继续往下搜索。
    # 但是如果有更长的同类型的表达式，则选择更长的表达式。
    # 如果有正则表达式可以匹配，则优先匹配正则表达式。
    [ configuration C ]
}
location ^~ /images/ {
    # 匹配所有以 /images/ 开头的表达式，如果匹配成功，则停止匹配查找，停止搜索。
    # 所以，即便有符合的正则表达式location，也不会被使用
    [ configuration D ]
}

location ~* \.(gif|jpg|jpeg)$ {
    # 匹配所有以 gif jpg jpeg结尾的请求。
    # 但是 以 /images/开头的请求，将使用 Configuration D，D具有更高的优先级
    [ configuration E ]
}

location /images/ {
    # 字符匹配到 /images/，还会继续往下搜索
    [ configuration F ]
}

location = /test.htm {
    root   /usr/local/var/www/htm;
    index  index.htm;
}
```

## 4. 内置变量

```bash
$args : 这个变量等于请求行中的参数，同$query_string
$content_length : 请求头中的Content-length字段。
$content_type : 请求头中的Content-Type字段。
$document_root : 当前请求在root指令中指定的值。
$host : 请求主机头字段，否则为服务器名称。
$http_user_agent : 客户端agent信息
$http_cookie : 客户端cookie信息
$limit_rate : 这个变量可以限制连接速率。
$request_method : 客户端请求的动作，通常为GET或POST。
$remote_addr : 客户端的IP地址。
$remote_port : 客户端的端口。
$remote_user : 已经经过Auth Basic Module验证的用户名。
$request_filename : 当前请求的文件路径，由root或alias指令与URI请求生成。
$scheme : HTTP方法（如http，https）。
$server_protocol : 请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
$server_addr : 服务器地址，在完成一次系统调用后可以确定这个值。
$server_name : 服务器名称。
$server_port : 请求到达服务器的端口号。
$request_uri : 包含请求参数的原始URI，不包含主机名，如: ”/foo/bar.php?arg=baz”。
$uri : 不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。
$document_uri : 与$uri相同
```

## 5. rewrite

> 重写链接

`rewrite regex replacement [flag];`

flag

- last：停止处理当前的 ngx_http_rewrite_module 的指令集，并开始搜索与更改后的 URI 相匹配的 location;
- break：停止处理当前的 ngx_http_rewrite_module 指令集，就像上面说的 break 指令一样;
- redirect：返回 302 临时重定向。
- permanent：返回 301 永久重定向。

**example:**

```nginx
rewrite ^/recommend/campus$ $scheme://nowpick.nowcoder.com/w/recommend/campus redirect ;
rewrite ^/school/schedule/(\d+)$ https://nowpick.nowcoder.com/w/school/schedule/$1 redirect ;
rewrite ^/activity/v2/special-activity/index/(\w+)$ $scheme://www.nowcoder.com/jobs/activity/v2/special-activity/index/$1 redirect ;
```

---

TODO

- 转发与重定向之间的区别
