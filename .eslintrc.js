const { eslint } = require('@trillion/fabric');
eslint.rules['no-param-reassign'] = 1;
eslint.rules['no-nested-ternary'] = 1;

module.exports = eslint;
