var input = readline()
var num = input.split(' ')
var start = Number(num[0])
var end = Number(num[1])
function getNum(a, b) {
    var sum = 0
    for (var i = a; i <= b; i++) {
        var str = i.toString()
        if (str.charAt(0) === str.charAt(str.length - 1)) {
            sum++
        }
    }
    console.log(sum)
}
getNum(start, end)