var lengthOfLastWord = function(s) {
  let end = s.length - 1;
  console.log(end);
  while(end > 0 && s[end] === ' ') {
    end--;
  }
  if(end < 0) return 0;
  let start = end;
  while(start >= 0 && s[start] !== ' ') {
    start--;
  }
  console.log(end-start);
  return end - start;
};

lengthOfLastWord('a')
