const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public')
    }, 
    module: {
        rules: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
        ] 
    }, 
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}