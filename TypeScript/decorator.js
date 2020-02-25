"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * 装饰器
 */
// 类装饰器在类之前声明， 用来监视、修改或替换类的定义
/**
 * 如果用来装饰一个类
 * @param target [Function: Person] 类的构造函数
 */
function enhancer(target) {
    console.log(target);
    target.prototype.name = 'xxx';
    target.prototype.getName = function () {
        console.log(this.name);
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person = __decorate([
        enhancer
    ], Person);
    return Person;
}());
var p = new Person();
// TS 报错提示 类型“Person”上不存在属性“name”
console.log(p.name);
p.getName();
function connect(target) {
    return /** @class */ (function () {
        function class_1() {
            this.name = 'hello';
        }
        return class_1;
    }());
}
var App = /** @class */ (function () {
    function App() {
    }
    App = __decorate([
        connect
    ], App);
    return App;
}());
var app = new App();
// 相当于替换了一个新的类
console.log(app.name);
/**
 * 属性装饰器
 */
var b;
(function (b) {
    // 类的属性装饰器, 两个参数 1.target是类的原型对象，2.propertyKey是属性的名字
    function upperCase(target, propertyKey) {
        console.log(arguments);
    }
    var Person = /** @class */ (function () {
        function Person() {
            this.name = 'black';
        }
        __decorate([
            upperCase
        ], Person.prototype, "name");
        return Person;
    }());
})(b || (b = {}));
