const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'application.js'
    },

    resolve: {
        // symlinks: false,
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },

    optimization: {
        minimizer: [new TerserPlugin()],
    },

    plugins: isProduction
        ? [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            })
        ]
        : [],

    devtool: isProduction ? false : 'source-map',

    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'public')
    }
}
