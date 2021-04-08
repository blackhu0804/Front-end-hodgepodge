/**
 * https://www.bilibili.com/video/BV18J411j7Pb/?spm_id_from=333.788.videocard.2
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let len = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = Math.max(getLen(s, i, i), getLen(s, i, i+1));
    if (cur > len) {
      len = cur;
      start = i - Math.floor((cur - 1) / 2);
    }
  }

  return s.substring(start, start + len);
};

function getLen(s, l, r) {
  while(l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }

  return r - l - 1;
}