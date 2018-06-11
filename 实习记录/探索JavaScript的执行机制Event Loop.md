# 探索JavaScript的执行机制(Event Loop)

> JavaScript作为一门单线程语言，为了实现内容的不阻塞， `Event Loop`的方法为解决这个痛点而产生。

---

## 先看一段常见代码：
```javascript
console.log(1)

setTimeout(() => {
  console.log(2)
}, 0)

Promise.resolve().then(() => {
	console.log(3)
}).then(() => {
	console.log(4)
})

console.log(5)
```

不熟悉Event Loop的情况分析：

1. 先输出同步内容，首先是 1  5
2. setTimeout 和 Promise 按顺序输出 2 3 4
3. 所以分析结果是 1 5 2 3 4

事实是怎样的呢，放到浏览器执行一下发现并不是，答案是：1 5 3 4 2

## macro-task(宏任务)、micro-task(微任务)

我们搜索发现任务还分为macro-task和micro-task，而不同的任务进入不同的事件队列。macro-task和micro-task包括：

- macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
- micro-task(微任务)：Promise，process.nextTick

事件循环的顺序，决定代码的执行顺序。进入整体代码（宏任务），进行第一次循环，之后执行所有的微任务，执行完毕后，在宏任务队列找到一个宏任务开始执行，再执行所有的微任务。直到所有宏任务全部执行完毕。拿最开始的例子进行分析：

- 首先整段代码作为宏任务，进入主线程
- 先输出1 5，然后遇到`setTimeout`，`setTimeout`进入宏任务。
- 接下来遇到`Promise`，`new Promise` 立即执行，输出3，`then` 进入微任务队列，执行，输出 4
- 执行完毕后执行下一个宏任务`setTimeout`，输出2
- 最终输出1 5 3 4 2

## 让我们再加上`process.nextTick(callback)`

```javascript
console.log(1)

setTimeout(() => {
    console.log(2)
    new Promise(resolve => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
    process.nextTick(() => {
        console.log(3)
    })
})

new Promise(resolve => {
    console.log(7)
    resolve()
}).then(() => {
    console.log(8)
})

process.nextTick(() => {
    console.log(6)
})
```

根据之前分析的答案是：1 7 8 6 2 4 5 3

而正确答案却是： 1 7 6 8 2 4 3 5

为什么答案不对呢，发现`process.nextTick`的优先级是大于`Promise.then()`的，好了，这样就能得出正确答案了！

