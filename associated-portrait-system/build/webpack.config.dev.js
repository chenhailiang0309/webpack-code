const path = require('path');
const merge = require('webpack-merge');

const webpack = require('webpack'); //webpack-dev-server
const baseConfig = require('./webpack.config.base');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devConfig = {
    mode: 'development',
    output: {
        path: path.join(__dirname, "../dist"),
        filename: '[name].js'
    },
    devServer: {
        hot:true,
        port: 8080, //端口号
        progress: true, //进度条
        contentBase: './dist', //指定目录运行服务
        open: true //自动打开浏览器,

    },
    module: {
        rules: [ // 
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
}

module.exports = merge(baseConfig, devConfig);