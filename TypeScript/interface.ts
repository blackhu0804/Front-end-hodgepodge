/**
 * 接口
 * 1. 行为的抽象
 * 2. 描述对象的形状
 */

interface Speakable {
  speak(): void;
  name: string;
  age: number;
}

// 描述一个对象有哪些属性，属性的类型是什么
let speaker: Speakable = {
  speak: () => {

  },
  name: 'black',
  age: 18
};

// 接口描述一个函数
interface Inter1 {
  (a: number, b: number): void;
}
let fn = (a: number, b: number) => {
  
}
let it1: Inter1 = fn;

/**
 * 接口用来描述行为的抽象
 */
namespace f {
  interface Speakable {
    speak(): void;
  }

  interface Eatable {
    eat(): void;
  }

  // 一个类只能继承一个父类，但可以实现多个接口
  class Person implements Speakable,Eatable {
    name: string;
    eat(): void {
      throw new Error("Method not implemented.");
    }
    speak(): void {
      throw new Error("Method not implemented.");
    }
  }

  // 任意属性
  // interface Props {
  //   name: string,
  //   age: number,
  //   [propName: string]: any
  // }
  interface Props extends Record<string, any>{
    name: string,
    age: number,
    [propName: string]: any
  }
  let props: Props = {
    name: 'black',
    age: 10,
    home: 'xxx'
  }


  interface Person2 {
    readonly id: number;
    name: string;
  }
  let p: Person2 = {
    id: 1,
    name: 'xxx'
  }
  // Cannot assign to 'id' because it is a read-only property
  // p.id = 2;

  /**
   * 函数类型的接口
   * 对方法传入的参数和返回值进行约束
   */
  interface Discount {
    (price: number): number;
  }
  let cost: Discount = function(price: number): number {
    return price;
  }

  /**
   * 可索引接口
   * 可以对数组和对象进行约束
   */
  interface IUser {
    [index: number]: string;
  }
  let arr: IUser = ['a', 'b', 'c'];
  let obj: IUser = {0: 'a', 1: 'b'};
}

namespace g {
  /**
   * 类接口 
   * 用接口去约束类
   */
  interface Speakable {
    name: string,
    speak(words: string): void
  }
  class Dog implements Speakable {
    name: string;    
    speak(words: string): void {
      throw new Error("Method not implemented.");
    }
  }
  let dog = new Dog();
  dog.name;
  dog.speak('wang');
}