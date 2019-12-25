/**
 * 3. 观察者模式
 */
class Subject {
  constructor() {
    this.observers = [];
    this.state = 'staring';
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }

  setState(state) {
    this.state = state;
    this.notify();
  }
}
/**
 * 观察者
 */
class Observer {
  constructor(name, target) {
    this.name = name;
    this.target = target;
  }

  update() {
    // 更新方法
    console.log(`通知：${this.name}，当前状态为${this.target.state}`);
  }
}

let subject = new Subject();

let observer1 = new Observer('observer1', subject);
let observer2 = new Observer('observer2', subject);

// 目标添加观察者
subject.attach(observer1);
subject.attach(observer2);

subject.setState('end');

/**
 * ES5
 */
// function Subject() {
//   this.observers = [];
//   this.state = 'staring';
// }

// Subject.prototype.attach = function(observer) {
//   this.observers.push(observer);
// }

// Subject.prototype.notify = function() {
//   this.observers.forEach(observer => {
//     observer.update();
//   })
// }

// Subject.prototype.setState = function (state) {
//   this.state = state;
//   this.notify();
// }

// /**
//  * 观察者
//  */
// function Observer(name, target) { 
//   this.name = name;
//   this.target = target;
// }
// Observer.prototype.update = function() {
//   // 更新方法
//   console.log(`通知：${this.name}，当前状态为${this.target.state}`);
// }

/**
 * 缺点：
 * 1. 同步多个异步请求的结果 复杂
 * 2. 异步不支持try catch
 * 3. 多个异步，有顺序关系，导致回调地狱
 * 4. 异步没有return
 */