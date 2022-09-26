import path from "path";

export default {
  alias: {
    "@arco-design/web-vue": `${path.resolve(
      __dirname,
      "./node_modules/@arco-design/web-vue"
    )}`,
  },
  npmClient: "pnpm",
  extraBabelPlugins: ["@vue/babel-plugin-jsx"],
  presets: [require.resolve("@umijs/preset-vue")],
};
