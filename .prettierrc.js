module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  proseWrap: "never",
  tabWidth: 4,
  endOfLine: "lf",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
};
