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
};
