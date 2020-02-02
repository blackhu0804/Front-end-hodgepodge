/**
 * 图片上传
 */
const Koa = require("koa");
const static = require("koa-static");
const bodyparser = require("koa-bodyparser");
const fs = require("fs");
const uuid = require("uuid");
console.log(uuid.v4());

Buffer.prototype.split = function(sep) {
  let len = Buffer.from(sep).length;
  let offset = 0;
  let current;
  let arr = [];
  while (-1 !== (current = this.indexOf(sep, offset))) {
    arr.push(this.slice(offset, current));
    offset = current + len;
  }
  arr.push(this.slice(offset));
  return arr;
};

let app = new Koa();

app.use(static(__dirname));
// app.use(bodyparser());

app.use(async ctx => {
  if (ctx.path === "/upload") {
    ctx.body = await new Promise((resolve, reject) => {
      let arr = [];
      ctx.req.on("data", function(chunk) {
        arr.push(chunk);
      });

      ctx.req.on("end", function() {
        let buffer = Buffer.concat(arr);

        let boundary = "--" + ctx.get("content-type").split("=")[1];
        let lines = buffer.split(boundary).slice(1, -1);
        let obj = {};

        lines.forEach(line => {
          let [lineHead, ...body] = line.split("\r\n\r\n");
          lineHead = lineHead.toString();
          let key = lineHead.match(/name="(.+?)"/)[1];
          if (lineHead.includes("filename")) {
            let fileContent = line.slice(lineHead.length + 4, -2);
            let filename = uuid.v4();
            fs.writeFileSync(filename, fileContent);
            obj[key] = {
              url: filename,
              size: fileContent.length
            };
          } else {
            let value = Buffer.concat(body).toString();
            obj[key] = value.slice(0, -2);
          }
          resolve(obj);
        });
      });
    });
  }
});

app.listen(3000);
