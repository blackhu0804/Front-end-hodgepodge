function memoize(fun) {
    let res = fun()
    return function () {
        console.log(res)
    }
}
A = function () {
    console.log('execting')
    return 'output'
}
B = memoize(A)
let i = 3
while(i > 0) {
    B()
    i--
}