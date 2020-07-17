module.exports = function (api) {
    if (api) {
        api.cache.never();
    }

    const { BABEL_MODULE, NODE_ENV } = process.env;
    const isTest = NODE_ENV === 'test';
    const useESModules = BABEL_MODULE !== 'commonjs' && !isTest;
    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    loose: true,
                    modules: useESModules ? false : 'commonjs',
                },
            ],
            '@babel/preset-typescript',
            '@babel/preset-react',
        ],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
    };
};
