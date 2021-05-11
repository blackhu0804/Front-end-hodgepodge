/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let flag = 0;
  let result = [];

  while (i >= 0 || j >= 0 || flag !== 0) {
    let n1 = i >= 0 ? +num1[i] : 0;
    let n2 = j >= 0 ? +num2[j] : 0;
    let sum = n1 + n2 + flag;
    result.push(sum % 10);
    flag = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result.reverse().join('');
};

console.log(addStrings('1111', '2222222'));