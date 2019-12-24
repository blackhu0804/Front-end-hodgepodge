/**
 * 4. Promise解决的问题
 * - 回调地狱
 * - 错误处理 
 */

/**
 * 1. Promise 3种状态 pending resolve reject
 * 2. resolve, reject 也是一个函数
 * 3. exector 会立即执行
 * 4. 每个promise都有一个then方法，then方法传递两个函数，一个代表成功执行的回调，一个代表失败的回调
 * 5. 状态变为成功或失败不能更改
 */
let promise = new Promise(function (resolve, reject) {
  resolve(1);
});

promise.then(function (value) {
  console.log('success', value);
}, function (reason) {
  console.log('reason', reason);
})