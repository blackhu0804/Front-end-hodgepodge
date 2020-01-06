let fs = require('fs');

let template = fs.readFileSync('./index.html', 'utf8');

function render(template, renderObj) {
  let head = 'let str ="" \r\n with(obj){ \r\n str=` \r\n';
  
  template = template.replace(/<%=(.+?)%>/g, function () {
    return '${'+arguments[1]+'}';
  })

  let content = template.replace(/<%(.+?)%>/g, function () {
    return '`\r\n' + arguments[1] + '\r\nstr+=`';
  });
  let tail = '`\r\n}\r\n return str'
  return new Function('obj', head + content + tail)(renderObj).toString();
}

let r = render(template, {arr: [1, 2, 3]});

console.log(r);