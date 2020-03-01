'use strict';
const path = require('path')
const webpack = require('webpack')


module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }, {
                test: /.css$/,
                use: ['style-loader', 'css-loader'] // 从右到左执行
            }, {
                test: /.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /.(png|jpg|gif|jpeg)$/,
                // use:['file-loader']
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    
}