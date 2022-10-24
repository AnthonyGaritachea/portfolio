const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    mode: 'development',
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
                test: /\.(svg|jpeg|png)$/i,
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
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    node: {
        fs: 'empty'
      }
}