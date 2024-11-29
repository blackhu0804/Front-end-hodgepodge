// promise all example
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1000);
});
const promise2 = Promise.resolve('Promise 2 resolved');

const promise3 = 'promise 3 resolved';

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // ['Promise 1 resolved', 'Promise 2 resolved', 'promise 3 resolved']
});

// 实现 Promise.all
Promise.myAll = function (promises) {
    return new Promise((resolve, reject ) => {
        const result = [];
        let count = 0;
        for (let i = 0; i < promises.length; i++) {
            // 这里不能使用 promises[i].then，因为 promises[i] 有可能是一个值，不是一个 Promise 对象
            Promise.resolve(promises[i]).then(value => {
                result[i] = value;
                count++;
                if (count === promises.length) {
                    resolve(result);
                }
            }).catch(reason => {
                reject(reason);
            });
        }
    })
}

Promise.myAll([promise1, promise2, promise3]).then((values) => {
    console.log(values); // ['Promise 1 resolved', 'Promise 2 resolved', 'promise 3 resolved']
});