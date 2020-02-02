const fs = require('fs').promises;
const path = require('path');
const {createReadStream} = require('fs');
const mime = require('mime');

module.exports = (root) => {
  return async (ctx, next) => {
    let absPath = path.join(root, ctx.path);
    try {
      let statObj = await fs.stat(absPath);
      if (statObj.isDirectory()) {
        absPath = path.join(absPath, 'index.html');
        await fs.access(absPath);
      } 
      ctx.set('Content-Type', mime.getType(absPath)+';charset=utf-8');
      ctx.body = createReadStream(absPath);
    } catch(e) {
      await next();
    }
  }
}