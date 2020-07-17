module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
    },
    globals: {
        require: true,
        Promise: true,
        process: true,
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] },
        },
    },
    extends: [
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'markdown', 'react', 'react-hooks'],
    rules: {
        'react/prop-types': 0,
        'react/no-children-prop': 0,
        'class-methods-use-this': 0,
        'camelcase': 0,
        'func-names': 0,
        'function-paren-newline': 0,
        'generator-star-spacing': [2, { before: true, after: true }],
        'max-classes-per-file': 0,
        'new-cap': [
            1,
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        'no-shadow': 0,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-plusplus': 0,
        'no-minusminus': 0,
        'no-underscore-dangle': 0,
        'no-await-in-loop': 0,
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-case-declarations': 0,
        'no-param-reassign': 0,
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        'prefer-destructuring': 0,
        'prefer-object-spread': 0,
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-unused-expressions': 0,
                '@typescript-eslint/no-unused-expressions': 0,
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
                '@typescript-eslint/no-explicit-any': 0,
                '@typescript-eslint/no-parameter-properties': 0,
                '@typescript-eslint/camelcase': 0,
                '@typescript-eslint/no-non-null-assertion': 0,
                '@typescript-eslint/no-empty-function': 0,
                '@typescript-eslint/no-inferrable-types': 0,
                '@typescript-eslint/explicit-member-accessibility': [2, { accessibility: 'no-public' }],

                '@typescript-eslint/explicit-function-return-type': [1, { allowTypedFunctionExpressions: true }],
                '@typescript-eslint/no-use-before-define': [
                    'error',
                    { functions: false, classes: true, variables: true, typedefs: true },
                ],
            },
        },
        {
            files: ['*.md'],
            globals: {
                React: true,
                ReactDOM: true,
            },
            rules: {
                'no-console': 0,
                'no-plusplus': 0,
                'eol-last': 0,
                'no-script-url': 0,
                'prefer-rest-params': 0,
            },
        },
    ],
};
