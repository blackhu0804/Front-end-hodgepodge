export {};
/**
 * 装饰器
 */
// 类装饰器在类之前声明， 用来监视、修改或替换类的定义

/**
 * 如果用来装饰一个类
 * @param target [Function: Person] 类的构造函数
 */
function enhancer(target: any) {
  console.log(target);
  target.prototype.name = 'xxx';
  target.prototype.getName = function() {
    console.log(this.name);
  }
}

@enhancer
class Person {
}

let p = new Person();
// TS 报错提示 类型“Person”上不存在属性“name”
console.log((p as any).name);
(p as any).getName();

function connect(target: any) {
  return class  {
    name: string = 'hello';
  }
}

@connect
class App {

}
let app = new App();
// 相当于替换了一个新的类
console.log((app as any).name);


/**
 * 属性装饰器
 */
namespace b {
  // 类的属性装饰器, 两个参数 1.target是类的原型对象，2.propertyKey是属性的名字
  function upperCase(target: any, propertyKey: string) {
    let value = target[propertyKey];
    const getter = function () {
      return value;
    }
    const setter = function (newValue: string) {
      value = newValue.toUpperCase();
    }
    if (delete target[propertyKey]) {
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      })
    }
  }

  // 当装饰的是一个类的实例方法的时候
  /**
   * 
   * @param target 类的原型
   * @param methodName getName
   * @param descriptor 属性描述器 {set, get, enumerable, configurable...}
   */
  function noEnumerable(target: any, methodName:string, descriptor: any) {
    descriptor.enumerable = true;
  }

  function converToNumber(target: any, methodName:string, descriptor: any) {
    let oldMethod = descriptor.value; // 老的sum函数
    descriptor.value = function(...args: any[]) {
      args = args.map(item => parseInt(item));
      return oldMethod.apply(this, args);
    }
  }

  class Person {
    @upperCase
    name: string = 'black';
    @noEnumerable
    getName() {
      console.log(this.name);
    }
    @converToNumber
    sum(...args: any[]) {
      return args.reduce((total, current) => total + current, 0);
    }
  }
  let p = new Person();
  console.log(p.name);
  // console.log(p.getName());
  
  let result = p.sum(1, '2', 3, '4px');
  console.log(result);
}


/**
 * 参数装饰器
 */
namespace c {
  /**
   * @param target 静态成员是构造函数  普通成员是类的原型
   * @param methodName login()
   * @param paramIndex 参数位置索引
   */
  function addAge(target: any, methodName: string, paramIndex: number) {
    target.age = 10;
  }

  // target 是构造函数
  function addHome(target: any, methodName: string, paramIndex: number) {
    target.home = '北京';
  }

  function addMyHome(target: any, propertyKey: string) {
    target.myHome = '我的家';
  }

  class Person {
    @addMyHome
    static myage: number = 18;
    static getClassName(@addHome name: string) {

    }
    login(username: string, @addAge password: string) {
      console.log((this as any).age, username, password);
    }
  }
  console.log((Person as any).home);
  console.log((Person as any).myHome);
}

/**
 * 装饰器执行顺序
 * 1. 多个参数装饰器, 从最后一个依次向前执行
 * 2. 方法和方法参数中的装饰器先执行
 * 3. 类装饰器最后执行
 * 4. 方法和属性装饰器谁在前面谁先执行
 */