const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFeberationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1001,
  },
  plugins: [
    new ModuleFeberationPlugin({
      name: "barchart",
      filename: "remoteEntry.js",
      exposes: {
        "./BarchartIndex": "./src/index",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
