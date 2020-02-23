"use strict";
exports.__esModule = true;
// 函数定义
function hello(name) {
    console.log('hello', name);
}
hello('black');
var getName = function (firstName, lastName) {
    return firstName + lastName;
};
var result = getName('black', 'hu');
console.log(result);
// 没有返回值
function hello2() {
    return undefined;
}
// 可选参数
function log(name, age) {
    console.log(name, age);
}
log('black', 18);
log('black');
// 默认参数
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('/baidu.com');
// 剩余参数
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; }, 0);
}
console.log(sum(1, 2, 3));
function sum3(a, b) {
}
sum3(1, 1);
sum3('a', 'b');
