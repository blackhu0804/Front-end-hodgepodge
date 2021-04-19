/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  return quickSort(nums)[k-1];
};

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let index = Math.floor(arr.length / 2);
  let val = arr.splice(index, 1)[0];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > val) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), val, ...quickSort(right)];
}