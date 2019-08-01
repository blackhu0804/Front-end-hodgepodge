/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result;
  if(x >= 0){
    result = Number(String(x).split('').reverse().join(''))
  }else{
    result = Number('-'+Number(String(x).substring(1).split('').reverse().join('')))
  }
  if(result >= Math.pow(-2,31)&&result <= Math.pow(2,31)-1){
    return result
  }else{
    return 0
  }
};