/**
 * 抽象类
 */
namespace a {
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    getName() {
      return this.name;
    }
    abstract speak(): void;
  }

  // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“speak”
  class Cat extends Animal {
    speak(): void {
      console.log('miao miao miao');
    }
  }

  class Dog extends Animal {
    speak(): void {
      console.log('wang wang wang');
    }
  }
  // 重写 子类重新实现父类中的方法，名字一样，实现不一样
  let cat = new Cat('猫');
  cat.speak();
  let dog = new Dog('狗');
  dog.speak();
}