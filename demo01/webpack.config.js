'use strict';

const path = require('path')
console.log(__dirname)
module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'
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
            },{
                test:/.(png|jpg|gif|jpeg)$/,
                // use:['file-loader']
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:10240
                    }
                }]
            }
        ]
    }
}