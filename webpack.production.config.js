const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: {
        main: ['babel-polyfill', './src/index.js'],
        vendor: ['redux', 'react-redux', 'react-router', 'react-router-redux', 'redux-thunk']
    },
    output: {
        filename: '[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[chunkhash:8].chunk.js'
    },
    externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		immutable: 'Immutable'
	},
    devtool: 'cheap-module-source-map',
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
                loader: "less-loader"
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
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    mode: "production",
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