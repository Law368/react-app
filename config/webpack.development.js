const path = require('path');

const {merge} = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        publicPath: '/',
    },
    devtool: 'source-map',
    devServer: {
        static: './dist',
        historyApiFallback: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
});
