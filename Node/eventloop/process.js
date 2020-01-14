/**
 * Node 的事件环在 11 版本以后和浏览器一致
 */

const path = require('path');
const fs = require('fs');

console.log(process.cwd(), path.resolve()); // 相同

Promise.resolve().then(data => {
  console.log('then');
});

process.nextTick(() => { //将当前的一个方法变成一个异步方法  （异步的微任务）
  console.log('nextTick');
});

// 先执行 nextTick 然后输出 then

// setTimeout 和 setImmediate 不一定谁先执行， 受程序性能约束
// setTimeout(() => {
//   console.log('timer');
// }, 0);

// setImmediate(() => {
//   console.log('immediate');
// });


fs.readFile(path.resolve(__dirname, 'global.js'), 'utf8', function (data) {
  setTimeout(() => {
    console.log('timer');
  }, 0);
  
  setImmediate(() => {
    console.log('immediate');
  });

  // output: immediate    timer
})

/**
 * 1. 首先执行当前 script 脚本
 * 2. 执行完毕后 执行当前调用栈中所有的微任务
 * 3. 然后执行当前 timer 队列中的第一个
 * 4. 执行完之后情况当前微任务
 * 5. 再取出第二个 timer 如果没有 timer 进入 poll 阶段
 * 6. 如果有 check 先执行 check， 没有就执行 i/o 的回调
 * 7. 如果没有其它，在这个阶段进行等待，等待定时器到达时间返回
 */