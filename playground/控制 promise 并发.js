const promiseMap = (tasks, maxCon, taskFn) => {
    return new Promise((resolve, reject) => {
        let results = [];
        let running = 0;
        let index = 0;

        function runNext() {
            // 结束条件
            if (index >= tasks.length && running === 0) {
                return resolve(results);
            }

            if (running < maxCon && index < tasks.length) {
                const currentIndex = index++;
                running++;
                Promise.resolve(taskFn(tasks[currentIndex], currentIndex, tasks))
                    .then(result => {
                        results[currentIndex] = result;
                        running--;
                        runNext();
                    }).catch((err) => {
                        reject(err)
                    })
            }
        }

        runNext();
    })
}

// 示例任务函数
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 示例任务数组
const tasks = [1000, 500, 3000, 2000, 1500];

// 使用 promiseMap 控制并发数量
promiseMap(tasks, 2, (time) => delay(time).then(() => time))
    .then(results => {
        console.log(results); // 输出: [1000, 500, 3000, 2000, 1500]
    })
    .catch(error => {
        console.error(error);
    });