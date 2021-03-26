/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  let result = 0;
  let count = 0;
  let arr = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < k; i++) {
    if (arr.includes(s[i])) count++;
  }

  result = count;

  for (let i = k; i < s.length; i++) {
    if (arr.includes(s[i - k])) count--;

    if (arr.includes(s[i])) count++;

    result = Math.max(result, count);
  }

  return result;
};

console.log(maxVowels('abciiidef', 3))
console.log(maxVowels('aeiou', 2))
console.log(maxVowels('leetcode', 3))
console.log(maxVowels('rhythms', 3))