# JS

## new

1. 新生成一个对象
2. 链接到原型
3. 绑定this
4. 返回新对象

在调用 `new` 过程中会发生以上四件事情，用js实现一个 `new`

```javascript
function new2(func) {
	var obj = Object.create(func.prtotype);
	var key = func.call(obj);
    if(typeof key === 'object') {
        return key
    } else {
	    return obj
    }
}
```



## instanceof

`instanceof` 可以正确盘对对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的`prototype`。js模拟实现一下`instanceof`。

```javascript
var M = function() {this.name = 'obj'}
var o = new M()
function instanceof(o, Obj) {
    // 获得类型的原型
    let prototype = Obj.prototype
    // 获得对象的原型
    o = o.__proto__
    // 判断对象的原型是否等于类型的原型
    while(true) {
        if( o === null) {
            return false
        } 
        if( prototype === o) {
            return true
        }
        o = o.__proto__
    }
}
```



## this

```javascript
function foo() {
    console.log(this.a);
}
var a = 1
foo() // 1

var obj = {
    a: 2,
    foo: foo
}
obj.foo() // 2

// 以上两种情况 this 只依赖于调用函数前的对象，优先级是第二种情况大于第一种情况

// 以下情况是优先级最高的，`this` 只会绑定在 c 上，不会被任何方式修改 this 指向
var c = new foo()
c.a = 3
console.log(c.a)
// 利用call,apply,bind 改变 this，优先级仅次于 new
```

### 箭头函数中的this

```javascript
function a() {
    return () => {
		return () => {
			console.log(this)
        }
    }
}

console.log(a()()())
```

箭头函数的`this`取决于他外面的第一个不是箭头函数的`this`。像上面的情况，调用 `a` 符合前面代码的第一种情况，所以 `this` 是 `window`。并且 `this`一旦绑定了上下文，就不会被任何代码所改变。

## 执行上下文

当执行JS代码时，会产生三种执行上下文。

- 全局执行上下文
- 函数执行上下文
- eval执行上下文

## 闭包

函数A返回了一个函数B，并且函数B中使用了函数A的变量，函数B就被称为闭包。

```javascript
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() { // displayName() 是内部函数,一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
```

函数 A 中的变量这时候是存储在堆上的。现在的 JS 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上，哪些需要存储在栈上。 

循环中使用闭包解决`var`定义函数的问题

```javascript
for(var i = 0;i < 5;i++) {
    setTimeout( () => {
        console.log(i)
    }, i*1000)
}
```

此时，因为 `setTimeout` 是一个异步函数，所以会先把循环全部执行完毕，这时候 i 就是5，输出5个5。

解决办法，第一种闭包：

```javascript
for(var i = 0; i < 5; i++) {
    (function(j) {
        setTimeout( () => {
            console.log(j)
        }, j * 1000)
    })(i)
}
// 0 1 2 3 4
```

第二种使用 `setTimeout` 的第三个参数：

```javascript
for(var i = 0; i < 5; i++) {
    setTimeout( (j) => {
		console.log(j)
    }, i*1000, i)
}
// 0 1 2 3 4
```

第三种就是使用 `let`  定义 `i` 

```javascript
for(let i = 0;i < 5;i++) {
    setTimeout( () => {
        console.log(i);
    }, i*1000);
}
// 0 1 2 3 4
```

对于`let` 来说，会创建一块块级作用域，相当于

```javascript
{ // 形成块级作用域
  let i = 0
  {
    let ii = i
    setTimeout( function timer() {
        console.log( i );
    }, i*1000 );
  }
  i++
  {
    let ii = i
  }
  i++
  {
    let ii = i
  }
  ...
}
```

## 深浅拷贝

```javascript
let a = {
    age: 1
}
let b = a
console.log(b.age) // 1
a.age = 2
console.log(b.age) // 2
```

如果给一个变量赋值一个对象，那么两者的值回事同一个引用，其中一方改变，另一方也会改变。可以使用浅拷贝来解决这个问题。

#### 浅拷贝

首先可以通过`Object.assign` 来解决这个问题。

```javascript
let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
```

也可以用展开运算符 `...` 来解决

```javascript
let a = {
    age: 1
}
let b = {...a}
a.age = 2
console.log(b.age) // 1
```

但是浅拷贝只解决了第一层的问题，如果接下来的值中还有对象的话，那么两者就有了相同的引用。

```javascript
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = {...a}
a.jobs.first = 'native'
console.log(b.jobs.first)  // native
```

此时改变一个另一个也相应的做出了改变，解决这个问题，需要引入深拷贝。

#### 深拷贝

可以用 `JSON.parse(JSON.stringfy(object))` 解决。

