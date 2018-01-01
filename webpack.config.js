const path = require('path');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
const extractScss = new extractTextPlugin({
    filename: './styles.css'
});

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: APP_DIR,
                use: extractScss.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loaders: 'babel-loader'
            },
            {
                test: /\.(html|ico|json)$/,
                include: APP_DIR,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(jpg|png|svg|txt)$/,
                include: APP_DIR,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src/'
                    }
                }]
            }
        ]
    },
    plugins: [
        extractScss
    ]
};