/* eslint-disable @typescript-eslint/no-var-requires */
import { join } from 'path';
import { WebpackConfig } from './types';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const plugins = [
    new FriendlyErrorsPlugin({
        clearConsole: false,
        logLevel: 'WARNING',
    }),
    new HtmlWebpackPlugin({
        chunks: ['chunks', 'desktop'],
        template: join(__dirname, '../../site/desktop/index.html'),
        filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
        chunks: ['chunks', 'mobile'],
        template: join(__dirname, '../../site/mobile/index.html'),
        filename: 'mobile.html',
    }),
];
export const baseConfig: WebpackConfig = {
    mode: 'development',
    entry: {
        desktop: [join(__dirname, '../../site/desktop/index')],
        mobile: [join(__dirname, '../../site/mobile/index')],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.md$/,
                use: ['raw-loader'],
            },
        ],
    },
    plugins,
};
