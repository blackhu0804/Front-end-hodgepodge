// 请实现以下 sum 函数，只能调用 add 进行实现
function add(a, b) {
    return Promise.resolve(a + b);
}

async function sum(arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        num = await add(num, arr[i])
    }
    return num;
}

// 上面会太耗时，如果 add 每一个都需要很久，那么只能串行调用
// 并行调用，将数组两两分组
const chunkArr = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        const index = Math.floor(i / 2);
        if (!res[index]) {
            res[index] = [];
        }
        res[index].push(arr[i]);
    }

    return res;
}

async function promiseAllSum(arr) {
    if (arr.length === 1) return arr[0];
    const promises = chunkArr(arr).map(async ([x, y]) => {
        return y === undefined ? x : await add(x, y);
    })

    const results = await Promise.all(promises);

    return results.reduce((acc, cur) => acc + cur, 0);
}

// async function test() {
//     console.log(await promiseAllSum([1, 2, 3, 4, 5, 6, 7]));
// }

// test()


// 但是如果数组有很大很大，需要控制一下并发数量怎么办
// 这里可以考虑实现一个 promise 的并发控制来实现
const pMap = (promises, MaxCon, taskFn) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let currentIndex = 0;
        let running = 0;
        
        function runNext() {
            if (running === 0 && currentIndex >= promises.length) {
                return resolve(results);
            }

            if (running < MaxCon && currentIndex < promises.length) {
                const index = currentIndex++;
                running++;
                Promise.resolve(promises[index])
                    .then((result) => {
                        results.push(result);
                        running--;
                        runNext();
                    }).catch((err) => reject(err))
            }
        }

        runNext();
    })
}

async function pMapSum(arr, con) {
    if (arr.length === 1) return arr[0];
    const promises = chunkArr(arr).map(async ([x, y]) => {
        return y === undefined ? x : await add(x, y);
    })

    const results = await pMap(promises, con);

    return results.reduce((acc, cur) => acc + cur, 0);
}

async function test() {
    console.log(await pMapSum([1, 2, 3, 4, 5, 6, 7], 2))
}

test()