```javascript
let a = {
    age: 1,
    jobs: {
        first: 'FE'
    }
}
let b = JSON.parse(JSON.stringfy(a))
a.jobs.first = 'native'
console.log(b.jobs.first) // FE
```

局限性

- 不能序列化函数
- 忽略`undefined`
- 不能解决循环引用的对象

### 模块化

#### ES6模块化

```javascript
// file a.js
export function a() {}
export function b() {}

// file b.js
export default function() {}

import {a, b} from './a.js'
import xxx from './b.js'
```

#### CommonJS

`CommonJS` 是 Node 独有的规范，浏览器中使用需要用到 `Browserify` 解析。

```javascript
// a.js
module.exports = {
    a: 1
}
// or 
exports.a = 1

// b.js
var module = require('./a.js')
module.a   // 1
```

对于 `CommonJS` 和 ES6 中的模块化的区别：

- 前者支持动态导入，后者目前不支持
- 前者是同步导入，用于服务端。后者是异步导入，用于浏览器。
- 前者在导出时都是值拷贝，就算导出的值变了，导入的值也不会改变，所以更新值必须重新导入一次。后者采用实时绑定的方式，导入导出都指向同一个内存地址。
- 后者会编译成 `require / exports` 来执行

### AMD

AMD是由`RequireJS` 提出的

```javascript
define(['./a', './b'], function(a, b) {
    a.do()
    b.do()
})
define(function(require, exports, module) {
    var a = require('./a')
    a.dosome()
    var b = require('./b')
    b.dosome()
})
```

### 防抖和节流

#### 防抖

- 对于按钮防点击来说的实现：一旦我开始一个定时器，只要我定时器还在，不管你怎么点击都不会执行回调函数。一旦定时器结束并设置为 `null`，就可以再次点击了。
- 对于延时执行函数来说的实现：每次调用防抖动函数都会判断本次调用和之前的时间间隔，如果小于需要的时间间隔，就会重新创建一个定时器，并且定时器的延时为设定时间减去之前的时间间隔。一旦时间到了，就会执行相应的回调函数 

#### 节流

防抖动是将多次执行变为最后一次执行， 节流是将多次执行变成每隔一段时间执行。 

### call, apply, bind 区别

`call` 和 `apply` 都是为了解决 `this` 的指向，作用相同，传参的方式不同，除了第一个参数以外，`call` 可以接收一个参数列表， `apply` 只接受一个参数数组。

```javascript
let a = {
    value: 1
}
function getValue(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value)
}

getValue.call(a, 'black', '18')
getValue.apply(a, ['black', '20'])
```

#### 模拟实现call 和 apply

- 不传入第一个参数，默认为 `window`

- 改变了  `this` 指向，让新的对象可以执行该函数。那么思路是否可以变成新的对象增加一个函数，然后再执行完以后删除？

  ```javascript
  Function.prototype.myCall = function(context) {
      var context = context || window
      // 给 context 添加一个属性
      context.fn = this
      // 将context 后面的参数取出来
      var args = [...arguments].slice(1)
      // getValue.call(a, 'black', '18')  => a.fn('black', '18')
      var result = context.fn(...args)
      // 删除fn
      delete context.fn
      return result
  }
  ```

  `apply` 的实现类似：

  ```javascript
  function.prototype.myApply = function(context) {
      var context = context || window
      context.fn = this
      var result
      // 判断是否存储第二个参数
      if(arguments[1]) {
          result = context.fn(...arguments[1])
      } eles {
          result = context.fn()
      }
      delete context.fn
      return result
  }
  ```

  `bind` 和其他两个方法作用一致，只是该方法会返回一个函数。`bind()` 方法创建一个新的函数, 当被调用时，将其`this`关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。 注意bind只能绑定一次，多次绑定无效。

  ```javascript
  var bar = function() {
  	console.log(this.x)
  }
  bar() // undefined
  var foo = {
      x : '1'
  }
  var func = bar.bind(foo)
  func() // 1
  ```

  

### Promise

`Promise` 时 ES6 新增的语法，解决回调地狱的问题。

初始是 `pending` 状态，可以通过函数 `resolve` 和 `reject` 将状态转变为 `resolved` 或者 `rejected` 状态，状态一旦改变就不能再次变化。

`then` 函数返回一个 `Promise` 实例，并且是一个新的实例，因为 `Promise` 规范规定除了 `Pending` 状态，其他状态是不可以改变的。

下面代码创造了一个`Promise` 实例。Promise 新建后就会立即执行。 

```javascript
const promise = new Promise(function( resolve, reject) {
    // code...
    if(/*异步操作成功*/) {
        // resolve 函数作用是将 Promise 对象的状态从未完成变为成功，即从 pending 转换为 resolved，在异步操作成功的时候调用，并将异步操作成功的结果作为参数传递出去
    	resolve(value)   
    } else {
         // reject 函数的作用是将 Promise 对象的状态从未完成变为失败，即从 pending 转换为 rejected ，异步操作失败，将失败结果作为参数传递出去
		reject(error)
    }
})
```

