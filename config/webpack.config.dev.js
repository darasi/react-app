const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const rootPath = path.join(__dirname,'../');

const prodConfig = {
  mode: 'development',  
  context: path.join(rootPath,'./src'),
  entry: {
    client:'./index.js',
    vendors:['react','react-dom','react-loadable','react-redux','redux','react-router-dom','react-router-redux','redux-thunk'],
  },
  output:{
    filename:'[name].[hash:8].js',
    path:path.resolve(rootPath,'./dist'),
    publicPath:'/',
    chunkFilename: '[name]-[hash:8].js',
  },
  resolve:{
    extensions:[".js",".jsx",".css",".less",".scss",".png",".jpg"],
    modules:[path.resolve(rootPath, "src"), "node_modules"],
  },
  devServer:{
    contentBase: 'assets',
    hot: true,
    historyApiFallback: true,
  },
	optimization: {
		noEmitOnErrors: true,
		splitChunks: {
			minChunks: 2,
			automaticNameDelimiter: "-",
			cacheGroups: {
				vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
  module:{
    rules:[
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        include:path.resolve(rootPath, "src"),
        use:{
          loader:'babel-loader',
          options:{
            presets: ['env', 'react', 'stage-0'],
            plugins: ['transform-runtime', 'add-module-exports'] ,
            cacheDirectory: true,
          }
        }
      },{
				test: /\.(css|scss)$/,
        exclude:/node_modules/,
        include: path.resolve(rootPath, "src"),
        use: [
          MiniCssExtractPlugin.loader,
					{
            loader: 'css-loader',
            options: {
              minimize:true,
            }
          },
          {
            loader:'postcss-loader',
            options: {
              plugins:()=>[require('autoprefixer')({browsers:'last 5 versions'})],
              minimize:true,
            }
          },
          {
            loader:'sass-loader',
            options:{
              minimize:true,
            }
          }
        ]
      },{
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        exclude:/node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: 'assets/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins:[
    new Dotenv({ path: './.env', systemvars: true }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ProgressBarPlugin({summary: false}),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css',
		}),
    new CopyWebpackPlugin([
      { from: './assets/favicon.ico',to: `${rootPath}./dist` },
      { from: './assets/img/192icon.png',to: `${rootPath}./dist/assets` },
      { from: './assets/img/512icon.png',to: `${rootPath}./dist/assets` },
      { from: './assets/mfest.json',to: `${rootPath}./dist` }
    ]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title:'',
      filename:'index.html',
      template:'./assets/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        useShortDoctype: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ]
}

module.exports = prodConfig