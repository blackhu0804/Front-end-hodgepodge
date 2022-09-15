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

f1().run((err, stat) => {
  console.log("构建时间：", stat.toJson().time);
  console.log("构建时间：", stat.endTime - stat.startTime);
});
