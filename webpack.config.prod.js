'use strict';

const config = require('./webpack.config.js');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    ...config,
    mode: 'production',
    output: {
        ...config.output,
        path: path.resolve(__dirname, 'bin/rel'),
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        ...config.plugins,
    ],
};