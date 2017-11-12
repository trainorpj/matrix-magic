import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: [
    {
      file: "build/index.cjs.js",
      format: "cjs"
    },
    {
      file: "build/index.es.js",
      format: "es"
    }
  ],
  plugins: [
    resolve(),
    babel({
      presets: [
        [
          "env",
          {
            modules: false
          }
        ]
      ],
      plugins: ["external-helpers"],
      babelrc: false
    })
  ]
};
