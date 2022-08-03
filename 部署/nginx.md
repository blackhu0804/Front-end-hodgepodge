# nginx 基础

## 1. nginx 的配置文件

可以通过 `nginx` 镜像来了解 `nginx` 的配置文件都有哪些。

```bash
# 使用 docker 运行 nginx 镜像并进入
$ docker run -it --rm nginx:alpine sh

$ ls -lah /etc/nginx/
total 40K
drwxr-xr-x    3 root     root        4.0K Jun 22 19:20 .
drwxr-xr-x    1 root     root        4.0K Jul 28 16:04 ..
drwxr-xr-x    2 root     root        4.0K Jun 22 19:20 conf.d
-rw-r--r--    1 root     root        1.1K Jun 21 17:06 fastcgi.conf
-rw-r--r--    1 root     root        1007 Jun 21 17:06 fastcgi_params
-rw-r--r--    1 root     root        5.2K Jun 21 17:06 mime.types
lrwxrwxrwx    1 root     root          22 Jun 22 19:20 modules -> /usr/lib/nginx/modules
-rw-r--r--    1 root     root         648 Jun 21 17:06 nginx.conf
-rw-r--r--    1 root     root         636 Jun 21 17:06 scgi_params
-rw-r--r--    1 root     root         664 Jun 21 17:06 uwsgi_params
```

在 `nginx` 中，其中比较重要的配置文件有：
- `/etc/nginx/nginx.conf`
- `/etc/nginx/conf.d/default.conf`

### /etc/nginx/nginx.conf

`nginx` 的主配置文件，其中包含了 `nginx` 的各种配置。引用了 `/etc/nginx/conf.d/` 目录下的所有配置文件。

