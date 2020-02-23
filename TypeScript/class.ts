/**
 * 类 class
 * 
 * getter setter
 * 通过读存取器可以改变一个类中属性的读取和赋值的行为
 */
// class Person {
//   name: string;

//   constructor() {
//     this.name = 'black'
//   }

//   getName(): void {
//     console.log(this.name);
//   }
// }

// class User {
//   myName: string;
//   constructor() {
    
//   }
//   get name(): string {
//     return this.myName;
//   }
//   set name(newValue) {
//     this.myName = newValue.toUpperCase();
//   }
// }

// let user = new User();
// user.name = 'black';
// console.log(user.name);

/**
 * readonly 只读 
 */
class Animal {
  // 这个属性是定义在类的实例上
  public readonly name: string = 'black';
}

/**
 *  继承
 *  属性定义在实例上，方法定义在原型上
 */
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  studentNo: number;
  constructor(name: string, age: number, studentNo: number) {
    super(name, age);
    this.studentNo = studentNo;
  }
  getStudentNo() {
    return this.studentNo;
  }
  setStudentNo(studentNo: number) {
    this.studentNo = studentNo;
  }
}

