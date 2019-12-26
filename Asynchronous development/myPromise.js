/**
 * 1. Promise 3种状态 pending resolve reject
 * 2. resolve, reject 也是一个函数
 * 3. exector 会立即执行
 * 4. 每个promise都有一个then方法，then方法传递两个函数，一个代表成功执行的回调，一个代表失败的回调
 * 5. 状态变为成功或失败不能更改
 */
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';
const resolvePromise = (promise2, x, resolve, reject) => {
  if (promise2 === x) { // 死循环，报错
    return reject(new Error('Chaining cycle detected for Promise #<Promise>'));
  }
  // 判断x的类型是Promise还是普通值
};

class Promise {
  constructor(exector) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = []; //存储成功的回调
    this.onRejectedCallbacks = []; //存储失败的回调
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;
        this.onResolveCallbacks.forEach(fn => fn());
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try {
      exector(resolve, reject);
    } catch(e) {
      reject(e);
    }
  }

  then(onFulFilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      if (this.status === REJECTED) {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }
      if (this.status === PENDING) {
        // 如果是异步将方法存到数组中
        this.onResolveCallbacks.push(() => {
          try {
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);  
          } catch (error) {
            reject(error); 
          }
        });
      }
    })

    return promise2;
  }
}

/**
 * ES5
 */
// function Promise(exector) {
//   let that = this;
//   that.status = 'pending';
//   that.value = undefined;
//   that.reason = undefined;
//   function resolve(value) {
//     if (that.status === 'pending') {
//       that.status = 'fulfilled';
//       that.value = value;
//     }
//   }

//   function reject(reason) {
//     if (that.status === 'pending') {
//       that.status = 'rejected';
//       that.reason = reason;
//     }
//   }

//   exector(resolve, reject);
// }


// Promise.prototype.then = function(onFulFilled, onRejected) {
//   let that = this;
//   if (that.status === 'fulfilled') {
//     onFulFilled(that.value);
//   }
//   if (that.status === 'rejected') {
//     onRejected(that.reason);
//   }
// }
module.exports = Promise;