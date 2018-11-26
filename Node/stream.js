const fs = require('fs')
const zlib = require('zlib')
var data = ''

// 创建可读流
var readerStream = fs.createReadStream('input.txt')

readerStream.on('data', function(chunk) {
    data += chunk
})

// 创建一个可以写入的流
var writerStream = fs.createWriteStream('output.txt')

// 讲input读取的内容写入到output中，使用管道流
readerStream.pipe(writerStream)

writerStream.on('finish', function() {
    console.log('写入ouput成功')
})
readerStream.on('end', function() {
    console.log(data)
})
readerStream.on('error', function() {
    console.log(err.stack)
})
console.log('程序执行完毕')