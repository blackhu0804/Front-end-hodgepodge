module.exports = () => {
  return async (ctx, next) => {
    ctx.request.body = await new Promise((resolve, reject) => {
      let arr = [];
      ctx.req.on('data', function(chunk) {
        arr.push(chunk);
      });

      ctx.req.on('end', function() {
        if (arr.length === 0) {
          resolve();
        }
        resolve(Buffer.concat(arr).toString());
      });
    });

    return next();
  }
}