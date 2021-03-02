let newAll = function(promises) {
  if (!Array.isArray(promises)) {
    throw new Error('promises is not array');
  }

  let arr = new Array(promises.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((value) => {
        arr[i] = value;
        count++;
        if (promises.length === count) {
          resolve(arr);
        }
      }, (error) => {
        reject(error);
      })
    }
  });
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

newAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]