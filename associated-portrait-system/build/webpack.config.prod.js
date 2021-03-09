const path = require('path');
const merge = require('webpack-merge');

const webpack = require('webpack'); //webpack-dev-server
const baseConfig = require('./webpack.config.base');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css hash 抽离  单独css文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // css 压缩

const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin') // 速度分析
const BundleAnalyzerPlugin  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 体积分析


const smp = new SpeedMeasureWebpackPlugin()

const prodConfig = {
    mode: 'production',
    output: {
        path: path.join(__dirname, "../dist"),
        filename: 'static/js/[name]_[chunkhash:8].js'
    },
    module: {
        rules: [ // 
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /.js$/,
                use: 'babel-loader'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // 抽离css 单独打包成css 文件
            filename: "static/css/[name]_[contenthash:8].css"
        }),
        new OptimizeCSSAssetsPlugin({ // css  压缩
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano")
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    //文件在node_modules中，则创建文件名为vendors
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10 //优先级 数字越大，优先级越高
                },
                //打包公共模块
                common: {
                    chunks: 'initial', //initial表示提取入口文件的公共部分
                    minChunks: 2, //表示提取公共部分最少的文件数
                    minSize: 0, //表示提取公共部分最小的大小
                    name: 'common' //提取出来的文件命名
                }
            }
        }
    }
}

module.exports = smp.wrap(merge(baseConfig, prodConfig));