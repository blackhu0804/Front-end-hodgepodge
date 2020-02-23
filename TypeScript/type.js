"use strict";
exports.__esModule = true;
var name = 'hello';
var age;
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
/**
 * 元组 tuple
 * 类型和数量是固定的
 * 1. 数组的每一项的类型的都是固定的， 元组每一项类型都是随意的
 * 2. 数组长度是不限定的 元组长度是固定的
 * 3. 数组用于标识一个列表，元组一般用于表示固定结构
 */
var position = [100, 100];
var person = ['black', 18];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log(Gender.BOY);
console.log(Gender[0]);
console.log(0 /* RED */);
// 不能 console.log(Color[0]);
/**
 * any 类型
 * 使用 any 等于放弃了类型检查
 */
var root = document.getElementById('root');
/**
 * 1. 强转成any 断言成any
 * 2. 非空断言 !代表肯定不为null
 */
root.style.color = 'red';
root.style.color = 'red';
/**
 * null 和 undefined
 * null 和 undefined 是其他类型的子类型，可以赋值给其他类型
 * strictNullChecks=false, 才能赋值给任何类型
 */
var str;
str = null;
str = undefined;
/**
 * void
 * 表示没有任何类型
 * strictNullChecks=false, 一个函数的返回值为 void， 可以返回 null
 */
function greeting(name) {
    return undefined;
}
/**
 * nerver 是null 、undefined 的子类型，代表不会出现的值
 * 1. 函数中间抛了异常
 * 2. 函数里有死循环
 */
function getName() {
    var a = 1;
    // 如果一个函数中间抛了异常，函数无法正常结束
    throw new Error('can not getName');
}
function count() {
    while (true) {
        console.log(1);
    }
}
/**
 * nerver 和 void 区别
 * 1. void 可以被赋值为 null 和 undefined 的类型。nerver 是一个不包含值的类型
 * 2. void 返回值类型的函数能正常运行, never 返回值类型的函数违法正常返回，无法终止，或会抛出异常
 */
/**
 * 类型断言
 */
var name2;
name2 = 'black';
console.log(name2.length);
name2 = 18;
console.log(name2.toFixed(2));
/**
 * 字面量类型
 */
var value;
// 不能将其他值赋给value
value = 1;
value = 3;
