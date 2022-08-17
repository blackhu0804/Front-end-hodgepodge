# 静态资源上传 OSS

## PUBLIC_PATH 与 webpack 的处理

假设将带有 hash 值的静态资源推至 CDN 中，此时静态资源的地址为: https://cdn.xxxx。而它即是我们将要在 webpack 中配置的 config.output.publicPath。

```Javascript
module.exports = {
  output: {
    publicPath: 'https://cdn.xxxx'
  }
}
```

在 `cra` 项目中，我们可以通过以下方式配置：

```Javascript
export PUBLIC_PATH='https://cdn.xxxx'
```

## OSS 云服务之前的准备

### AccessKey

- aliyun_access_key_id
- aliyun_access_key_secret

在将静态资源上传至云服务时，我们需要 AccessKey/AccessSecret 获得权限用以上传。

### Bucket

`Bucket` 是 OSS 的存储空间。对于生产环境，可以对每一个项目创建单独的 Bucket。

在创建 Bucket 时，需要注意：
1. 权限设置为公共读
2. 跨域配置 CORS
3. 记住 Endpoint，将会在配置 PUBLIC_URL 中使用到。

### PUBLIC_URL

最终的 PUBLIC_URL 为 `$Bucket.$Endpoint`。比如:`http://deploy-demo-test.oss-cn-beijing.aliyuncs.com`