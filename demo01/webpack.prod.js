"use strict";

const glob = require("glob");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css hash 抽离
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // css 压缩
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html压缩
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/*/index.js"));

  Object.keys(entryFiles).map(index => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js/);
    const pageName = match && match[1];
    console.log(pageName);
    entry[pageName] = entryFile;

    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ['vendors', pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    );
  });

  return {
    entry,
    HtmlWebpackPlugins
  };
};

const { entry, HtmlWebpackPlugins } = setMPA();

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index/index.js",
    search: "./src/search/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name]_[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: "babel-loader"
      },
      {
        test: /.css$/,
        // use: ['style-loader', 'css-loader'] // 从右到左执行
        use: [MiniCssExtractPlugin.loader, "css-loader"] // 从右到左执行
      },
      {
        test: /.less$/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                // 数组
                require("autoprefixer")({
                  browsers: ["last 2 version", ">1%", "ios 7"]
                })
              ]
            }
          }
        ]
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        // use:['file-loader']
        // use: [{
        //     loader: 'url-loader',
        //     options: {
        //         limit: 10240
        //     }
        // }]
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]_[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css"
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano")
    }),
    new CleanWebpackPlugin()
  ].concat(HtmlWebpackPlugins)
};
