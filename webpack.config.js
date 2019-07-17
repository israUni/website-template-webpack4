const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Autoprefixer = require('autoprefixer')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports= {

	devtool: 'inline-source-map',

	// ==================== Punto de entrada del archivo principal JS ====================
	entry: { scripts: './src/js/main.js'	},

	// ==================== Configuración del puerto para el Servidor ====================
	devServer: {
		// Set your own IP adress (Check it in terminal with 'ipconfig' comand)
		host: '192.168.8.102',
		port: 3000,
		compress: true
	},

	module: {

		// *************************************************
		// ********************* RULES *********************
		// *************************************************
		rules: [

			// ==================== Handling of JS files ====================
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/preset-env' ]
						}
					}
				]
			},

			// ==================== Handling of HTML files ====================
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 		{
			// 			loader: 'html-loader',
			// 			options: { minimize: false }
			// 		}
			// 	]
			// },
			// ==================== Handling of PUG files ====================
			{
        test: /\.pug$/,
        use: [
					{
						loader: 'html-loader',
						options: {
							attrs: false,
							minimize: false
						}
					},
					{
						loader: 'pug-html-loader',
						options: {
							basedir: './src/pug',
							minimize: false,
							pretty: true,
							attrs: false
						}
					}
				]
			},

			// ==================== Handling of SCSS, SASS and CSS files ====================
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{	loader: 'style-loader' },
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							// minimize: true,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							autoprefixer: {
								browser: ['last 2 versions' ]
							},
							sourceMap: true,
							plugins: () => [ Autoprefixer	]
						}
					},
					{ loader: 'resolve-url-loader'},
					{
						loader: 'sass-loader',
						options: {
							outputStyle: 'compressed',
							sourceMap: true
						}
					}
				]
			},

			// ==================== Handling of image files ====================
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './assets/img/[name].[ext]'
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
			},

			// ==================== Handling of font files ====================
			{
				test: /\.(ttf|eot|woff2?|svg)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: './assets/css/fonts/[name].[ext]'
					}
				}
			}
		]
	},

	// *************************************************
	// ******************** PLUGINS ********************
	// *************************************************
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles.[chunkhash].css',
			chunkFilename: '[id].css'
		}),
		new HtmlWebpackPlugin({
			template: './src/pug/pages/test.pug',
			filename: './index.html',
			chunks: ['scripts']
			// inject: true
		}),
		new HtmlWebpackPlugin({
			template: './src/pug/pages/nosotros/nosotros.pug',
			filename: './nosotros/index.html',
			chunks: ['scripts']
			// inject: true
		})

		// ******************************************************************
		// ***** Put in here many other pages that the project requires *****
		// ******************************************************************
		// new HtmlWebpackPlugin({
		// 	template: './src/pug/pages/nosotros/nosotros.pug',
		// 	filename: './nosotros/index.html',
		// 	chunks: ['scripts']
		// 	// inject: true
		// })
		// ******************************************************************
		// ******************************************************************
		// ******************************************************************
	],

	// ==================== Punto de salida de los archivos procesados ====================
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js'
	}
}
