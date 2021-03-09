const webpack = require("webpack");
const path = require("path");
const { entry, baseModuleRules, basePlugins } = require("./webpack.base.js");

module.exports = {
  mode: "development",
  entry,
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  module: {
      rules:[
          ...baseModuleRules,
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
      ]
  },
  resolve: {
      alias:{

      }
  },
  plugins:[...basePlugins,new webpack.HotModuleReplacementPlugin()],
  devServer:{
      contentBase:'dist',
      hot:true,
      proxy:{}
  }
};
