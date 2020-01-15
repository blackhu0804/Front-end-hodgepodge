// node 核心异步非阻塞  监听、异步完成之后去处理

// 发布订阅模式

let EventEmitter = require('./event.js');
let util = require('util');

function Person() {
}

util.inherits(Person, EventEmitter); // 实现继承公共属性

let person = new Person();

const Hello = function (name) {
  console.log('hello, ' + name);
}

person.on('newListener', function (type) {
  process.nextTick(() => {
    person.emit(type);
  });
})

person.on('greet', Hello);
person.on('greet', function (name) {
  console.log('greet, ' + name);
});
// person.on('work', function (name) {
//   console.log('working, ' + name);
// });

person.emit('greet', 'black');
// person.emit('work', 'black');

person.off('greet', Hello);