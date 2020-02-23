// 如果一个TS文件里有export或者import语句，ts会把他当做一个模块处理。
// 里面的变量都是私有变量，不会命名冲突
export {}

let name: string = 'hello';
let age: number;
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

/**
 * 元组 tuple
 * 类型和数量是固定的
 * 1. 数组的每一项的类型的都是固定的， 元组每一项类型都是随意的
 * 2. 数组长度是不限定的 元组长度是固定的
 * 3. 数组用于标识一个列表，元组一般用于表示固定结构
 */
let position: [number, number] = [100, 100];
let person: [string, number] = ['black', 18];


/**
 * enum 枚举
 */
enum Gender {
  BOY,
  GIRL
}
console.log(Gender.BOY);
console.log(Gender[0]);

/**
 * 常量枚举
 */
const enum Color {
  RED,
  YELLOW
}
console.log(Color.RED);
// 不能 console.log(Color[0]);

/**
 * any 类型
 * 使用 any 等于放弃了类型检查 
 */
let root: HTMLElement | null = document.getElementById('root');

/**
 * 1. 强转成any 断言成any
 * 2. 非空断言 !代表肯定不为null
 */
(root as any).style.color = 'red';
root!.style.color = 'red';

/**
 * null 和 undefined
 * null 和 undefined 是其他类型的子类型，可以赋值给其他类型
 * strictNullChecks=false, 才能赋值给任何类型
 */
let str: string;
str = null;
str = undefined;

/**
 * void
 * 表示没有任何类型
 * strictNullChecks=false, 一个函数的返回值为 void， 可以返回 null
 */
function greeting(name: string): void {
  return undefined;
}

/**
 * nerver 是null 、undefined 的子类型，代表不会出现的值
 * 1. 函数中间抛了异常
 * 2. 函数里有死循环
 */
function getName(): never {
  let a = 1;
  // 如果一个函数中间抛了异常，函数无法正常结束
  throw new Error('can not getName');
}

function count(): never {
  while (true) {
    console.log(1);
  }
}

/**
 * nerver 和 void 区别
 * 1. void 可以被赋值为 null 和 undefined 的类型。nerver 是一个不包含值的类型
 * 2. void 返回值类型的函数能正常运行, never 返回值类型的函数违法正常返回，无法终止，或会抛出异常
 */