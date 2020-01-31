console.log('------');
const EventEmitter = require('events');
const http = require('http');
const request = require('./request'); // Koa 自己封装的请求相关的属性和方法
const response = require('./response'); // 响应相关的属性和方法
const context = require('./context'); // 上下文对象

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
    context.req = request.req = req;
    return context;
  }

  /**
   * 处理请求
   */
  handlueRequest (req, res) {
    let ctx = this.createContext(req, res);
    this.middleware(ctx);
  }

  listen () {
    let server = http.createServer(this.handlueRequest.bind(this));

    server.listen(...arguments);
  }
}