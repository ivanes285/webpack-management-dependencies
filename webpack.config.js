const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Assets = require("./src/assets");

module.exports = {
  entry: {
    app: "./src/assets.js",
  },

  devServer: {
    port: 4000,
    open: true,
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),

    new CopyPlugin({
      patterns: Assets.map((asset) => {
        return {
          from: path.resolve(__dirname, `./node_modules/${asset}`),
          to: path.resolve("libs"),
        };
      }),
    }),
  ],
  
  
};
