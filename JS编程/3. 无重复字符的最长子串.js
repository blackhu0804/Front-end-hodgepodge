/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let index = arr.indexOf(s[i]);
    if (index >= 0) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i]);

    maxLength = Math.max(arr.length, maxLength);
  }

  return maxLength; 
};

console.log(lengthOfLongestSubstring('dvdf'))