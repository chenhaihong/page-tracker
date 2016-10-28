const webpack = require('webpack');
module.exports = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: 'page-tracker.min.js',
    },
	//devtool: 'eval',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', presets: 'es2015'},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'},
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};