let newAny = function(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('promises is not array');
  }

  let count = 0;
  let arr = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((value) => {
        resolve(value);
      }, (error) => {
        count++;
        arr.push(error)
        if (promises.length === count) {
          reject(arr);
        }
      })
    }
  });
}

const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

newAny([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
}).catch(error => {
  console.log(error);
})