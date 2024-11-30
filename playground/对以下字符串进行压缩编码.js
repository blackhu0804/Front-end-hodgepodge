/**
 * Input: ‘aaaabbbccd’
 * Output: ‘a4b3c2d1’，代表 a 连续出现四次，b连续出现三次，c连续出现两次，d连续出现一次
 */

const encode = (str) => {
    if (!str) return '';

    let res = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            count++;
        } else {
            res += str[i] + count;
            count = 1;
        }
    }

    return res;
}


console.log(encode('aaaabbbccd'))