const { entry, baseModuleRules, basePlugins } = require("./webpack.base");
const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // css代码压缩 OptimizeCSSAssetsPlugin 和 cssnano
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css分离单独文件 mini-css-extract-plugin

module.exports = {
  mode: "production",
  entry,
  output: {
    filename: "js/[name][chunkhash:8].js",
    path: path.join(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  module: {
    rules: [
      ...baseModuleRules,
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")],
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    ...basePlugins,
    // 分离css文件
    new MiniCssExtractPlugin({
      filename: "css/[name][contenthash:8].css",
    }),
    //   压缩css
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
    }),
  ],
  //   分离公共文件（CSS和JS）  配置optimization.splitChunks
  optimization: {
      minimize:true,
      minimizer:{

      }
  },
};
