const fs = require('fs')
const zlib = require('zlib')

// 压缩input 文件
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))
console.log('文件压缩完成')