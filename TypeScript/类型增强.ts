interface IPerson {
  name: string;
  age: number;
}

const p1: IPerson = { name: "black", age: 17 };

type AnyPerson = Partial<IPerson>; // Partial<T> 从 T 中选取所有属性变为可选

const p2: AnyPerson = { name: "black" };

type ReadonlyPerson = Readonly<IPerson>; // Readonly<T> 从 T 中选取所有属性变为只读

const p3: ReadonlyPerson = { name: "black", age: 17 };

// 无法分配到 "age" ，因为它是只读属性。
p3.age = 18;

type PickPerson = Pick<IPerson, "name">; // Pick<T, K> 从 T 中选取 K 属性

const p4: PickPerson = { name: "black" };

type RecordPerson = Record<"x" | "y", IPerson>; // Record<K, T> 将 K 中所有属性的值变为 T

const p5: RecordPerson = {
  x: { name: "black", age: 17 },
  y: { name: "black", age: 17 },
};

// ==================== 条件类型 ====================
/**
 * 示例：构建一个类型 Without，计算在 T 中而不在 U 中的类型：
 */
type Without<T, U> = T extends U ? never : T; // 从 T 中剔除可以赋值给 U 的类型

type T1 = Without<string | number | boolean, boolean>; // string | number

// 分析其实现

// 第一步 把条件分配到并集中
// type A =
//   | Without<boolean, boolean>
//   | Without<number, boolean>
//   | Without<string, boolean>;

// // 第二步：代入Without定义，替换T和U
// type A = boolean extends boolean
//   ? never
//   : boolean | number extends boolean
//   ? never
//   : number | string extends boolean
//   ? never
//   : string;

// // 第三步：计算条件
// type A = never | number | string;

// // 第四步：化简
// type A = number | string;

// ==================== infer ====================
// 只能用在条件类型中的extends子句中，且只能在条件类型的true分支下
type T0 = string[];
type T2 = number[];

type UnPackedArray<T> = T extends (infer U)[] ? U : T;

type U0 = UnPackedArray<T0>; // string
type U1 = UnPackedArray<T2>; // number

// 函数返回的类型
declare function foo(x: string): number;

type UnPackedFn<T> = T extends (...args: any[]) => infer U ? U : T;

type FooReturnType = UnPackedFn<typeof foo>; // number

// ================== 内置的条件类型 ==================
// 1. Exclude<T, U> 计算在T不在U中的类型
type A1 = number | string;
type B1 = number;
type C1 = Exclude<A1, B1>; // string

// 2. Extract<T, U> ： 计算T中可赋值给U的类型
type A2 = number | string;
type B2 = string;
type C2 = Extract<A2, B2>; // string

// 3. NonNullable<T> ： 从T中排除null和undefined
type A3 = { a?: number | null };
type B3 = NonNullable<A3["a"]>; // number

// 4. ReturnType<T> ： 获取函数返回值类型
type A4 = ReturnType<() => string>; // string

// ==================== 安全扩展类型 ====================
// JS 允许在运行时修改内置方法，如： [].push 、 'abc'.toUpperCase 等，其每一个内置对象的原型都可以直接访问，包括 Array.prototype 、Object.prototype 等。
// 扩展 JS 的原型是不安全的，但是 TS 提供了静态类型系统，可以安全地对原型进行扩展：
interface Array<T> {
  zip<U>(arr: U[]): Array<[T, U]>;
}

Array.prototype.zip = function <T, U>(arr: U[]): Array<[T, U]> {
  return this.map((item, index) => [item, arr[index]]);
};
