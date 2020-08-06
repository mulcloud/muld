// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const fileMock = path.resolve(__dirname, './tests/fileMock.js');

module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '^.+\\.test\\.(ts|tsx)$',
    testPathIgnorePatterns: ['/pages/', '/dist/', '/lib/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        '!components/**/styles.{ts,tsx}',
        '!components/**/*types.{ts,tsx}',
        '!components/styles/*',
        '!components/index.ts',
        '!components/utils/*',
    ],
    moduleNameMapper: {
        '.(gif|png|jpe?g|svg|woff|woff2|eot|ttf|otf)$': fileMock,
    },
};
