const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFeberationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFeberationPlugin({
      name: "container",
      remotes: {
        barchart: "barchart@http://localhost:1001/remoteEntry.js",
      },
    }),
  ],
};
