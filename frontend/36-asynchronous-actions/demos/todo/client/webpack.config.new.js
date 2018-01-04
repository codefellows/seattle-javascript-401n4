'use strict';

// load environment
require('dotenv').config()

// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');

// Makes a separate CSS bundle
const ExtractPlugin = require('extract-text-webpack-plugin');

// Define Plugin: creates global constants at comppile time
// Environment Plugin: shorthand: does a define on process.env ...
const {DefinePlugin, EnvironmentPlugin} = require('webpack');

// boolean that equals true if NODE_ENV === 'production'
const production = process.env.NODE_ENV === 'production';

// default plugins
let plugins = [
  new EnvironmentPlugin(['NODE_ENV']),
  new ExtractPlugin('bundle.[hash].css'),
  new HTMLPlugin({template: `${__dirname}/src/index.html`}),
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify(process.env.API_URL),
  }),
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
            // If it's a .js file not in node_modules, use the babel-loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // If it's a .scss file
            {
                test: /\.scss$/,
                loader : 'style-loader!css-loader!sass-loader'
            },

        ]
    }

}