// 输入一个整数，如果能够被3整除，则输出 Fizz
// 如果能够被5整除，则输出 Buzz
// 如果既能被3整数，又能被5整除，则输出 FizzBuzz

const FizzBuzz = (num) => {
    return `${!(num%3) ? 'Fizz' : ''}${!(num%5) ? 'Buzz' : ''}`
}

console.log(FizzBuzz(3))
console.log(FizzBuzz(5))
console.log(FizzBuzz(15))