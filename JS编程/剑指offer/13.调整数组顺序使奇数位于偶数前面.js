/* 
    输入一个整数数组， 实现一个函数来调整该数组中数字的顺序， 使得所有的奇数位于数组的前半部分， 所有的偶数位于位于数组的后半部分， 并保证奇数和奇数， 偶数和偶数之间的相对位置不变。
*/

function reOrderArray(array) {
    // write code here
    let arr1 = []
    let arr2 = []
    array.forEach( (element) => {
        if(element%2 === 0) {
            arr2.push(element)
        } else {
            arr1.push(element)
        }
    })

    return arr1.concat(arr2)
}

console.log(reOrderArray([1,2,3,4,5,6]))