const mappings = {
  "a.black111.cn": "http://localhost:3000",
  "b.black111.cn": "http://localhost:4000"
};
const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});

http
  .createServer((req, res) => {
    let host = req.headers.host;
    proxy.web(req, res, {
      target: mappings[host],
      selfHandleResponse: true
    });

    proxy.on("proxyRes", function(proxyRes, req, res) {
      let body = []; // 监听代理服务器返回的结果
      proxyRes.on("data", function(chunk) {
        body.push(chunk);
      });
      proxyRes.on("end", function() {
        body = Buffer.concat(body).toString();
        // 讲结果进行包装返回
        res.end("my response to cli" + body);
      });
    });
  })
  .listen(8080);
