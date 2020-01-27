const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const {createReadStream} = require('fs');
const path = require('path');
const mime = require('mime');
const crypto = require('crypto');

class Server {
  async handleRequest (req, res) {
    // console.log(this);
    let {pathname} = url.parse(req.url, true);
    let absPath = path.join(__dirname, pathname);
    try {
      let statObj = await fs.stat(absPath);
      console.log(statObj);
      if (statObj.isDirectory()) {
        absPath = path.join(absPath, 'index.html');
        await fs.access(absPath);
      } else {
        this.sendFile(req, res, absPath, statObj);
      }
    } catch (error) {
      console.log(error);
      this.sendError(req, res);
    }
  }

  start () {
    const server = http.createServer(this.handleRequest.bind(this));
    server.listen(...arguments);
  }

  async sendFile (req, res, pathname, statObj) {
    // 连续访问，做缓存
    // 1. 强制缓存  只对当前文件引用的资源生效
    res.setHeader('Expires', new Date(Date.now() + 10000).toGMTString()); // 10s 内访问相同资源不请求服务器
    res.setHeader('Catch-Control', 'max-age=10'); // 10s 内访问相同资源不请求服务器

    // res.setHeader('Catch-Control', 'no-cache'); // 每次都向服务端发起请求
    // res.setHeader('Catch-Control', 'no-store'); // 不缓存

    // 2. 协商缓存
    // Last-Modified / if-modified-since
    // let lastModified = statObj.ctime.toGMTString();
    // let ifModifiedSince = req.headers['if-modified-since'];
    // res.setHeader('Last-Modified', lastModified); // 最后的修改时间

    // if (ifModifiedSince === lastModified) { // 以秒为单位不够准确，还有可能时间变了，文件没变
    //   res.statusCode = 304;
    //   res.end();
    //   return;
    // }

    // E-tag / If-None-Match
    let data = await fs.readFile(absPath);
    let Etag = crypto.createHash('md5').update(data).digest('base64'); // 一个文件的指纹
    res.setHeader('Etag', Etag); // 最后的修改时间
    let ifNoneMatch = req.headers['if-none-match'];
    if (ifNoneMatch === Etag) {
      res.statusCode = 304;
      res.end();
    }

    res.setHeader('Content-Type', mime.getType(pathname)+';charset=utf8');
    createReadStream(pathname).pipe(res);
  }

  sendError (req, res) {
    res.statusCode = 404;
    res.end('Not Found');
  }
}

let server = new Server();
server.start(3000, function () {
  console.log('server start 3000');
});