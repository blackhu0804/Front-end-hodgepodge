console.log('------');
const EventEmitter = require('events');
const http = require('http');
const request = require('./request'); // Koa 自己封装的请求相关的属性和方法
const response = require('./response'); // 响应相关的属性和方法
const context = require('./context'); // 上下文对象
const Stream = require('stream');

// 当前 Application 就是我们 Koa 的类
module.exports = class Application extends EventEmitter {
  constructor () {
    super();
    this.middlewares = [];
    // 创建一个实例， 这个实例指向 request 的原型
    // 让 this.request.__proto__ = 实例
    this.request = Object.create(request);
    this.response = Object.create(response);
    this.context = Object.create(context);
  }

  use (middleware) {
    this.middlewares.push(middleware);
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
   * 组合当前所有的中间件
   */
  compose (ctx) {
    // 异步逻辑迭代
    let index = -1;
    const dispatch = (i) => {
      if (i <= index) return Promise.reject(new Error('next() called multiple times')); // 防止 next 调用多次
      index = i;
      if (i === this.middlewares.length) {
        return Promise.resolve();
      }
      let middleware = this.middlewares[i];
      try {
        return Promise.resolve(middleware(ctx, () => {
          dispatch(i+1); // 相当于 next()
        }));
      } catch (e) {
        return Promise.reject(e);
      }
    }
    return dispatch(0);
  }

  /**
   * 处理请求
   */
  handlueRequest (req, res) {
    let ctx = this.createContext(req, res);
    res.statusCode = 404; // 默认为 404，body 赋值后更新

    // compose
    this.compose(ctx).then(() => {
      let body = ctx.body; // 取到最终的结果响应给客户端
      if (typeof body === 'string' || Buffer.isBuffer(body)) {
        res.end(body);
      } else if (body instanceof Stream) {
        body.pipe(res);
      } else if (typeof body === 'object') {
        res.end(JSON.stringify(body));
      } else if (typeof body === 'number') {
        res.end(body + '');
      } else if (body == null && res.statusCode !== 404) {
        res.end('404');
      } else {
        res.end('Not Found');
      }
    }).catch((e) => {
      this.emit('error', e);
      res.statusCode = 500;
      res.end('Internal server error');
    });
    // this.middleware(ctx); // 这个函数执行完毕后用户默认会给 body 赋值
  }

  listen () {
    let server = http.createServer(this.handlueRequest.bind(this));

    server.listen(...arguments);
  }
}