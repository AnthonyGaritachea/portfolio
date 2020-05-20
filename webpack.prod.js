const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist') 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/js/template.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                loader: 'file-loader',
                test: /\.(svg|jpe?g)$/i,
            },
            {
                test: /.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    devtool: 'source-map'
}