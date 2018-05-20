const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
var autoprefixer = require('autoprefixer');
//代理转发地址
let target = "http://localhost:8007";

var theme = require("./theme.js");

module.exports = {
    target: 'web',
    entry: {
        main: ['babel-polyfill', './src/index.js'],
        vendor: ['redux', 'react-redux', 'react-router', 'react-router-redux', 'redux-thunk']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        immutable: 'Immutable'
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        },
        {
            test: /\.(css|less)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "postcss-loader",
                options: {
                    sourceMap: true,
                    config: {
                        path: 'postcss.config.js'  // 这个得在项目根目录创建此文件
                    }
                }
            }, {
                loader: `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
            }]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    limit: 1024,
                    name: '[name].[ext]'
                }
            }]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            reducers: path.join(__dirname, 'src/reducers'),
            components: path.join(__dirname, 'src/components'),
            store: path.join(__dirname, 'src/store'),
            routes: path.join(__dirname, 'src/routes'),
            assets: path.join(__dirname, 'src/assets'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: __dirname + "/src/index.tmpl.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        contentBase: "./dist",                                            //本地服务器所加载的页面所在的目录
        historyApiFallback: true,                                         //不跳转
        inline: true,                                                     //实时刷新
        hot: true,
        port: 3000,
        proxy: {
            '/api/*': {
                target,
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
    },
    mode: "development",
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
};