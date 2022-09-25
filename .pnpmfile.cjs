const fs = require("fs");
let linkPaths = {};
if (fs.existsSync("./.digitforce.js")) {
  linkPaths = require("./.digitforce.js").linkPaths;
}
function readPackage(pkg, context) {
  // 添加了 dev 环境
  if (pkg.name == "umi-vue-demo" && process.env.NODE_ENV === "development") {
    Object.keys(linkPaths).forEach((key) => {
      // if (pkg.dependencies[key]) {
      pkg.dependencies[key] = linkPaths[key];
      // }
      if (pkg.devDependencies[key]) {
        pkg.devDependencies[key] = linkPaths[key];
      }
    });
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
