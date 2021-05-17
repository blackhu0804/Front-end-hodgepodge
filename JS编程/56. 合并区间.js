/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => {
    return a[0] - b[0];
  });

  const result = [];
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i]);
    } else if (intervals[i][1] > result[result.length - 1][1]) {
      result[result.length-1][1] = intervals[i][1];
    }
  }
  return result;
};

console.log(merge([[1,4],[5,6]]));