```bash
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

### /etc/nginx/conf.d/default.conf

```bash
server {
    listen       80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

### /usr/share/nginx/html
  
  `/usr/share/nginx/html` 目录下的文件是 `nginx` 的默认静态文件目录。存放 nginx 的欢迎页面。

```html
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
```

## 通过 docker 高效学习 nginx 配置

可以通过 在本地使用 nginx 镜像并挂载 nginx 配置启动容器进行验证。

通过以下的 `docker-compose` 可秒级验证 nginx 配置，下面的每一份配置对应 `docker-compose` 中的一个 service，如 `nginx`、`location`、`order1` 就是 `service`。

```yaml
version: "3"
services: 
  # 关于 nginx 最常见配置的学习
  nginx:
    image: nginx:alpine
    ports:
      - 8080:80
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
      - .:/usr/share/nginx/html
  # 关于 location 的学习
  location: ...
  # 关于 location 匹配顺序的学习
  order1: ...
```

每次修改配置文件后，可以通过 `docker-compose up -d` 命令来重新启动容器，可根据服务吗学习指定内容。

```bash
$ docker-compose up <service>

# 学习 nginx 最基础的配置
$ docker-compose up nginx

# 学习关于 location 的配置
$ docker-compose up location
```

## root 与 index

- `root`: 静态资源根路径。[参考](https://nginx.org/en/docs/http/ngx_http_core_module.html#root)
- `index`: 当请求路径以 `/` 结尾时，则自动寻找改路径下的 `index` 文件。[参考](https://nginx.org/en/docs/http/ngx_http_index_module.html#index) 

`root` 与 `index` 为前端部署的基础，在默认情况下 root 为 `/usr/share/nginx/html`， 因此我们部署前端时，往往将构建后的静态目录挂载到该地址。
  
```bash
server {
  listen 80;
  server_name localhost;

  root /usr/share/nginx/html;
  index index.html index.htm;
}  
```

## location

location 用来匹配路由，配置语法如下：

```bash
location [ = | ~ | ~* | ^~ ] uri { ... }
```

其中 `uri` 前可提供以下修饰符。
- `=` 匹配精确的 uri，如 `/`、`/index.html`。优先级最高
- `^~` 前缀匹配，匹配 uri 开头的字符串，如 `/index.html` 匹配 `/`。优先级次之
- `~` 正则匹配，优先级再次（~* 只是不区分大小写，不单列）。如果同样是正则匹配，走第一个路径
- `/` 通用匹配，匹配任意字符串，如 `/index.html` 匹配 `/`、`/index.html`、`/index.html/`。优先级最低

为了验证所匹配的 location，可以添加一个自定义响应头`X-Config` ，可通过浏览器控制台网络面板验证其响应头。
  
```bash
add_header X-Config B;
```

### location 修饰符验证

验证 `location` 的配置文件。
  
```conf
server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    # 通用匹配，所有 /xxx 任意路径都会匹配其中的规则
    location / {
        add_header X-Config A;
        try_files  $uri $uri.html $uri/index.html /index.html;
    }

    # http://localhost:8120/test1           ok
    # http://localhost:8120/test1/          ok
    # http://localhost:8120/test18          ok
    # http://localhost:8120/test28          not ok
    location /test1 {
        # 可通过查看响应头来判断是否成功返回
        add_header X-Config B;
        proxy_pass http://api:3000;
    }

    # http://localhost:8120/test2           ok
    # http://localhost:8120/test2/          not ok
    # http://localhost:8120/test28          not ok
    location = /test2 {
        add_header X-Config C;
        proxy_pass http://api:3000;
    }

    # http://localhost:8120/test3           ok
    # http://localhost:8120/test3/          ok
    # http://localhost:8120/test38          ok
    # http://localhost:8120/hellotest3      ok
    location ~ .*test3.* {
        add_header X-Config D;
        proxy_pass http://api:3000;
    }

    # http://localhost:8120/test4           ok
    # http://localhost:8120/test4/          ok
    # http://localhost:8120/test48          ok
    # http://localhost:8120/test28          not ok
    location ^~ /test4 {
        # 可通过查看响应头来判断是否成功返回
        add_header X-Config E;
        proxy_pass http://api:3000;
    }
}
```

### location 优先级验证

比如：
  
```conf
# 以下配置，访问以下链接，其 X-Config 为多少
#
# http://localhost:8210/blackhu，为 B，若都是前缀匹配，则找到最长匹配的 location

server {
    root   /usr/share/nginx/html;

    # 主要是为了 shanyue 该路径，因为没有后缀名，无法确认其 content-type，会自动下载
    # 因此这里采用 text/plain，则不会自动下载
    default_type text/plain;

    location ^~ /black {
        add_header X-Config A;
    }

    location ^~ /blackhu {
        add_header X-Config B;
    }
}
```
 
## proxy_pass
`proxy_pass` 反向代理，也是 `nginx` 最重要的内容，也是常用的解决跨域的方法。当使用 `proxy_pass` 代理路径时，有两种情况。
1. 代理服务器地址不含 URI，则此时客户端请求路径与代理服务器路径相同。**建议这种方式**
2. 代理服务器地址含 URI，则此时客户端请求路径匹配 `location`，并将 `location` 后的路径附在代理服务器地址后。

```bash
# 不含 uri
proxy_pass http://api:3000;
```

```bash
# 含 uri
proxy_pass http://api:3000/;
proxy_pass http://api:3000/test1;
proxy_pass http://api:3000/test/;
```

举例：
```conf
server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    # 建议使用此种 proxy_pass 不加 URI 的写法，原样路径即可
    # http://localhost:8300/api1/hello -> proxy:3000/api1/hello
    location /api1 {
        # 可通过查看响应头来判断是否成功返回
        add_header X-Config A;
        proxy_pass http://api:3000;
    }

    # http://localhost:8300/api2/hello -> proxy:3000/hello
    location /api2/ {
        add_header X-Config B;
        proxy_pass http://api:3000/;
    }

    # http://localhost:8300/api3/hello -> proxy:3000/hello/hello
    location /api3 {
        add_header X-Config C;
        proxy_pass http://api:3000/hello;
    }

    # http://localhost:8300/api4/hello -> proxy:3000//hello
    location /api4 {
        add_header X-Config D;
        proxy_pass http://api:3000/;
    }
}
```

## add_header
`add_header` 指定响应头，可以指定多个响应头，每个响应头之间用空格隔开。比如：
1. Cache
2. CORS
3. HSTS
4. CSP
5. ...

### Cache

```conf
location /static {
    add_header Cache-Control "max-age=31536000";
}
```

### CORS

```conf
location /api {
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
    add_header Access-Control-Allow-Headers "Origin, X-Requested-With, Content-Type, Accept";
}
```

### HSTS

```conf
location / {
    listen 443 ssl;

    add_header Strict-Transport-Security max-age=7200;
}
```

### CSP

```conf
location / {
    add_header Content-Security-Policy "default-src 'self';";
}
```


## 作业

### 1. 基于 docker 学习 nginx 配置，并可配置 index.html 强缓存 60s 时间

新建`cache.conf` 文件。
```conf
# 强缓存
server {
    listen       80;
    server_name  localhost;
    root         /usr/share/nginx/html;
    index        index.html index.htm;
    location / {
        add_header Cache-Control "max-age=60";
    }
}
```

`docker-compose.yaml` 里添加
```yaml
version: "3"
services:
  cache:
    image: nginx:alpine
    ports:
      - 8600:80
    volumes:
      - ./cache.conf:/etc/nginx/conf.d/default.conf
      - .:/usr/share/nginx/html
```

执行 `docker compose up cache`。访问`localhost:8600`，可以看到返回响应头 `Cache-Control: max-age=60`。

### 2. 如何使用 nginx 与 whoami 镜像，模拟 502/504
**参考：**

```conf
# 由于此处使用了proxy_pass，因此需要启动两个服务
#
# $ docker-compose up 50x api
#
# 由于 proxy_pass 所代理的服务为 whoami，可打印出真实请求路径，可根据此进行测试

server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    location /api {
        proxy_pass http://api:3000;
    }

    location /502 {
        # 可通过查看响应头来判断是否成功返回
        add_header X-Config A;
        proxy_pass http://localhost:9999;
    }

    location /504 {
        proxy_read_timeout 10s;
        proxy_send_timeout 10s;
        proxy_pass http://api:3000/?wait=3000000;
    }
}
```

### 3. 基于 docker 学习 nginx 配置，并可配置 gzip/brotli 压缩

#### gzip
```conf
# gzip 
server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    location / {
        gzip on;
    }
}
```

#### brotli
```conf
# brotli
server {
    listen       80;
    server_name  localhost;

    root   /usr/share/nginx/html;
    index  index.html index.htm;

    location / {
        brotli on;
    }
}
```

### 4. brotli/gzip 有何区别

- gzip 专为压缩文件设计，而不是专门为网络服务器等流操作而设计的，现在被合并到 Web 服务器中，也成为了 HTTPS 1.1 规范中指定的两种压缩算法之一。
- brotli 专为 web 数据设计，对于 web 网络流数据的压缩效率更高。

根据某些文章的比较：
- Javascript 文件用 Brotli 压缩可以比 gzip 的小14%。
- HTML 文件会小21%。
- CSS 文件会小17%
