// 实现 
// sum(1, 2, 3).valueOf(); //6
// sum(2, 3)(2).valueOf(); //7
// sum(1)(2)(3)(4).valueOf(); //10
// sum(2)(4, 1)(2).valueOf(); //9
// sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

function sum(...args) {
    const fn = (...rest) => sum(...args, ...rest);
    fn.valueOf = () => console.log(args.reduce((acc, cur) => acc + cur, 0));

    return fn;
}


sum(1, 2, 3).valueOf(); //6
sum(2, 3)(2).valueOf(); //7
sum(1)(2)(3)(4).valueOf(); //10
sum(2)(4, 1)(2).valueOf(); //9
sum(1)(2)(3)(4)(5)(6).valueOf(); // 21

console.log('=========')

// 不用 valueOf 实现
// //=> 15
// sum(1, 2, 3) + sum(4, 5);
 
// //=> 100
// sum(10) * sum(10);

const sum2 = (...args) => {
    return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(sum2(1, 2, 3) + sum2(4, 5));
console.log(sum2(10) * sum2(10))