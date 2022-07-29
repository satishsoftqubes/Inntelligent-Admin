const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {
      crypto: false,
      "crypto-browserify": require.resolve("crypto-browserify"), //if you want to use this module also don't forget npm i crypto-browserify
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        generator: {
          filename: "Assets/Styles/[hash][ext][query]",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        generator: {
          filename: "Assets/Styles/[hash][ext][query]",
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "Assets/Images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: "asset/inline",
        generator: {
          filename: "Assets/Fonts/[hash][ext][query]",
        },
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack", "url-loader"],
        generator: {
          filename: "Assets/Svgs/[hash][ext][query]",
        },
      },
    ],
  },
  output: {
    filename: "[name].[fullhash].js",
    path: path.resolve(__dirname, "..", "./build"),
    chunkFilename: (pathData) => {
      return pathData.chunk.name === "main"
        ? "[name].js"
        : "Script/[name]/[name].[chunkhash].bundle.js";
    },
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
      favicon: "./src/favicon.ico",
    }),
    // to copy the thing same as the public folder from create-react-app
    // new CopyPlugin({
    //   patterns: [{ from: "./src/assetss", to: "content" }],
    // }),
  ],
  stats: "errors-only",
};
