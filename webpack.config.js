'use strict';

const path = require('path');

const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                modules: true,
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.woff2?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[hash].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    output: {
        filename: 'index.[hash].js',
    },
    plugins: [
        new CleanPlugin(),
        new HtmlPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
        new ExtractTextPlugin({
            filename: 'styles.[hash].css',
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/service-worker.js',
            swDest: 'sw.js',
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
        modules: [
            path.resolve('./src'),
            'node_modules',
        ],
    },
};