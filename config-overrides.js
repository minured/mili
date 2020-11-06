// 工具 react-app-rewired 的配置
// 不"eject"情况下,可以配置 webpack, 配合 customize-cra

const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  // 在这里使用 customize-cra 里的一些函数来修改配置
  // 调用 customize 中内置的各种方法，方便修改webpack配置
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    // style: "css"
    // true代表运用 less
    style: true,
  }),

  // antd 官网中的 修改主题颜色，就是使用 less-loader对源码中的 less变量进行覆盖

  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: "[local]--[hash:base64:5]",
      modifyVars: { "@primary-color": "#1DA57A" },
    },
  })
);
