var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var loadersByExtension = require('./utils/loadersByExtension');

module.exports = function(options) {
	var root = path.join(__dirname, 'app');
	var serverPath = (options.devServer ? 'http://localhost:2992' : '');
	var publicPath = serverPath + '/_assets/';
	var loaders = {
		'json': 'json',
		'png|jpg': 'url?limit=5000',
		'woff|woff2': 'url?limit=1',
	};
	var stylesheetLoaders = {
		'css': [
			'css',
			'postcss'
		]
	};
	var additionalLoaders = [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: options.hotComponents ? ['react-hot', 'babel'] : ['babel']
		}, {
			test: /\.svg$/,
			exclude: /icons/,
			loader: 'url?limit=10000'
		}, {
			test: /icons.+\.svg?$/,
			loader: 'raw'
		}
	];
	var output = {
		path: path.join(__dirname, 'build', options.prerender ? 'prerender' : 'public'),
		publicPath: publicPath,
		filename: '[name].js',
		chunkFilename: (options.devServer ? '[id].js' : '[name].js'),
		sourceMapFilename: 'debugging/[file].map',
		libraryTarget: options.prerender ? 'commonjs2' : undefined,
		pathinfo: options.debug || options.prerender
	};
	var plugins = [
		new webpack.PrefetchPlugin('react'),
		new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment')
	];

	if (options.prerender) {
		plugins.push(
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1
			})
		);
	}

	if (options.commonsChunk) {
		plugins.push(new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'));
	}

	Object.keys(stylesheetLoaders).forEach(function(ext) {
		var loader = stylesheetLoaders[ext];

		if (Array.isArray(loader)) {
			loader = loader.join('!');
		}

		if (options.prerender) {
			stylesheetLoaders[ext] = 'null';
		} else if (options.separateStylesheet) {
			stylesheetLoaders[ext] = ExtractTextPlugin.extract('style', loader);
		} else {
			stylesheetLoaders[ext] = 'style!' + loader;
		}
	});

	if (options.separateStylesheet) {
		plugins.push(
			new ExtractTextPlugin('[name].css')
		);
	}

	if (options.minimize) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			})
		);
	}

	loaders = additionalLoaders
		.concat(loadersByExtension(loaders))
		.concat(loadersByExtension(stylesheetLoaders));

	return {
		entry: [
			'./app/' + (options.prerender ? 'prerender' : 'app')
		],
		output: output,
		target: options.prerender ? 'node' : 'web',
		module: {
			loaders: loaders
		},
		devtool: options.devtool,
		debug: options.debug,
		resolveLoader: {
			root: path.join(__dirname, 'node_modules')
		},
		resolve: {
			root: root,
			modulesDirectories: [
				'app',
				'node_modules'
			],
			extensions: ['.jsx', '.js', '']
		},
		postcss: [
			require('postcss-import')({
				path: [root + '/styles']
			}),
			require('postcss-custom-media'),
			require('postcss-custom-properties'),
			require('postcss-color-function'),
			require('postcss-nested'),
			require('autoprefixer')({
				browsers: [
					'last 2 versions'
				]
			})
		],
		plugins: plugins,
	};
};
