import WebpackBar from 'webpackbar';
import { merge } from 'webpack-merge';
import { baseConfig } from './webpack.base';
import { WebpackConfig } from './types';
import { GREEN, DIST_DIR, MODILE_SHARED_FILE, DESKTOP_SHARED_FILE } from './constant';
// import { RantCliSitePlugin } from '../compiler/rant-cli-site-plugin';

export function getSiteDevConfig(): WebpackConfig {
    return merge(baseConfig as any, {
        cache: { type: 'filesystem' },
        devServer: {
            port: 8080,
            quiet: true,
            host: '0.0.0.0',
            stats: 'errors-only',
            publicPath: '/',
            disableHostCheck: true,
        },
        output: {
            chunkFilename: '[name].js',
            path: DIST_DIR,
            publicPath: '/',
        },
        resolve: {
            alias: {
                'mobile-shared': MODILE_SHARED_FILE,
                'desktop-shared': DESKTOP_SHARED_FILE,
            },
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    chunks: {
                        chunks: 'all',
                        minChunks: 2,
                        minSize: 0,
                        name: 'chunks',
                    },
                },
            },
        },
        plugins: [
            new WebpackBar({
                name: 'Muld Cli',
                color: GREEN,
            }),
            // new RantCliSitePlugin(),
        ],
    });
}
