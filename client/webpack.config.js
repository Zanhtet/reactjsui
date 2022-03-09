"use strict";
const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
       main: './app/index.jsx'
    },
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /(\.m?js$|\.m?jsx$)/,
                exclude: /(node_modules|public)/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
        ]
    },
    plugins: [
		new HtmlWebpackPlugin({
		    title: 'ReactJSUI',
            template: './app/index.html',
            filename: './index.html',
        }),
    ]
};