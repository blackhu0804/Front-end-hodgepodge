/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length;

  let left = 0;
  let right = 0;
  let maxLen = 0;
  while (right <= s.length) {
    let cur = s.substring(left, right);
    maxLen = Math.max(maxLen, right - left);
    if (cur.indexOf(s[right]) < 0) {
      right++;
    } else {
      left++;
    }
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring('au'))