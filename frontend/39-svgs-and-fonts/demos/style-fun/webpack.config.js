'use strict';

require('dotenv').config();

// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');

// Makes a separate CSS bundle
const ExtractPlugin = require('extract-text-webpack-plugin');

const {EnvironmentPlugin, DefinePlugin} = require('webpack');

let production = process.env.NODE_ENV === "production";

let plugins = [
    new HTMLPlugin({
        template: `${__dirname}/src/index.html`
    }),
    new ExtractPlugin('bundle.[hash].css'),
    new EnvironmentPlugin(['NODE_ENV']),
    new DefinePlugin({
        '__AUTH_URL__': JSON.stringify(process.env.AUTH_URL),
        '__API_URL__': JSON.stringify(process.env.API_URL),
        '__DEBUG__': JSON.stringify(! production)
    })
];

module.exports = {

    plugins,

    // Load this and everythning it cares about
    entry: `${__dirname}/src/main.js`,

    devServer: {
        historyApiFallback:true
    },

    devtool: 'source-map',

    // Stick it into the "path" folder with that file name
    output: {
        filename: 'bundle.[hash].js',
        path: `${__dirname}/build`
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractPlugin.extract({
                    // These get loaded in reverse order and the output of one pipes into the other (think of a then)
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap:true
                            }
                        },
                        'resolve-url-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths:[`${__dirname}/src/style`]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(woff|woff2|ttf|eot|glyph|\.svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      name: 'font/[name].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|tiff|svg)$/,
                exclude: /\.glyph.svg/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 6000,
                      name: 'image/[name].[ext]'
                    }
                  }
                ]
            },
        ]
    }

}