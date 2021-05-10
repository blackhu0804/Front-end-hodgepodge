/**
 * 输入：[['a', 'b'], ['n', 'm'], ['0', '1']]      
 * 输出：["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
 */
function test(arr) {
  // if (arr.length < 1) return arr;

  // let cur = [arr[0][0], arr[0][1]];
  // let result = [];
  // for (let i = 1; i < arr.length; i++) {
  //   if (result.length) {
  //     cur = result;
  //     result = [];
  //   }
  //   for (let j = 0; j < arr[i].length; j++) {
  //     for (let z = 0; z < cur.length; z++) {
  //       result.push(cur[z] + arr[i][j]);
  //     }
  //   }
  // }

  let result = arr.shift();
  while (arr.length) {
    let other = arr.shift();
    let newRes = [];

    result.forEach(item => {
      other.forEach(_item => {
        newRes.push(item + _item);
      });
    })
    result = [...newRes];
  }
  return result;
}


console.log(test([['a', 'b'], ['n', 'm'], ['0', '1']] ))