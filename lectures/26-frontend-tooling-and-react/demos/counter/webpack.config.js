'use strict';

// Dynamic Script and Style Tags
const HTMLPlugin = require('html-webpack-plugin');

// Makes a separate CSS bundle
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
    
    // Load this and everythning it cares about
    entry: `${__dirname}/src/main.js`,
    
    devtool: 'source-map',
    
    // Stick it into the "path" folder with that file name
    output: {
        filename: 'bundle.[hash].js',
        path: `${__dirname}/build`
    }, 
    
    plugins: [
        new HTMLPlugin({
            template: `${__dirname}/src/index.html`
        }),
        new ExtractPlugin('bundle.[hash].css')
    ],
    
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
            
        ]
    }
    
}