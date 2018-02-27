const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack') ;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isServer = process.env.BUILD_TYPE === 'server';
const rootPath = path.join(__dirname,'../');

const prodConfig={
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
    libraryTarget: isServer ? 'commonjs2' : 'umd',
  },
  resolve:{
    extensions:[".js",".jsx",".css",".less",".scss",".png",".jpg"],
    modules:[path.resolve(rootPath, "src"), "node_modules"],
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
        test:/\.(css|scss)$/,
        exclude:/node_modules/,
        include: path.resolve(rootPath, "src"),
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:[{
            loader: 'css-loader',
            options: {
              minimize:true,
            }
          },{
            loader:'postcss-loader',
            options: {
              plugins:()=>[require('autoprefixer')({browsers:'last 5 versions'})],
              minimize:true,
            }
          },{
            loader:'sass-loader',
            options:{
              minimize:true,
            }
          }]
        }),
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
    new ManifestPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'css/style.[hash].css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      { from: './assets/favicon.ico',to: `${rootPath}./dist` },
      { from: './assets/img/192icon.png',to: `${rootPath}./dist/assets` },
      { from: './assets/img/512icon.png',to: `${rootPath}./dist/assets` },
      { from: './assets/mfest.json',to: `${rootPath}./dist` }
    ]),
    new CleanWebpackPlugin(['./dist'],{root: rootPath,}),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
    // }),
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
    new webpack.optimize.CommonsChunkPlugin({
      name:['vendors','manifest'],
      minChunks:2
    }),
    new ReactLoadablePlugin({
      filename: path.join(rootPath,'./dist/react-loadable.json'),
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'cache-[hash]',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: true,
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/, /\.html$/],
    }),
  ]
}

module.exports = prodConfig