---
title: Docker安装并配置Nginx
date: 2021-11-14 23:10:08
tags: 
 - docker
categories: 
 - linux
contact: linux/docker
---

## 在Docker下载Nginx镜像

```shell
docker pull nginx:latest
```

## 创建挂载目录

先在主机创建工作文件夹，为了挂载配置和静态文件的访问使用

```shell
mkdir -p /home/nginx/{conf,conf.d,html,logs}
```



## 编写`nginx.conf`配置文件，并放在文件夹中

```lua

user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}

```

也可以启动nginx容器来复制

```shell
#启动一个容器
docker run -d --name nginx nginx
# 查看 容器 获取容器ID 或直接使用名字
docker container ls
# 拷贝容器内 Nginx 默认配置文件到本地当前(nginx)目录下的 conf 目录（$PWD 当前全路径）
docker cp nginx:/etc/nginx/nginx.conf $PWD/conf
docker cp nginx:/etc/nginx/conf.d $PWD/conf

# 停止容器
docker container stop nginx
 #or
docker stop nginx
# 删除容器
docker container rm nginx
 #or
docker rm nginx
```



## 启动容器

```shell
docker run --restart=always  --privileged=true -d -p 80:80 -p 443:443 --name nginx  -v /home/nginx/html:/usr/share/nginx/html  -v /home/nginx/conf.d:/etc/nginx/conf.d -v /home/nginx/logs:/var/log/nginx  nginx  
```

如果挂载`ngxinx.conf`文件用下面的命令启动，注意，要保证你挂载的目录下有`nginx.conf`文件，否则会报错

```shell
docker run --restart=always  --privileged=true -d -p 80:80 -p 443:443 --name nginx -v /home/nginx/conf/nginx.conf:/etc/nginx/nginx.conf -v /home/nginx/html:/usr/share/nginx/html  -v /home/nginx/conf.d:/etc/nginx/conf.d -v /home/nginx/logs:/var/log/nginx  nginx 
```





## 查看启动的容器

```shell
docker ps 
```

访问80端口查看是否成功，如果能出来页面就成功了