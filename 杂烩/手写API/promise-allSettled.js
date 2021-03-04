let newAllSettled = function(promises) {
  if (!Array.isArray(promises)) {
    throw new Error("promises is not array");
  }

  let arr = new Array(promises.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((value) => {
        arr[i] = {
          status: 'fulfilled',
          value
        };
        count++;
        if (promises.length === count) {
          resolve(arr);
        }
      }, (error) => {
        arr[i] = {
          status: 'rejected',
          reason: error
        };
        count++;
        if (promises.length === count) {
          resolve(arr);
        }
      })
    }
  });
}

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// expected output:
// "fulfilled"
// "rejected"

// expected output:
// "fulfilled"
// "rejected"