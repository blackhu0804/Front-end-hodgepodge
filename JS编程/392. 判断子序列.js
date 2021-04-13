/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) > -1) {
      t = t.substring(t.indexOf(s[i]) + 1)
    } else {
      return false;
    }
  }

  return true;
};

console.log(isSubsequence("abc", "ahbgdc"))