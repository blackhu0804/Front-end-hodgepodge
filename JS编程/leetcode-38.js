var countAndSay = function (n) {
  if (n == 1) return '1';

  function say(str) {
    var result_str = '', i = 0; j = 0;
    while(j < str.length) {
      if(str[i] === str[j]) {
        j++;
      } else {
        result_str += (j - i) + '' + str[i]; 
        i = j;
      }
    }
    result_str += (j - i) + "" + str[i]
    return result_str;
  }

  return say(countAndSay(n - 1));
};