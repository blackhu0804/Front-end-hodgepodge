/**
 * 1. Promise 3种状态 pending resolve reject
 * 2. resolve, reject 也是一个函数
 * 3. exector 会立即执行
 * 4. 每个promise都有一个then方法，then方法传递两个函数，一个代表成功执行的回调，一个代表失败的回调
 * 5. 状态变为成功或失败不能更改
 */

function Promise(exector) {
  let that = this;
  that.status = 'pending';
  that.value = undefined;
  that.reason = undefined;
  function resolve(value) {
    if (that.status === 'pending') {
      that.status = 'fulfilled';
      that.value = value;
    }
  }

  function reject(reason) {
    if (that.status === 'pending') {
      that.status = 'rejected';
      that.reason = reason;
    }
  }

  exector(resolve, reject);
}


Promise.prototype.then = function(onFulFilled, onRejected) {
  let that = this;
  if (that.status === 'fulfilled') {
    onFulFilled(that.value);
  }
  if (that.status === 'rejected') {
    onRejected(that.reason);
  }
}
module.exports = Promise;