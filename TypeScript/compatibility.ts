interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  gender: number;
}

function getName(animal: Animal): string {
  return animal.name;
}

let person: Person = {
  name: 'black',
  age: 10,
  gender: 0
}

let name = getName(person);

/**
 * 函数参数的双向协变
 * 当比较函数参数的类型的时候，只有当源函数参数能够赋值给目标函数 或者反过来才能赋值成功
 */
let sourceFunc = (args: number | string) => {}
let target1Func = (args: number) => {}
let target2Func = (args: number | string | boolean) => {}
/**
 * strictFunctionTypes: false
 */
sourceFunc = target1Func;
sourceFunc = target2Func;

 
export {};