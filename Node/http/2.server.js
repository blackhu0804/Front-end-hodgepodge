const http = require('http');
const url = require('url');
const fs = require('fs').promises;
const {createReadStream} = require('fs');
const path = require('path');
const mime = require('mime');

class Server {
  async handleRequest (req, res) {
    // console.log(this);
    let {pathname} = url.parse(req.url, true);
    let absPath = path.join(__dirname, pathname);
    console.log(absPath);
    try {
      let statObj = await fs.stat(absPath);
      console.log(statObj);
      if (statObj.isDirectory()) {
        absPath = path.join(absPath, 'index.html');
        await fs.access(absPath);
      } else {
        this.sendFile(req, res, absPath);
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

  sendFile (req, res, pathname) {
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