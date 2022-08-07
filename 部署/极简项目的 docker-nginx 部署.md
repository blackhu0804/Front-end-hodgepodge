# 极简项目的 docker-nginx 部署

对于仅仅提供给静态资源服务的前端，实际上是不必将 node 做为运行环境的。
在实际生产经验中，一般选择体积更小，性能更好，基于 nginx 镜像。

通过 `docker images` 查看镜像体积，发现 `node:alpine` 体积是`nginx:alpine` 的数倍。

```bash
$ docker images nginx
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
nginx        alpine    b46db85084b8   6 months ago   23.2MB

$ docker images node
REPOSITORY   TAG         IMAGE ID       CREATED        SIZE
node         alpine      025c3cbb849f   4 months ago   169MB
```

## nginx 镜像

通过以下的命令，可以进入到 `nginx` 的环境中，并且了解 `nginx` 的目录配置。

```bash
$ docker run -it --rm nginx:alpine sh

# 通过以下一行命令可直接访问 nginx 的默认页面
# -p 3000:80，在本地 3000 端口访问 nginx 页面
$ docker run -it --rm -p 3000:80 nginx:alpine
```

## 构建镜像、运行容器

写一个 `Dockerfile` 将我们的示例项目跑起来，仅仅需要两行代码，由于 `nginx` 镜像会默认将 80 端口暴露出来。所以无需再暴露端口。

```Dockerfile
FROM nginx:alpine

ADD index.html /usr/share/nginx/html/
```

继续完成`docker-compose.yaml`，并创建容器。

```yaml
version: "3"
services:
  nginx:
    build: .
    ports:
      - 4000:80
```

执行 `docker compose up --build` 。此时，访问`http://localhost:4000/` 即可访问成功。在控制台查看响应头，可发现有 `Server: nginx/1.21.4` 。

## 作业

### 1. 基于 nginx 镜像将极简前端项目进行部署

### 2. 我们的基础镜像 tag 总是携带 alpine，它是什么

`alpine docker` 镜像基础了`alpine linux` 的优势，相比于其他 `Docker` 镜像，它的容量非常小，相比于其他`Docker`镜像，它的容量非常小，仅仅只有5MB左右，且拥有非常友好的包管理机制。

[可参考](https://yeasy.gitbook.io/docker_practice/os/alpine)