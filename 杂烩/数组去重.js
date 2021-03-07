/**
 * 双层遍历
 */
function unique(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        break;
      }
    }
    if (j === result.length) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(unique([1, 1, '1', {}, {}, NaN, NaN])) // 对象和 NaN 不去重

/**
 * indexOf 改造
 * @param {*} arr 
 */
function unique1(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) < 0) {
      result.push(arr[i]);
    }
  }

  return result;
}
console.log(unique1([1, 1, '1', {}, {}, NaN, NaN])) // 对象和 NaN 不去重

/**
 * ES6 Set
 */
function unique2(arr) {
  return [...new Set(arr)];
}
console.log(unique2([1, 1, '1', {}, {}, NaN, NaN])) // 对象 不去重

/**
 * 对象键值对
 */
function unique3(array) {
  var obj = {};
  return array.filter(function(item, index, array){
    return obj[typeof item + JSON.stringify(item)] ? false : (obj[typeof item + JSON.stringify(item)] = true)
  })
}
console.log(unique3([1, 1, '1', {}, {}, NaN, NaN])) // 对象 不去重
