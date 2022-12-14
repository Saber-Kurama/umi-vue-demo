import path from "path";

export default {
  alias: {
    vue$: `${path.resolve(
      __dirname,
      "./node_modules/vue/dist/vue.esm-bundler.js"
    )}`,
    "@arco-design/web-vue": `${path.resolve(
      __dirname,
      "./node_modules/@arco-design/web-vue"
    )}`,
    "@formily/core": `${path.resolve(
      __dirname,
      "./node_modules/@formily/core"
    )}`,
    "@formily/vue": `${path.resolve(__dirname, "./node_modules/@formily/vue")}`,
  },
  npmClient: "pnpm",
  extraBabelPlugins: ["@vue/babel-plugin-jsx"],
  presets: [require.resolve("@umijs/preset-vue")],
};
