// defineProperty (修改原对象)
// proxy（代理）数据劫持

// let el = {
//   _content: '',
//   get html() {
//     return this._content;
//   },
//   set html(value) {
//     this._content = value;
//   }
// }
// el.html = '123';
// console.log(el.html);

let obj = {};
let newA = 123;
Object.defineProperty(obj, 'a', {
  enumerable: true, // 是否可枚举
  configurable: true, // 能不能被配置, 判断是否能重新定义
  // writable: true,
  get() {
    return newA;
  },
  set(value) {
    newA = value;
  }
});
obj.a = 456;

// console.log(obj.a);

// Object.freeze 性能优化

let obj1 = Object.freeze({a: 1}); // 当前被冻结后的对象 不能再次被修改


/**
 * 简单模拟数据监听变化
 */
const update = () => {
  console.log('update view');
}

function defineReactive(target, key, value) {
  // 深层次 递归处理监听
  observer(value);

  if (!Object.getOwnPropertyDescriptor(target, key).configurable) return; // 如果对象不可配置直接return，比如freeze的对象直接return，提高性能
  Object.defineProperty(target, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (value !== newValue) {
        value = newValue;
        update();
      }
    }
  })
}
function observer(data) {
  if (typeof data !== 'object') {
    return data;
  }
  for (let key in data) {
    defineReactive(data, key, data[key]);
  }
}
let obj2 = {
  a: 1,
  b: 2
}
observer(obj2);
obj2.a = 1111;
