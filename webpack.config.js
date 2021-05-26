const path = require('path');

module.exports = {
    entry: './app/app.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'myBundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 8091,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
    }
}