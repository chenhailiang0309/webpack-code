const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, "./src/pages/*/index.js"));
  entryFiles.forEach((item) => {
    const pageName = item.match(/pages\/(.*)\/index.js/)[1]; // 获取文件夹名，即页面名称
    entry[pageName] = item; // 设置入口文件路径
    // 设置 HtmlWebpackPlugins数组
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `./src/pages/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      })
    );
  });

  return {
    entry,
    HtmlWebpackPlugins,
  };
};

const { entry, HtmlWebpackPlugins } = setMPA();
// console.log(entry);
// console.log(HtmlWebpackPlugins);

const baseModuleRules = [
  {
    test: /\.js$/,
    use: ["babel-loader"],
  },
  {
    test: /.(png|jpg|gif|jpeg|htc)$/,
    use: [
      {
        loader: "url-loader",
        options: {
          esModule: false,
          name: "[name]_[hash:8].[ext]", //文件指纹
          limit: 10000, // 转base64
        //   publicPath:"../../assets/images/",
          outputPath: "/assets/images/", // 图片文件输出目录和publicPath有关
        },
      },
    ],
  },
];

const basePlugins = [...HtmlWebpackPlugins];

module.exports = {
  entry,
  baseModuleRules,
  basePlugins,
};
