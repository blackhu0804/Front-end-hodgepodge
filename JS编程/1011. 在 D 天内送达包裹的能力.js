/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
  let left = Math.max(...weights);
  let right = weights.reduce((cur, pre) => pre + cur);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    let need = 1;
    let cur = 0;
    for (let weight of weights) {
      if (cur + weight > mid) {
        need++;
        cur = 0;
      }
      cur += weight;
    }

    if (need <= D) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

console.log(shipWithinDays([1,2,3,1,1], 4));