/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;

  let result = Math.min(height[i], height[j]) * (j - i);

  while(i < j) {
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }

    result = Math.max(Math.min(height[i], height[j]) * (j - i), result);
  }

  return result;
};