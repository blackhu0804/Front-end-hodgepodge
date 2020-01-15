// node 核心异步非阻塞  监听、异步完成之后去处理

// 发布订阅模式

let EventEmitter = require('./event');
let util = require('util');

let e = new EventEmitter();

function Person() {
  // EventEmitter.call(this);
}

util.inherits(Person, EventEmitter); // 实现继承公共属性

let person = new Person();

person.on('greet', function (name) {
  console.log('hello, ' + name);
});

person.on('work', function (name) {
  console.log('working, ' + name);
});

person.emit('greet', 'black');