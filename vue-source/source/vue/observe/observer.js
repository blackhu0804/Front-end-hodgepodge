import {observe} from './index';
import { arrayMethods, observerArray } from './array';
import Dep from './dep';

/**
 * 定义响应式的数据变化
 * @param {Object} data  用户传入的data
 * @param {string} key data的key
 * @param {*} value data对应key的value
 */
export function defineReactive(data, key, value) {
  // 如果value依旧是一个对象，需要深度劫持
  observe(value);
  let dep = new Dep(); // dep 里可以收集依赖， 收集的是wathcer
  Object.defineProperty(data, key, {
    get() {
      if (Dep.target) { // 这次有值 用的是渲染wathcer
        dep.depend();
      }
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      console.log('设置数据');
      observe(newValue); // 如果新设置的值是一个对象， 应该添加监测
      value = newValue;
      dep.notify();
    }
  });
}

class Observer {
  constructor(data) { // data === vm._data
    //将用户的数据使用 Object.defineProperty重新定义
    if (Array.isArray(data)) { // 对数组方法进行劫持
      data.__proto__ = arrayMethods;
      // 只能拦截数组方法，还需要对数组每一项进行观测
      observerArray(data);
    } else {
      this.walk(data);
    }
  }

  /**
   * 循环数据遍历
   */
  walk(data) {
    let keys = Object.keys(data);
    for(let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
}

export default Observer;