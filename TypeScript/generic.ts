/**
 * 泛型
 */
function createArray<T> (length: number, value: T): Array<T> {
  let result: T[] = [];
  for(let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

let result = createArray<string>(3, 'x');
console.log(result);

/**
 * 类数组
 */
function sum(...rest: any[]) {
  let args: IArguments = arguments;
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
sum(1, 2, 3);

/**
 * 泛型类
 */
class myArray<T> {
  private list: T[] = [];
  add(value: T) {
    this.list.push(value);
  }
  getMax() {
    let result: T = this.list[0];
    for(let i = 1; i < this.list.length; i++) {
      if (this.list[i] > result) {
        result = this.list[i];
      }
    }
    return result;
  }
}

let array = new myArray<number>();
array.add(1);
array.add(2);
array.add(3);
console.log(array.getMax());

/**
 * 泛型接口 
 * 可以用来约束函数
 */
interface Calculate {
  <T>(a: T, b: T): T
}
const add: Calculate = function <T>(a: T, b: T) {
  return a;
}

add<number>(1, 2);

/**
 * 多个类型函数
 */
function swap<A, B> (tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}

let result2 = swap<string, number>(['a', 1]);
console.log(result2);


/**
 * 泛型的约束
 */
interface lengthWise {
  length: number
}
function logger<T extends lengthWise> (val: T) {
  console.log(val.length);
}

/**
 * 泛型接口
 */
interface Cart<T> {
  list: T[]
}
interface Product {
  id: number,
  name: string
}
let cart:Cart<Product> = {
  list: [{id: 1, name: 'xxx'}]
}