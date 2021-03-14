/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    if (map[strs[i].split('').sort().join()]) {
      map[strs[i].split('').sort().join()].push(strs[i]);
    } else {
      map[strs[i].split('').sort().join()] = [strs[i]];
    }
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))