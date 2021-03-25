/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//   let i = 0;
//   let j = matrix.length - 1;

//   while (i < j) {
//     let subLen = matrix[0].length - 1;
//     let mid = Math.floor(( i + j ) / 2);
//     if(target > matrix[mid][subLen]) {
//       i = mid + 1;
//     } else {
//       j = mid;
//     }
//   }

//   let targetArr = matrix[i];

//   return targetArr.includes(target);
// };

var searchMatrix = function(matrix, target) {
  matrix = matrix.flat();

  return matrix.includes(target);
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 10))