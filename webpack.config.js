const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }, 
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                loader: 'file-loader',
                test: /\.(svg|jpeg)$/i,
                options: {
                    esModule: false
                }
            },
            {
                loader: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ] 
    }, 
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}