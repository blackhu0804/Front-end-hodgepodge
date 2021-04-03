/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  let even = position.filter(item => item % 2 === 0).length;
  let odd = position.length - even;

  return Math.min(even, odd);
};