export {};
// 函数定义
function hello(name: string): void {
  console.log('hello', name);
}
hello('black');

// 函数表达式
type getNameType = (x: string, y: string) => string;
let getName: getNameType = function (firstName: string, lastName: string) {
  return firstName + lastName;
}
let result = getName('black', 'hu');
console.log(result);

// 没有返回值
function hello2(): void {
  return undefined;
}

// 可选参数
function log(name: string, age?: number): void {
  console.log(name, age);
}
log('black', 18);
log('black');

// 默认参数
function ajax(url: string, method: string = 'GET') {
  console.log(url, method);
}
ajax('/baidu.com');

// 剩余参数
function sum(...numbers: Array<number>) {
  return numbers.reduce((a, b) => a+b, 0);
}
console.log(sum(1, 2, 3));

/**
 * 函数的重载
 * 同名函数不同的参数
 */
function sum3(a: string, b: string): void;
function sum3(a: number, b: number): void;
function sum3(a: any, b: any): void {
  
}
sum3(1, 1);
sum3('a', 'b');