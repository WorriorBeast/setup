const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devtool: 'eval-source-map',
	devServer: {
		watchFiles: ['./src/index.html'],
	},
});
