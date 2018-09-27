/**
 * 
 * @param {*} str 
 * 将字符串转化为ASCII码值。并逆序输出。
 */
function str2ASCII(str) {
    let array = str.split('')
    let ASCIIArr = []
    let result = ''
    array.forEach( item => {
        ASCIIArr.push(item.charCodeAt())
    })
    ASCIIArr.sort((a, b) => {
        return a - b;
    })
    ASCIIArr.reverse()
    return ASCIIArr
}

console.log(str2ASCII('hello world'))