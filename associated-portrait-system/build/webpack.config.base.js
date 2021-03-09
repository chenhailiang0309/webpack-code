const path = require('path');
const glob = require('glob');

const webpack = require('webpack'); //webpack-dev-server
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //目录清理
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html压缩
const CopyWebpackPlugin = require('copy-webpack-plugin'); //copy

const NODE_ENV = process.env.NODE_ENV // 环境变量

const setMPA = () => {
    const entry = {};
    const HtmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, "../src/views/*/index.js"));

    Object.keys(entryFiles).map(index => {
        const entryFile = entryFiles[index];
        const match = entryFile.match(/src\/views\/(.*)\/index\.js/);
        const pageName = match && match[1];
        entry[pageName] = entryFile;

        HtmlWebpackPlugins.push(
            new HtmlWebpackPlugin({
                template: path.join(__dirname, `../src/views/${pageName}/index.html`),
                filename: `${pageName}.html`,
                chunks: ['common', pageName],
                inject: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true
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
    entry: entry,
    devtool: 'source-map',
    module: {
        rules: [ //
            {
                test: /.(png|jpg|gif|jpeg|htc)$/,
                use: [ //
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            name: '[name]_[hash:8].[ext]',
                            outputPath: 'static/image', // 指定图片输入的文件夹
                            publicPath: NODE_ENV == 'production' ? '../image' : ''
                        },
                    }
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         name: '[name]_[hash:8].[ext]'
                    //     }
                    // }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf|svg|htc)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash:8][ext]',
                        outputPath: 'static/font',
                        publicPath: NODE_ENV == 'production' ? '../font' : ''
                    },
                }, ],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        /*new CopyWebpackPlugin({
            patterns: [ //
                {
                    from: path.resolve(__dirname, '../src/static'),
                    to: path.resolve(__dirname, '../dist/static'),
                }
            ]
        }),*/
        new CleanWebpackPlugin(),
    ].concat(HtmlWebpackPlugins)
}