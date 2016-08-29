var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index',
        list: './src/js/list',
        common: ['./src/js/lib/jquery.js', './src/js/lib/jquery.colorbox.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        alias: {
            'jquery': path.resolve(__dirname, 'src/js/lib/jquery'),
            'c': path.resolve(__dirname, 'src/js/modules/controller'),
            'm': path.resolve(__dirname, 'src/js/modules'),
            'scss': path.resolve(__dirname, 'src/scss')
        }
    },
    externals: {
        'jquery': 'jQuery'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        },
        {
            test: /\.scss$/,
            // loader: 'style!css!sass'
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')
        },
        {
            /**
             * loader ? 后边的 query 有两种写法, 可以看下文档:
             * http://webpack.github.io/docs/using-loaders.html#query-parameters
             */
            test: /\.(jpe?g|png|gif|svg)$/i,
            // loader: 'url?limit=8192&name=images/[name].[ext]?[hash]'
            loaders: [
                'url?limit=81&name=/images/[name].[ext]?[hash]',
                'image-webpack?optimizationLevel=3'
            ]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'js/common.js'),
        new ExtractTextPlugin('css/[name].css')
    ]
};

