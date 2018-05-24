/* 
    一只青蛙一次可以跳上1级台阶， 也可以跳上2级。 
    求该青蛙跳上一个n级的台阶总共有多少种跳法。
*/

function jumpFloor(number) {
    if(number <= 1) {
        return number 
    }
    let arr = [1, 1]
    for(var i = 1;i < number;i++) {
        arr.push(arr[i] + arr[i-1])
    }
    return arr[number]
}