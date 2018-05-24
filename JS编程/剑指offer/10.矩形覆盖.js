/* 
    我们可以用2 * 1 的小矩形横着或者竖着去覆盖更大的矩形。 
    请问用n个2 * 1 的小矩形无重叠地覆盖一个2 * n的大矩形， 
    总共有多少种方法？
*/

/* 
    斐波那契数列的变形
    n: 1  way: 1
    n：2  way: 2
*/
function rectCover(number) {
    if(number <= 1) {
        return number
    }

    let arr = [1, 1]
    for(let i = 1; i < number; i++) {
        arr.push(arr[i] + arr[i-1])
    }

    return arr[number]
}