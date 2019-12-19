import buble from "rollup-plugin-buble"

export default {
  // 入口文件为 acorn/src/index.js
  input: "acorn/src/index.js",
  output: [
    {
      file: "learn-tests/sources/acorn.js",
      format: "umd",
      name: "acorn",
      sourceMap: true
    }
  ],
  plugins: [
    buble({transforms: {dangerousForOf: true}})
  ],
}
