/* 
  实现函数 callIt， 调用之后满足如下条件
  1、 返回的结果为调用 fn 之后的结果
  2、 fn 的调用参数为 callIt 的第一个参数之后的全部参数
*/

function callIt(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1))
}