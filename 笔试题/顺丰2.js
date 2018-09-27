/**
 * 
 * 1.获取两个字符串中不同的字符（区分大小写，本身字符串中有重复的也要去除）（例：abc与bcd -》 ad）

2.得到的字符根据ASCII码从小到大排序

3.根据第3步的结果生成一个对称字符串（例：abc -》abccba）
 */
function uniqueArray(arr) {
    let retArr = []
    for (var i = 0; i < arr.length; i++) {
        if (retArr.indexOf(arr[i]) < 0) {
            retArr.push(arr[i])
        }
    }
    return retArr
}
function compare(str, str1) {
    let arr1 = str.split('')
    let arr2 = str1.split('')

    let uniqueArr1 = uniqueArray(arr1)
    let uniqueArr2 = uniqueArray(arr2)

    let strArr = []

    uniqueArr1.forEach( function (item) {
        if(uniqueArr2.indexOf(item) < 0) {
            strArr.push(item)
        }
    })
    uniqueArr2.forEach(function (item) {
        if (uniqueArr1.indexOf(item) < 0) {
            strArr.push(item)
        }
    })
    strArr.sort( function(a, b) {
        return a.charCodeAt() - b.charCodeAt()
    })
    console.log(strArr.join('')+strArr.reverse().join(''))
}


compare("acd", "bce")