## 深浅拷贝

```js
let a = {
    age: 1
}
let b = a
a.age = 2
console.log(b.age) // 2
```

从上面的例子可以发现，如果给一个变量赋值一个对象，那么两者的值会是同一个引用，其中一方改变，另一方也会相应改变。

解决这个问题，可以引入浅拷贝：

### 浅拷贝

1. 可以使用`Object.assign` 来解决这个问题

```js
let a = {
    age: 1
}
let b = Object.assign({}, a)
a.age = 2
console.log(b.age) // 1
```

2. 使用ES6展开运算符(...)解决

```javascript
let a = {
    age: 1
}
let b = {...a}
a.age = 2
console.log(b.age) // 1
```

通常浅拷贝能解决大部分的问题，但是当遇到，对象里面嵌套一个对象的时候，就需要用到深拷贝了

```js
let a = {
    age: 1,
    name: {
        first: 'black'
    }
}
let = {...a}
a.name.first = 'guyue'
console.log(b.name.first) // guyue
```

这样说明浅拷贝并没有对嵌套的对象生效。此时需要深拷贝上场：

### 深拷贝

深拷贝最简单的实现办法就是使用`JSON.parse(JSON.stringify(object))` 来解决。

```js
let a = {
    age: 1,
    name: {
        first: 'black'
    }
}
let b = JSON.parse(JSON.stringify(a))
a.name.first = 'guyue'
console.log(b.name.first) // black
```

但是当出现以下几种情况的时候，会出现问题：

```js
let obj = {
    a: 1,
    b: {
        c: 2
    }
}
obj.c = obj.b
obj.d = obj.a
obj.b.c = obj.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)
// Uncaught TypeError: Converting circular structure to JSON
```

报错了，不能解决循环引用对象的问题。

```js
let obj = {
   	age: undefined,
    sex: function(){},
    name: 'black'
}
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj) // {name: "black"}
```

发现只拷贝了`name `,而忽略了`undefined`和`funcion`。

所以，`JSON.parse(JSON.stringify(obj))`遇到这几种情况会出现问题：

- 不会拷贝 `undefined`
- 不能拷贝函数
- 不能解决循环引用的对象

所以采用下面的方式：

```js
function deepClone(obj) {
    let res = obj instanceof Array ? [] : {}
    for(let k in obj) {
        res[k] = obj[k]
        if(typeof obj[k] === Object) {
            deepClone(obj[k])
        }
    }
    return res
}

let obj = {
   	age: undefined,
    sex: function(){},
    name: 'black'
}

let newObj = deepClone(obj)
console.log(newObj) // {age: undefined, sex: ƒ, name: "black"}
```

可以采用ES2017的新语法：
```js
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}

let obj = {
   	age: undefined,
    sex: function(){},
    name: 'black'
}

let newObj = copyObject(obj)
console.log(newObj) // {age: undefined, sex: ƒ, name: "black"}
```

