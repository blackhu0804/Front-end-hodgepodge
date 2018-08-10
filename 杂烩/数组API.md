## 会改变原数组的方法：

1. ### `push() `在尾部添加一个或多个元素，并返回数组长度

   ```javascript
   let arr = [1, 2, 3]
   arr.push('a', 'b') // 5
   console.log(arr) // [1, 2, 3, "a", "b"]
   ```

   

2. ### `pop()`方法删除数组的最后一个元素，返回删除的元素

   ```javascript
   //组合使用push()和pop()能够用JavaScript数组实现先进后出的栈
   let arr2 = ['a', 'b', 'c']
   arr2.pop() // "c"
   console.log(arr2) // ["a", "b"]
   ```

   

3. ### `unshift()` 方法在头部添加一个或多个元素，返回数组的长度

   ```javascript
   let arr3 = ['a', 'b', 'c']
   arr3.unshift(1, 2) // 5
   console.log(arr3)  // [1, 2, "a", "b", "c"]
   ```

   

4. ### `shift()`方法删除数组的第一个元素，返回删除的元素

   ```javascript
   let arr4 = ['a', 'b', 'c']
   arr4.shift() // 'a'
   console.log(arr4) // ['b', 'c']
   ```

   

5. ### `splice()`方法是在数组中插入或删除元素的通用方法,返回删除的元素

   ```javascript
   let arr5 = [1, 2, 3, 4, 5]
   arr5.splice(2, 3, 'a','b') // [3, 4, 5]
   console.log(arr5); // [1, 2, "a", "b"]
   ```

   

6. ### `sort()`方法将数组的元素排序并返回排序后的数组

   ```javascript
   let arr6 = [2, 34, 123, 11, 32]
   arr6.sort() // [11, 123, 2, 32, 34]
   // 排序出现问题，因为数组的sort 函数是通过字典序排序，所以
   arr6.sort( (a, b) => {
       return a - b
   }) // [2, 11, 32, 34, 123]
   ```

   

7. ### `reverse()` 方法将数组的元素颠倒顺序，返回逆序的数组

   ```javascript
   arr6.reverse() // [123, 34, 32, 11, 2]
   ```

   

8. ### `copyWithin()`方法浅复制数组的一部分到同一个数组的另一个位置，并返回它，而不修改其大小

   三个参数，第一个参数代表开始修改的位置，第二个参数代表作为替换元素的起始位置,第三个元素代表替换元素的结束位置。

   ```javascript
   [1, 2, 3, 4, 5].copyWithin(-2);
   // [1, 2, 3, 1, 2]
   
   [1, 2, 3, 4, 5].copyWithin(0, 3);
   // [4, 5, 3, 4, 5]
   
   [1, 2, 3, 4, 5].copyWithin(0, 3, 4);
   // [4, 2, 3, 4, 5]
   
   [1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
   // [1, 2, 3, 3, 4]
   ```

   

9. ### `fill()`用固定值填充一个数组

   三个参数，第一个代表填充数组的值，第二个开始的索引，第三个终止索引。

   ```javascript
   [1, 2, 3].fill(4);               // [4, 4, 4]
   [1, 2, 3].fill(4, 1);            // [1, 4, 4]
   [1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
   ```

   

## 不改变原数组的方法

1. ### `slice() ` 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新的数组对象，原数组不会被修改。

   ```javascript
   let ary = [1, 2, 3]
   ary.slice(0, 2) // [1, 2]
   ```

   

2. ### `join()` 方法将数组中所有元素转换为字符串并连接在一起

   ```javascript
   let ary2 = ['a', 'b', 'c']
   ary2.join('=') // "a=b=c"
   ```

   

3. ### `toString()` 方法将数组的每个元素转换为字符串

   ```javascript
   let ary3 = ['a', 'b', 'c', 1, 2]
   ary3.toString() // "a,b,c,1,2"
   ```

   

4. ### `concat()` 方法用于合并两个或多个数组，此方法不改变现有数组，返回一个新数组

   ```javascript
   ary2.concat(ary3)
   // ["a", "b", "c", "a", "b", "c", 1, 2]
   ```

   

5. ### `isArray()` 用于确定传递的值是否是一个 Array。

   ```javascript
   arr instanceof Object // true
   arr instanceof Array // true
   
   // 为了解决上面出现的情况，数组可使用 isArray() 方法进行判断
   Array.isArray(arr) // true
   Array.isArray({}) // false
   ```

   

    

## 数组遍历、映射、过滤、检测、简化等方法 

