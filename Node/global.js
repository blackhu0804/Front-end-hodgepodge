/**
 * global 全局对象 
 * 不声明可以直接使用的
 */

// console.log(process.argv.slice(2));

// let options = process.argv.slice(2).reduce((meno, current, index, arr) => {
//   if (current.startsWith('--')) {
//     meno[current.slice(2)] = arr[index + 1];
//   }
//   return meno;
// }, {});

// console.log(options);

/**
 * commander 使用
 */
const program = require('commander');

program.name('node');
program.usage(['global.js']);
program.option('-p, --port <n>', 'set you port');
program.option('-o, --out <n>', 'set output dir');
program.command('rmdir').action(function () {
  console.log('执行删除命令');
});
program.command('mkdir').action(function () {
  console.log('执行添加命令');
})
let result = program.parse(process.argv);

// console.log(result);