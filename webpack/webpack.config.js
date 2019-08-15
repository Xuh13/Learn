const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: "development", //production
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:'http://localhost:8081/'
    },
    plugins: [
        new HtmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new ExtractTextPlugin('css/style.css'), 
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        // new UglifyJsPlugin(),
        new webpack.BannerPlugin('许航大傻逼'),
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        new CopyWebpackPlugin([{
            from:__dirname + '/src/public',
            to:'./public'
        }])
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:'jquery',
        //     filename:'assets/js/[name].js',
        //     minChunks:2
        // })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port: 8081
    },
    module: {
        rules: [{
                test: /\.css$/,
                //use:['style-loader','css-loader']
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }, "postcss-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images/'
                    }
                }]
            },
            {
                test: /\.(htm|html)/i,
                use: ['html-withimg-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.js$/,
                use:[{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }],
                exclude:/node_modules/
            }
            // {
            //     test:/\.(jsx|js)$/,
            //     use:{
            //         loader:"babel-loader",
            //         options:{
            //             presets:["es2015","react"]
            //         }
            //     },
            //     exclude:/node_modules/
            // }
        ]
    }
}