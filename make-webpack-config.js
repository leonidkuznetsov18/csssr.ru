import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';
import loadersByExtension from './utils/loadersByExtension';

process.env = require('./config/env.js').default;

export default (options) => {
	const isProdClient = options.minimize && !options.prerender;
	const root = path.join(__dirname, 'app');
	const publicPath = '/_assets/';
	const classFormat = options.minimize ? '[hash:base64:5]' : '[path]_[local]';
	const outputPath = path.join(__dirname, 'build', options.prerender ? 'prerender' : 'public');
	const outputFilename = isProdClient ? '[name]-[hash].js' : '[name].js';
	const outputChunkFilename = options.devServer ? '[id].js' : outputFilename;
	const assetsMapFile = 'assets.json';
	const className = options.originalName ? '[local]' : classFormat;
	let loaders = {
		json: 'json',
		'png|jpg|cur|gif': `url?limit=${options.storybook ? 0 : 5000}`,
		'woff|woff2': `url?limit=${options.storybook ? 0 : 1}`,
	};
	const stylesheetLoaders = {
		css: [
			'isomorphic-style',
			`css?modules&minimize&importLoaders=1&localIdentName=${className}`,
			'postcss',
		],
	};
	const entry = ['babel-polyfill'];
	const postLoaders = [
		{
			test: /\.jsx?$/,
			loaders: [
				'transform-loader?envify',
			],
		},
	];
	const additionalLoaders = [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: [
				'babel?' + JSON.stringify({
					env: {
						development: {
							presets: ['react-hmre'],
						},
					},
				}),
			],
		},
		{
			test: /\.svg$/,
			exclude: /icons/,
			loader: `url?limit=${options.storybook ? 0 : 10000}`,
		},
		{
			test: /icons.+\.svg?$/,
			loader: 'raw',
		},
		{
			test: /\.ya?ml$/,
			loader: 'json!yaml',
		},
	];
	const output = {
		path: outputPath,
		publicPath,
		filename: outputFilename,
		chunkFilename: outputChunkFilename,
		sourceMapFilename: 'debugging/[file].map',
		libraryTarget: options.prerender ? 'commonjs2' : undefined,
		pathinfo: options.debug || options.prerender,
	};
	const plugins = [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'global.GENTLY': false,
		}),
		new webpack.ProvidePlugin({
			Promise: 'exports?global.Promise!es6-promise',
		}),
	];

	if (options.prerender) {
		plugins.push(
			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1,
			})
		);
	}

	if (options.commonsChunk) {
		plugins.push(new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js'));
	}

	Object.keys(stylesheetLoaders).forEach(function (ext) {
		let loader = stylesheetLoaders[ext];

		if (Array.isArray(loader)) {
			loader = loader.join('!');
		}

		stylesheetLoaders[ext] = loader;
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
		);
	}

	if (isProdClient) {
		plugins.push(
			new AssetsPlugin({
				path: outputPath,
				filename: assetsMapFile,
				fullPath: false,
			}),
		);
	}

	loaders = additionalLoaders
		.concat(loadersByExtension(loaders))
		.concat(loadersByExtension(stylesheetLoaders));

	if (options.hotComponents) {
		entry.push(
			'webpack-hot-middleware/client'
		);
	}

	entry.push('./app/' + (options.prerender ? 'prerender' : 'app'));

	return {
		entry,
		output,
		target: options.prerender ? 'node' : 'web',
		module: {
			loaders,
			postLoaders,
		},
		devtool: options.devtool,
		debug: options.debug,
		resolveLoader: {
			root: path.join(__dirname, 'node_modules'),
		},
		resolve: {
			root,
			modulesDirectories: [
				'app',
				'node_modules',
			],
			extensions: ['.jsx', '.js', ''],
		},
		postcss: (w) => [
			require('postcss-import')({
				path: [root + '/styles'],
				addDependencyTo: w,
			}),
			require('postcss-custom-media'),
			require('postcss-clearfix'),
			require('postcss-custom-properties'),
			require('postcss-color-function'),
			require('postcss-nested'),
			require('autoprefixer'),
			require('postcss-autoreset')({
				rulesMatcher: ({ selector }) => !/(_|:|\[)/.test(selector),
			}),
			require('postcss-initial'),
			require('css-mqpacker'),
		],
		plugins,
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			publicPath,
			port: 2992,
			hot: true,
		},
	};
};
