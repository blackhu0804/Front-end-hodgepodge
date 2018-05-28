/* 
    输入一个整数， 输出该数二进制表示中1的个数。 其中负数用补码表示。
*/

function NumberOf1(n) {
    if(typeof n !== 'number') {
        return 
    } else {
        if (n < 0) {
            n = n >>> 0
        }

        var twoNumber = n.toString(2)
        console.log(twoNumber)
        var count = 0
        for(var i = 0; i < twoNumber.length;i++) {
            if(twoNumber[i] === '1') {
                count += 1
            }
        }
        console.log(count)       
    }
}
NumberOf1(1)