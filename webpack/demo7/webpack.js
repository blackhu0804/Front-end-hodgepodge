const webpack = require("webpack");
const path = require("path");

function f1() {
  return webpack({
    entry: "./index.js",
    mode: "none",
    output: {
      filename: "main.js",
      chunkFilename: "[name].chunk.js",
      path: path.resolve(__dirname, "dist2"),
      chunkLoading: "import", // 指定chunkLoading
    },
  });
}

function f2() {
  return webpack({
    entry: "./prefetch.index.js",
    mode: "none",
    output: {
      filename: "[name].[contenthash].js",
      chunkFilename: "[name].[id].chunk.[contenthash].js",
      path: path.resolve(__dirname, "dist/prefetch"),
    },
  });
}

// f2().run((err, stat) => {
//   console.log("构建时间：", stat.toJson().time);
//   console.log("构建时间：", stat.endTime - stat.startTime);
// });

const webpack = require('webpack')

webpack({
  entry: './index.js',
  mode: 'none',
}).run((err, stat) => {
  console.log(JSON.stringify(stat.toJson(), null, 2))
})
```