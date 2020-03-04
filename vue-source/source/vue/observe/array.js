import { observe } from ".";

/**
 * 拦截用户调用的push、shift、unshift、pop、reverse、sort、splice数组方法
 */

// 获取老的数组方法
let oldArrayProtoMethods = Array.prototype;

// 拷贝新的对象，用来查找老的方法
export let arrayMethods = Object.create(oldArrayProtoMethods);

let methods = [
  'push',
  'pop',
  'unshift',
  'shift',
  'sort',
  'splice'
];

/**
 * 对数组新增的元素进行劫持
 * @param {*} inserted 
 */
export function observerArray(inserted) {
  for (let i = 0; i < inserted.length; i++){
    observe(inserted[i]);
  }
}

methods.forEach(method => {
  arrayMethods[method] = function(...args) { // 函数劫持
    console.log(args, args.slice(2));
    let result = oldArrayProtoMethods[method].apply(this, args);
    console.log('调用数组更新方法');
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2); // 获取splice(start, deleteCount, []）新增的内容
      default:
        break;
    }
    if(inserted) observerArray(inserted);
    return result;
  }
});