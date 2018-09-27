// 大数加法
function add(a, b) {
    var arrA = a.split('').reverse();
    var arrB = b.split('').reverse();
    var sum = 0,
        left = 0,
        overFlow = 0,
        arrSum = [],
        maxLen = Math.max(arrA.length, arrB.length);
    for (var i = 0; i < maxLen; i++) {
        sum = overFlow;
        if (i < arrA.length) {
            sum = sum + Number(arrA[i]);
        }
        if (i < arrB.length) {
            sum = sum + Number(arrB[i]);
        }
        left = sum % 10;
        arrSum[i] = left;
        overFlow = Math.floor(sum / 10);
    }
    if (overFlow !== 0) {
        arrSum[i + 1] = overFlow;
    }
    return arrSum.reverse().join('');
}
console.log(add('183', '131'))