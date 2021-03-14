const curry = (fn, ...args) => {
  return args.length >= fn.length ?
    fn(...args)
    : (..._args) => curry(fn, ...args, ..._args);
}
  

function add1(x, y, z) {
  return x + y + z;
}
let add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));