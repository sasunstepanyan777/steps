const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {

	let devMode;
	
	if(env.development) {
		devMode = true;
	} else if(env.production) {
		devMode = false;
	}

    return {

        mode: devMode ? 'development' : 'production',

        context: path.resolve(__dirname, 'src'),

        entry: {
			polyfills: ['@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'],
			main: './main.ts',
			styles: './styles.scss'
		},

        output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].[hash].js'
		},
		
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
		},
        
        module: {
			rules: [
				{
					test: /.tsx?$/,
					exclude: /(node_modules|bower_components|custom-elements)/,
					loader: 'ts-loader'
				},
				{
					test: /.html$/,
					loader: 'html-loader'
				},
				{
					test: /(sa|sc|c)ss$/,
					use: [
						{
                            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                        },
						{
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
						{
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
					]
				}
			]
        },
        
        plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './index.html'
			}),
			new MiniCssExtractPlugin({
				filename: "styles-[contenthash].css"
            })
			// new webpack.HotModuleReplacementPlugin()
        ],
        
        watch: devMode
    };
};