const path = require('path')
const UglifyJSPlugin = require('uglify-js-plugin')

const config = {
    entry: './src/Root.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: './dist',
        stats: {colors: true},
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
         new UglifyJSPlugin({
            sourceMap: true
        })
    ]
}

module.exports = config