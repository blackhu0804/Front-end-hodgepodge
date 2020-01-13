const fs = require('fs');
const path = require('path');


// 如果带 / 的话 直接使用join， 如果用resolve 解析，会回到根目录
let absPath = path.resolve(__dirname, 'a.js'); // 当前文件的绝对路径
let joinPath = path.join(__dirname, 'a.js', '/');

console.log(absPath);
console.log(joinPath);

if (fs.existsSync(__dirname, 'a.js')) {
  let str = fs.readFileSync(path.resolve(__dirname, 'a.js'), 'utf8');
  console.log(str);
}

// 扩展名
console.log(path.extname('a.ks'));

// 基础名
console.log(path.basename('a.js', '.js'));

/**
 * 让一个字符串执行 vm 虚拟机模块
 */
const vm = require('vm');
let a = 1;
// 沙箱环境
vm.runInThisContext('console.log(a)'); //ReferenceError: a is not defined