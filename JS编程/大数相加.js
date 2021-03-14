function add(a, b) {
  let maxLength = Math.max(a.length, b.length);

  a = String(a).padStart(maxLength, 0);
  b = String(b).padStart(maxLength, 0);

  let lastNum = 0;
  let flag = 0;
  let sum = '';

  for (let i = maxLength - 1; i >= 0; i--) {
    lastNum = Number(a[i]) + Number(b[i]) + flag;
    flag = Math.floor(lastNum / 10);
    sum = lastNum%10 + sum;
  }

  if (flag >= 1) {
    sum = flag + sum;
  }

  return sum;
}

console.log(add('9007199254740991', '1234567899999999999'))