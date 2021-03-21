/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      if (map[t[i]] === 1) {
        delete map[t[i]];
      } else {
        map[t[i]]--;
      }
    } else {
      return t[i];
    }
  };

  return Object.entries(map)[0];
};