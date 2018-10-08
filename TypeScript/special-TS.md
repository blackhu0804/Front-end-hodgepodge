# TypeScript 的一些特性

## 函数重载

TypeScript 提供函数重载的功能，用来处理因函数参数不同而返回类型不同的使用场景，使用时，只需为同一个函数定义多个类型即可，简单使用如下所示：

```typescript
declare function test(a: number): number;
declare function test(a: string): string;

const resS = test('Hello World');  // resS 被推断出类型为 string；
const resN = test(1234);           // resN 被推断出类型为 number;
```

