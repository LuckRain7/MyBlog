---
sidebar: auto
---

# Bash

## 1. 定义解释器

```bash
#!/bin/bash
#!/usr/bin/env bash
#!/usr/bin/env node
```

## 2. 定义变量

```bash
env=develop
env="Hello World"
```

## 3. 条件判断

```bash
if [ $a == $b ]
    then
        echo "a 等于 b"
 elif [ $a -gt $b ]
    then
        echo "a 大于 b"
 elif [ $a -lt $b ]
    then
        echo "a 小于 b"
 else
    echo "没有符合的条件"

 fi
```

判断条件

- [字符串判断条件](https://wangdoc.com/bash/condition.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%A4%E6%96%AD)
- [文件判断](https://wangdoc.com/bash/condition.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%A4%E6%96%AD)
- [正数判断](https://wangdoc.com/bash/condition.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%A4%E6%96%AD)
- [正则判断](https://wangdoc.com/bash/condition.html#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%88%A4%E6%96%AD)

## 4. 循环

```bash
# for循环
for index in 1 2 3 4 5; do
    echo "index="$index
done

# for循环
for ((i=0; i<5; i++)); do
    echo "i="$i
done

# while循环
int=1
while(( $int<=5 ))
do
    echo $int
    let "int++"
done
```
