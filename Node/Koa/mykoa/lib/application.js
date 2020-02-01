console.log('------');
const EventEmitter = require('events');
const http = require('http');
const request = require('./request'); // Koa 自己封装的请求相关的属性和方法
const response = require('./response'); // 响应相关的属性和方法
const context = require('./context'); // 上下文对象
const Stream = require('stream');

// 当前 Application 就是我们 Koa 的类
module.exports = class Application extends EventEmitter {
  use (middleware) {
    this.middleware = middleware;
    // 创建一个实例， 这个实例指向 request 的原型
    // 让 this.request.__proto__ = 实例
    this.request = Object.create(request);
    this.response = Object.create(response);
    this.context = Object.create(context);
  }

  /**
   * 将req，res 转化为 ctx
   */
  createContext (req, res) {
    // 创建上下文关系，需要保证每一次请求都是独立的
    this.request = Object.create(request);
    this.response = Object.create(response);
    this.context = Object.create(context);

    context.request = request;
    context.response = response;
    context.res = response.res = res;
    context.req = request.req = req;
    return context;
  }

  /**
   * 处理请求
   */
  handlueRequest (req, res) {
    let ctx = this.createContext(req, res);
    res.statusCode = 404; // 默认为 404，body 赋值后更新
    this.middleware(ctx); // 这个函数执行完毕后用户默认会给 body 赋值

    let body = ctx.body; // 取到最终的结果响应给客户端
    if (typeof body === 'string' || Buffer.isBuffer(body)) {
      res.end(body);
    } else if (body instanceof Stream) {
      body.pipe(res);
    } else if (typeof body === 'object') {
      res.end(JSON.stringify(body));
    } else if (typeof body === 'number') {
      res.end(body + '');
    } else if (body == null) {
      res.end('404');
    } else {
      res.end('Not Found');
    }
  }

  listen () {
    let server = http.createServer(this.handlueRequest.bind(this));

    server.listen(...arguments);
  }
}