`Promise` 实例生成以后，可以用 `then` 方法分别指定 `resolved` 状态和 `rejected` 状态的回调函数。

```javascript
promise.then( function(value) {
	// success
}, function(error) {
    // error
})
```

### Generator

`Generator` 函数是 ES6 提供的一种异步编程解决方案

```javascript
// 使用 * 表示这是一个 Generator 函数
// 内部可以通过 yield 暂停代码
// 通过调用 next 恢复执行
function* test() {
    yield 'hello'
    yield 'world'
    return 'end'
}
var test = test()
// 此时test()有三个状态，hello，world，和return语句。
console.log(test.next()) // {value: "hello", done: false}
console.log(test.next()) // {value: "world", done: false}
console.log(test.next()) // {value: "end", done: true}
console.log(test.next()) // {value: "undefined", done: true}
```

### `Map` ,`FlatMap`, `Reduce`

`Map` 的作用是生成一个新数组，遍历原数组，将每个元素拿出来做一些变换然后 `append` 到一个新数组中。

```javascript
[1, 2, 3].map( (item) => {
    return item + 1
})
// [ 2, 3, 4 ]
```

`FlatMap` 和 `Map` 作用几乎相同，但是对于多维数组来说，`FlatMap` 会将原数组降维；目前该函数在浏览器中还不支持。 

```javascript
[1, [2, 3], 4].flatMap( (item) => {
    return item + 1
})
// [2, 3, 4, 5]
```

`Reduce` 作用是将数组中的值组合起来，最终得到一个值

```javascript
function a() {
    console.log(1);
}
function b() {
    console.log(2);
}
[a, b].reduce( (a, b) => {
	a(b())
})
// 2 1
```

### async 和 await

一个函数如果加上 `async` ，那么该函数就会返回一个 `Promise` 

```javascript
async function test() {
    return '1';
}
console.log(test()) // Promise {<resolved>: "1"}
```

可以将 `async` 看成将函数返回值使用 `Promise.resolve()` 包裹了下。

`await` 只能在 `async` 函数中使用

```javascript
function sleep() {
	return new Promise( resolve => {
        setTimeout( () => {
            console.log('finish');
            resolve('sleep')
        }, 2000)
    })
}

async function test() {
	let value = await sleep();
    console.log('object')
}

test()
```

上面代码会先打印 `finish` 然后再打印 `object` 。因为 `await` 会等待 `sleep` 函数 `resolve` ，所以即使后面是同步代码，也不会先去执行同步代码再来执行异步代码。 

`async` 和 `await` 相比直接使用 `Promise` 来说，优势在于处理 `then` 的调用链，能够更清晰准确的写出代码。缺点在于滥用 `await` 可能会导致性能问题，因为 `await` 会阻塞代码，也许之后的异步代码不依赖前者，但仍然需要等待前者完成，导致代码失去了并发性。

### Proxy

`Proxy` 用于修改某些操作的默认行为，可以理解成在目标对象之前架设一层"拦截"，外界对该对象的访问，都需要先通过这层拦截。

```javascript
// target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
var proxy = new Proxy(target, handler);
```



### 正则

| 元字符 | 作用                                                         |
| ------ | ------------------------------------------------------------ |
| .      | 匹配任意字符除了换行符和回车符                               |
| []     | 匹配方括号内的任意字符。比如 [0-9] 就可以用来匹配任意数字    |
| ^      | ^9，这样使用代表匹配以 9 开头。[`^`9]，这样使用代表不匹配方括号内除了 9 的字符 |
| {1, 2} | 匹配 1 到 2 位字符                                           |
| (yck)  | 只匹配和 yck 相同字符串                                      |
| \|     | 匹配 \| 前后任意字符                                         |
| \      | 转义                                                         |
| *      | 只匹配出现 -1 次以上 * 前的字符                              |
| +      | 只匹配出现 0 次以上 + 前的字符                               |
| ?      | ? 之前字符可选                                               |

| 修饰语 | 作用       |
| ------ | ---------- |
| i      | 忽略大小写 |
| g      | 全局搜索   |
| m      | 多行       |

| 简写 | 作用                 |
| ---- | -------------------- |
| \w   | 匹配字母数字或下划线 |
| \W   | 和上面相反           |
| \s   | 匹配任意的空白符     |
| \S   | 和上面相反           |
| \d   | 匹配数字             |
| \D   | 和上面相反           |
| \b   | 匹配单词的开始或结束 |
| \B   | 和上面相反           |