1. ### forEach() 方法从头到尾遍历数组，为每个元素调用指定的函数。

   ```javascript
   let a = ['a', 'b', 'c']
   a.forEach( (item, index, a) => {
       console.log(index, item)
   })
   /* 
    0 "a"
    1 "b"
    2 "c"
   */
   ```

   

2. ### map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个callback函数后返回的结果。

   ```javascript
   let a2 = [1, 2, 3]
   let double = a2.map( (item, index,a2) => {
       return item*2
   })
   console.log(double) // [2, 4, 6]
   ```

   

3. ### filter() 方法返回的数组元素是调用的数组的一个子集。传入的函数时用来逻辑判定的，该函数返回 true 或 false,如果返回值为true或能转化为true的值，那么传递给判断函数的元素就是这个子集的成员，它将被添加倒一个作为返回值的数组中。

   ```javascript
   let number = [1, 2, 3, 4, 5, 6];
   let small = number.filter((value, index, number) => {
       return value < 4 && index % 2 ===0;
   })
   console.log(small); // [1, 2, 3]
   ```

   

4. ### every() 方法测试数组的所有元素是否都通过了指定函数的测试。当且仅当针对数组中的所有元素调用判定函数都返回true，它才返回true。

   返回一个布尔值，当所有的元素都符合条件才返回true，否则返回false 

   ```javascript
   let a3 = [1, 2, 4, 10, 23]
   let result = a3.every( (element, index, a3) => {
       return element > 3
   })
   console.log(result) // false
   ```

   

5. ### some() 方法测试数组中的某些元素是否通过由提供的函数实现的测试。当数组中至少有一个元素调用判定函数返回true，它就返回true

   返回一个布尔值，当有一个元素符合条件就返回true，否则返回false 

   ```javascript
   let result2 = a3.some( (element, index, a3) => {
       return element > 3
   })
   console.log(result2) // true
   ```

   

6. ### reduce() 和 reduceRight() 这两个方法使用指定的函数将数组元素进行组合，生成单个值。

   **返回值：** 函数累计处理的结果 

   ```javascript
   let a4 = ['a', 'b', 'c']
   let a4str = a4.reduce( (a, b) => {
       return a + b
   })
   console.log(a4str) // abc
   
   // reduceRight() 是反方向
   let a4str2 = a4.reduce( (a, b) => {
       return a + b
   }) // cba
   ```

   

7. ### indexof() 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

   返回 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1 。第二个参数代表开始查找的位置

   ```javascript
   let a5 = [1, 4, 5, 8]
   a5.indexOf(1) // 0
   a5.indexOf(4, 2) // -1
   a5.indexOf(5, 1) // 2
   ```

   

8. ### lastIndexOf() 跟indexOf()查找方向相反，方法返回指定元素在数组中的最后一个的索引，如果不存在则返回 -1。

   返回数组中最后一个符合元素的索引，如未找到返回-1 

   ```javascript
   let array = [2,5,9,2];
   array.lastIndexOf(7) // -1
   array.lastIndexOf(2,4) // 3
   array.lastIndexOf(2,3) // 3
   ```

   

9. ###  includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。

   解决不能查找 NaN的问题,返回一个布尔值，根据情况，如果包含则返回 true，否则返回false。 

   ```javascript
   [1, 2, 3].includes(2);     // true
   [1, 2, 3].includes(4);     // false
   [1, 2, NaN].includes(NaN); // true
   ```

   

10. ### find() 和 findIndex() find 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。findIndex 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。

    find查找数组中第一个符合条件的值,如果查找到,立即返回,不再向下进行。否则返回 undefined。findIndex会立即返回该元素的索引。如果回调从不返回真值，或者数组的length为0，则findIndex返回-1。 

    ```javascript
    let a = [1, -4, -5, 10].find((n) => n < 0); 
    let b = [1, 4, -5, 10].findIndex((n) => n < 0); // 返回索引2
    ```

    

11. ### keys() 方法返回一个新的Array迭代器，它包含数组中每个索引的键。

    ```javascript
    var array1 = ['a', 'b', 'c'];
    var iterator = array1.keys(); 
      
    for (let key of iterator) {
      console.log(key); // expected output: 0 1 2
    }
    ```

    

12. ### values() 方法返回一个新的Array迭代器，它包含数组中每个索引的值。 

    ```javascript
    let iterator2 = array1.values()
    for (const item of iterator2) {
        console.log(item) // a b c
    }
    ```

    

13. ### entries() 方法返回一个新的Array迭代器，该对象包含数组中每个索引的键/值对。

```javascript
let iterator3 = array1.entries()
for (const item of iterator3) {
    console.log(item)
}
// [0, "a"]
// [1, "b"]
// [2, "c"]
```