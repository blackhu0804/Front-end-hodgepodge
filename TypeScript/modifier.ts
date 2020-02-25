/**
 * 类里面的修饰符
 * public 自己 自己孩子 外人都可以访问
 * protect 自己 自己孩子能访问
 * private 自己能访问
 */
// class Father {
//   constructor (public name: string, protected age: number, private money: number) {
//   }
//   getName() {
//     return this.name;
//   }
//   getAge() {
//     return this.age;
//   }
//   getMoney() {
//     return this.money;
//   }
// }

// class Child extends Father {
//   desc() {
//     // console.log(this.name, this.age, this.money); //属性“money”为私有属性，只能在类“Father”中访问
//   }
// }

// let child = new Child('black', 10, 100);
// child.name;
// child.age; // 属性“age”受保护，只能在类“Father”及其子类中访问

/**
 * 静态方法和静态属性
 */
// class Father {
//   static className = 'Father';
//   static getClassName() {
//     return Father.className;
//   }
// }
// console.log(Father.className);
// console.log(Father.getClassName());

// class Child extends Father {
// }
// console.log(Child.className);
// console.log(Child.getClassName());


/**
 * 类的类型
 * 类型 type
 * 值 value
 */
class Person {
  name: string;
}
let p: Person = {name: 'xxx'}

export {};