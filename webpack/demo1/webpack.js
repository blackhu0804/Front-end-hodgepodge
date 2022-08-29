const webpack = require("webpack");

// function f1() {
//   return webpack({
//     entry: "./index.js",
//     mode: "none",
//     output: {
//       iife: false,
//       pathinfo: "verbose",
//     },
//   });
// }

function f2() {
  return webpack({
    entry: "./index.js",
    mode: "none",
    output: {
      filename: "main.[contenthash:6].js",
      hashFunction: "xxhash64",
    },
  });
}

f2().run((err, stat) => {
  console.log("构建时间：", stat.toJson().time);
  console.log("构建时间：", stat.endTime - stat.startTime);
});
