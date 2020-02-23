/**
 * 类 class
 *
 * getter setter
 * 通过读存取器可以改变一个类中属性的读取和赋值的行为
 */
// class Person {
//   name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animal = /** @class */ (function () {
    function Animal() {
        // 这个属性是定义在类的实例上
        this.name = 'black';
    }
    return Animal;
}());
/**
 *  继承
 *  属性定义在实例上，方法定义在原型上
 */
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentNo) {
        var _this = _super.call(this, name, age) || this;
        _this.studentNo = studentNo;
        return _this;
    }
    Student.prototype.getStudentNo = function () {
        return this.studentNo;
    };
    Student.prototype.setStudentNo = function (studentNo) {
        this.studentNo = studentNo;
    };
    return Student;
}(Person));
