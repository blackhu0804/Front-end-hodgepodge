/**
 * 1. 当前数据类型校验
 * 2. 对象的循环引用
 */
let obj = {
  a: 1,
  b: {
    c: 1
  }
};

function deepClone(value, hash = new WeakMap) {
  if (value == undefined) return value; // undefined == null => true

  // 不是对象就是string、number、boolean、function
  if (typeof value !== 'object') return value;

  if (value instanceof RegExp) return new RegExp(value);
  if (value instanceof Date) return new Date(value);

  // 防止循环引用  
  if (hash.get(value)) return hash.get(value);

  // 对象,数组 拷贝
  let instance = new value.constructor;
  hash.set(value, instance);
  for (let key in value) { // 将当前对象中的述据拷贝到新的对象
    if (value.hasOwnProperty(key)) { //不拷贝原型链上的属性
      instance[key] = deepClone(value[key], hash);
    }
  }

  return instance;
}

let newObj = deepClone(obj);
newObj.b.c = 100;
console.log(newObj);
console.log(obj);