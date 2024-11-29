// 一个模拟上传的异步函数
// 上传时间控制在 0-3 s 之间
function uploadFile(task) {
    return new Promise((resolve) => {
        const time = Math.random() * 3000; // 模拟随机上传时间
        setTimeout(() => {
            console.log('上传成功', task, time);
            resolve({ task, time }); // 返回任务和完成时间
        }, time);
    });
}

// 上传队列
const uploadQueue = (tasks, maxCon) => {
    let runningTasks = 0; // 当前正在运行的任务数
    let taskIndex = 0;    // 当前任务的索引
    const results = [];   // 存放任务结果

    return new Promise((resolve, reject) => {
        const enqueue = () => {
            // 如果所有任务都处理完了，返回结果
            if (taskIndex >= tasks.length && runningTasks === 0) {
                return resolve(results)
            }

            // 如果可以添加新任务
            while (runningTasks < maxCon && taskIndex < tasks.length) {
                const currentTask = tasks[taskIndex++]; // 获取当前任务
                runningTasks++; // 增加正在运行的任务数

                uploadFile(currentTask)
                    .then((result) => {
                        results.push(result); // 保存任务和完成时间
                    })
                    .catch((err) => reject(err))
                    .finally(() => {
                        runningTasks--; // 任务完成，减少正在运行的任务数
                        enqueue(); // 尝试启动下一个任务
                    });
            }
        };

        enqueue(); // 开始队列处理
    });
};

// 调用函数，最多并发执行3个任务
uploadQueue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3).then((result) => {
    console.log('所有文件上传完毕:', result);
}).catch((error) => {
    console.error('上传过程中出现错误:', error);
});
