/**
 * https://leetcode-cn.com/problems/longest-palindrome/submissions/
 * 
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let numObj = {};
  for (let i = 0; i < s.length; i++) {
    if (!numObj[s[i]]) {
      numObj[s[i]] = 1;
    } else {
      numObj[s[i]]++;
    }
  }
  let len = 0;
  let flag = false;
  for (let i in numObj) {
    if (numObj[i]%2 === 1) {
      flag = true;
    }
    len += Math.floor(numObj[i]/2) * 2;
  }
  if (flag) len++;
  
  return len;
};

console.log(longestPalindrome('abccccdd'))