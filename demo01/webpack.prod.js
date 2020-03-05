'use strict';
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')  // css hash 抽离
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // css 压缩
const HtmlWebpackPlugin = require('html-webpack-plugin') // html压缩
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    mode: 'none',
    devtool:'source-map',
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name]_[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            }, {
                test: /.css$/,
                // use: ['style-loader', 'css-loader'] // 从右到左执行
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'] // 从右到左执行
            }, {
                test: /.less$/,
                // use: ['style-loader', 'css-loader', 'less-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [ // 数组
                                require('autoprefixer')({
                                    browsers: ['last 2 version', '>1%', 'ios 7']
                                })
                            ]
                        }
                    }]
            }, {
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
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano')
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html',
            chunks: ['index'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/search.html'),
            filename: 'search.html',
            chunks: ['search'], // search.css/js
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        new CleanWebpackPlugin()
    ]
}