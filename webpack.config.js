const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
//const { InjectManifest } = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const webpackPlugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),

  new Dotenv({
    path: "./.env", // Path to .env file (this is the default)
    systemvars: true,
  }),
  new CopyPlugin({
    patterns: [
      { from: "./public/favicon.ico", to: "./public" },
      { from: "./public/favicon.ico", to: "./user/public" },
      { from: "./public/manifest.json", to: "./public" },
      { from: "./public/manifest.json", to: "./user/public" },
      { from: "./public/logo192.png", to: "./public" },
      { from: "./public/logo192.png", to: "./user/public" },
      { from: "./public/logo512.png", to: "./public" },
      { from: "./public/logo512.png", to: "./user/public" },
      { from: "./public/_redirects", to: "./" },
      { from: "./public/_redirects", to: "./public" },
    ],
  }),
  // new InjectManifest({
  //   swSrc: "./src/src-sw.js",
  //   swDest: "sw.js",
  // }),
];

module.exports = {
  mode: "production",
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name][contenthash].js",
    clean: true,
    publicPath: "/",
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },

      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "public/images/[name].[ext]",
        },
      },
    ],
  },

  plugins: webpackPlugins,
};
