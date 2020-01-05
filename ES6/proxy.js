// proxy 代理 + reflect 反射
let obj = {
  a: 1,
  b: 2,
  c: {
    c: 1
  }
}
// let obj = [1, 2, 3]
const update = () => {
  console.log('update');
}

let handler = {
  get(target, key) {
    if (typeof target[key] === 'object') {
      return new Proxy(target[key], handler);
    }
    // return target[key]; 等同于
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    // target[key] = value;
    // return true;
    // 等同于
    let oldValue = target[key];
    if (oldValue !== value) {
      update();
      Reflect.set(target, key, value);
    }
    return true;
  }
}

let proxy = new Proxy(obj, handler);

proxy.c.c = 2;
// obj.push(4);