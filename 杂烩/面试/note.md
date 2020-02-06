## 一.简答题
### 1.js垃圾回收机制
- js是自动内存管理，内存限制64位约1.4g 32位约0.7g ,
- 指代的是新生代和老生代的总大小,64位系统新生代大小为32M,老生代为1400M
- 新生代主要使用Scavenge进行管理,新生代分为from和to两个空间,开始回收的时候会检查from中的存活对象,如果存活拷贝到To中，之后互换。
- 老生代主要采用Mark-Sweep(标记清除，可能会导致内存碎片的问题)和Mark-Compact(标记整理，将活着的对象移动到左侧，速度慢)

### 2.函数节流和函数防抖 (lodash)

都为解决高频事件而来， scroll mousewhell mousemover touchmove onresize
- 防抖
```javascript
function debounce(fn,delay) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,...arguments);
        }, delay);
    }
}
body.onscroll = debounce(function () {
    console.log('scroll')
},1000);
```
- 节流
```javascript
function throttle(fn,delay) {
    let lastTime = 0;
    return function () {
        let nowTime = Date.now();
        if(nowTime - lastTime > delay){
            fn.call(this,...arguments);
            lastTime = nowTime
        }
    }
}
body.onscroll = throttle(function () {
    console.log('scroll')
},1000);
```

### 3.new new
```javascript
function A(){
    return function (){
        this.a = 'a';
        this.b = 'b';
    }
}
let instance = new new A();
```

### 4.Promise.resolve
```javascript
const p =Promise.resolve();
;(()=>{
    const implicit_promise = new Promise(resolve =>{
        const promise = new Promise(res=>res(p)); 
        promise.then(()=>{
            console.log('after:await');
            resolve()
        })
    });
    return implicit_promise
})();
p.then(()=>{ 
    console.log('tick:a');
}).then(()=>{
    console.log('tick:b');
}).then(()=>{
    console.log('tick:c');
});
```

### 5.async + await问题
```javascript
setTimeout(function () {
    console.log('setTimeout')
}, 0)
async function asyncFunc1 () {
    console.log('asyncFunc1 start')
    await asyncFunc2()
    console.log('asyncFunc1 end')
}
async function asyncFunc2 () {
    console.log('asyncFunc2')
}
console.log('script start')
asyncFunc1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')
```


### 1.在浏览器地址栏输入URL,按下回车后究竟发生了什么?
- 1). 浏览器通过DNS将url地址解析为ip (如果有缓存直接返回缓存,否则递归解析)
- 2). 通过DNS解析得到了目标服务器的IP地址后，与服务器建立TCP连接。
  - ip协议： 选择传输路线,负责找到
  - tcp协议： 三次握手，分片，可靠传输，重新发送的机制
- 3).浏览器通过http协议发送请求 (增加http的报文信息) 头 体 行
- 4).服务器接受请求后，查库，读文件，拼接好返回的http响应
- 5).浏览器收到html，开始渲染
- 6).解析html为dom，解析css为css-tree,最终生成render-tree 阻塞渲染
- 7).遍历渲染树开始布局，计算每个节点的位置大小信息
- 8).将渲染树每个节点绘制到屏幕
- 9).加载js文件,运行js脚本
- 10).reflow (样式)与repaint(位置)

![](http://img.zhufengpeixun.cn/domrender.jpg)

### 2.常见的优化
- 缓存
  - HTTP中缓存 强制缓存和对比缓存的应用(304) memory disk
  - service worker 和 cache api (离线缓存 HTTPS) pwa
  - Push Cache 推送缓存 HTTP/2中的内容
- 压缩
  - gzip 压缩，找重复出现的字符串，临时替换，让整个文件变小，重复率越高压缩率越高 zlib模块
- 本地存储
  - localStorage,sessionStorage,session,cookie,indexDB,cacheApi
  - localStorage / sessionStorage 不会发送给服务器
  - IndexDB 浏览器中的非关系型数据库
  - cacheApi 离线缓存
- CDN
  - 内容分发网络 负载均衡 就近返回内容
- defer & async ／ preload & prefetch
  - defer 和 async 在网络读取的过程中都是异步解析
  - defer是有顺序依赖的，async只要脚本加载完后就会执行
  - preload 可以对当前页面所需的脚本、样式等资源进行预加载
  - prefetch 加载的资源一般不是用于当前页面的，是未来很可能用到的这样一些资源


### 4.koa中间件执行机制

### 5.koa和express的区别

### 6.三次握手、四次断开 
三次握手
第一次握手：客户端发送一个SYN码给服务器，要求建立数据连接；
第二次握手： 服务器SYN和自己处理一个SYN（标志）；叫SYN+ACK（确认包）；发送给客户端，可以建立连接
第三次握手： 客户端再次发送ACK向服务器，服务器验证ACK没有问题，则建立起连接；
四次挥手
第一次挥手： 客户端发送FIN(结束)报文，通知服务器数据已经传输完毕；
第二次挥手:  服务器接收到之后，通知客户端我收到了SYN,发送ACK(确认)给客户端，数据还没有传输完成
第三次挥手： 服务器已经传输完毕，再次发送FIN通知客户端，数据已经传输完毕
第四次挥手： 客户端再次发送ACK,进入TIME_WAIT状态；服务器和客户端关闭连接；
### 7.为什么建立连接是三次握手，而断开连接是四次挥手呢?
建立连接的时候， 服务器在LISTEN状态下，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。
而关闭连接时，服务器收到对方的FIN报文时，仅仅表示对方不再发送数据了但是还能接收数据，而自己也未必全部数据都发送给对方了，所以己方可以立即关闭，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，己方ACK和FIN一般都会分开发送，从而导致多了一次。