// ISO 七层模型

// 应用层  http、ftp、dns
// 表示层
// 会话层
// 传输层  tcp（安全可靠、不会丢数据）、udp
// 网络层  IP
// 数据链路层
// 物理层


/**
 * http 报文分类
 * 1. 请求行
 * 2. 报文
 * 3. 请求头报文
 * 4. 请求体报文
 * 
 * 服务器收到客户端发来的请求，根据当前的请求信息，返回对应的结果
 * 
 * 请求方法： RESTful
 * GET 获取资源
 * POST 新增资源
 * PUT 修改文件
 * DELETE 删除
 * OPTIONS 跨域请求的时候 非简单请求时出现
 * 
 * 状态码
 * 1xx websocket
 * 2xx 200 成功 204 没有响应体 206 分段传输（range）
 * 3xx 301 永久重定向  302 临时重定向 304 缓存未修改
 * 4xx 300 参数错误 401 没权限  403 没有权限访问 404 未找到 405 方法不允许
 * 5xx 500 服务端错误 502 负载均衡问题
 */


const http = require('http');
const url = require('url');
const queryString = require('querystring');
// 使用http模块 创建请求 接受请求
let server = http.createServer(function (req, res) {
  // 请求到来时执行此方法
  // 单线程 尽量采用异步 不然阻塞进程
  if (req.url === '/') {
    let {
      pathname,
      query
    } = url.parse(req.url);
    let httpVersion = req.httpVersion;
    let method = req.method;
    console.log({
      pathname,
      query
    }, httpVersion, method);
    // 下面请求行相关
    let headers = req.headers;
    console.log(headers);

    let arr = [];
    req.on('data', function (chunk) { // tcp 分段 保证有请求数据 才能获取
      arr.push(chunk);
    });
    req.on('end', function () { // this.push(null)
      console.log(req.headers);
      // 'content-type': 'application/x-www-form-urlencoded' 如果你发的数据 a=1&b=2 表单
      // 'content-type': 'application/json' 
      let content = Buffer.concat(arr).toString(); // a=1&b=2 
      if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        content = querystring.parse(content);
      } else if (req.headers['content-type'] === 'application/json') {
        content = JSON.parse(content);
      }

      res.statusCode = 404;
      res.setHeader('a', '1');
      res.setHeader('Content-Type', 'text/plain;charset=utf-8'); // 实体头
      res.end('结束');
    })
  }

});

// 一个服务器只能有一个对应的使用的端口
let port = 3000;
server.listen(port, function () {
  console.log('server start ' + port);
});

server.on('error', function (error) {
  if (error.errno === 'EADDRINUSE') { // 如果端口号被占用，重新监听新的端口号
    server.listen(++port);
  }
  console.log(error);
});