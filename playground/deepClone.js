function deepClone (obj, hash = new WeakMap()) {
    // 如果不是对象或者数组，直接 return
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // 判断是不是再 hash 中
    if (hash.get(obj)) {
        return hash.get(obj);
    }

    // 处理日期
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    // 处理数组
    if (Array.isArray(obj)) {
        const arr = [];
        hash.set(obj, arr);
        for (let i = 0; i < obj.length; i++) {
            arr[i] = deepClone(obj[i], hash);
        }
        return arr;
    }

    // 处理对象
    const objCopy = {};
    hash.set(obj, objCopy);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { // 避免遍历到从原型链继承的可枚举属性
            objCopy[key] = deepClone(obj[key], hash);
        }
    }
    return objCopy;
}

// 示例
const original = {
    name: 'Alice',
    age: 25,
    hobbies: ['reading', 'hiking'],
    address: {
        city: 'Wonderland',
        zip: '12345'
    },
    date: new Date()
};
original.self = original; // 添加循环引用

const copy = deepClone(original);
console.log(copy);
console.log(copy === original); // false
console.log(copy.address === original.address); // false
console.log(copy.hobbies === original.hobbies); // false
console.log(copy.self === copy); // true