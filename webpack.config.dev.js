'use strict';

const config = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    ...config,
    devServer: {
        contentBase: './bin/debug',
        historyApiFallback: true,
        host: '0.0.0.0',
        inline: true,
        port: 8082,
        proxy: {
            '/api/*': 'http://localhost:8080',
            '/favicon.ico': 'http://localhost:8080',
            '/oauth/*': 'http://localhost:8080',
            '/ws': {
                secure: false,
                target: 'ws://localhost:8080',
                ws: true,
            },
        },
    },
    devtool: 'source-map',
    mode: 'development',
    output: {
        ...config.output,
        path: path.resolve(__dirname, 'bin/debug'),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"',
            },
        }),
        ...config.plugins,
    ],
};