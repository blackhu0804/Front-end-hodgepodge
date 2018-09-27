/**
 * 
 * @param {*} str 
 * 设计一个函数，传入一串字符串（如下例子所示），转义为数组，除去数组中最后一位数字作为标杆值，取数组中任意符合两个数相加为标杆值的下标，输出所有符合要求的下标的和。

如下解释：

value ： 0 ,1,5,11,17,16,2,5,10,30, 12

index : 1 3  6  8 

输出结果为18
 */
function exam(str) {
    var arr = str.split(',')
    var key = arr.pop()
    var length = arr.length
    var retArr = []
    var sum = 0
    for(var i = 0; i < length;i++) {
        for(var j = length - 1; j > i;j--) {
            if (parseInt(arr[i]) + parseInt(arr[j]) === parseInt(key)) {
                retArr.push(i,j)
            }
        }
    }
    retArr.forEach( item => {
        sum += item
    })
    return sum
}
console.log(exam('0, 1, 5, 11, 17, 16, 2, 5, 10, 30, 12'))