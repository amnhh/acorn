import buble from "rollup-plugin-buble"

export default {
  // 入口文件为 acorn/src/index.js
  input: "acorn/src/index.js",
  output: [
    {
      file: "acorn/dist/acorn.js",
      format: "umd",
      name: "acorn",
      sourceMap: true
    },
    {
      file: "acorn/dist/acorn.mjs",
      format: "es",
      sourceMap: true
    }
  ],
  plugins: [
    buble({transforms: {dangerousForOf: true}})
  ]
}
