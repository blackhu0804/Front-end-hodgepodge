let EventEmitter = require('events');
let fs = require('fs');

class ReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
    // 初始化默认值
    this.path = path;
    this.flags = options.flags || 'r';
    this.highWaterMark = options.highWaterMark || 64 * 1024;
    this.start = options.start || 0;
    this.end = options.end || undefined;
    this.autoClose = options.autoClose || true;
    
    // 状态 是否需要继续读取 flowing
    this.flowing = false; // 默认为 false
    this.offset = this.start; // 可变的
    // 1. 默认会打开文件， 触发 open 事件
    this.open();
    // 2. 判断用户有没有监听 data 事件， 如果有开始读取 emit('data')
    this.on('newListener', (type) => {
      if (type === 'data') { // 用户监听了 data 事件 
        this.flowing = true;
        this.read();
      }
    })
    // 3. 如果当前 flowing 为 true 继续读取
    // 4. 如果读取不到内容 触发 end 和 close 事件
  }

  /**
   * 销毁当前可读流
   * @param {*} err 
   */
  destory (err) {
    if (err) {
      this.emit('error', err);
    }
    if (this.autoClose) {
      if (typeof this.fd === 'number') {
        fs.close(this.fd, () => {
          this.emit('close');
        })
      }
    }
  }

  // 通过发布订阅监听
  read () { // 需要文件打开后读取
    if (typeof this.fd !== 'number') {
      // 等待当前文件打开
      return this.once('open', this.read);
    }
    // 读取
    let buffer = Buffer.alloc(this.highWaterMark);
    fs.read(this.fd, buffer, 0, this.highWaterMark, this.offset, (err, byteRead) => {
      if (err) {
        return this.destory();
      }
      this.offset += byteRead;

      // 如果读取不到数据 结束
      // if (byteRead < this.highWaterMark){
      if (byteRead === 0){
        return this.emit('end');
      } else {
        this.emit('data', buffer.slice(0, byteRead));
      }
      // 如果是流动模式 继续读取
      if (this.flowing) this.read();
    });
  }

  /**
   * 打开文件
   */
  open() {
    fs.open(this.path, this.flags, (err, fd) => {
      if (err) {
        return this.destory();
      }
      this.fd = fd;
      this.emit('open', this.fd);
    })
  }

  /**
   * 暂停 data
   */
  pause () {
    this.flowing = false;
  }

  /**
   * 恢复 data 
   */
  resume(){
    if(!this.flowing) {
      this.flowing = true;
      this.read();
    }
  }
} 

module.exports = ReadStream;