const webpack = require('webpack');
const _MIN = 1;
module.exports = {
    entry: {
      'page-tracker': './index.js'
    },
    output: {
        path: './dist',
        filename: _MIN ? '[name].min.js' : '[name].js',
        libraryTarget: 'umd',
    },
	//devtool: 'eval',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', presets: 'es2015'},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'},
        ],
    },
    plugins: _MIN ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ] : [],
};