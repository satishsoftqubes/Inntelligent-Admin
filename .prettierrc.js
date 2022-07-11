module.exports = {
  jsxBracketSameLine: false,
  requirePragma: false,
  useTabs: false,
  trailingComma: "es5",
  jsxSingleQuote: false,
  printWidth: 100,
  tabWidth: 2,
  endOfLine: "auto",
  bracketSameLine: false,
  semi: true,
  htmlWhitespaceSensitivity: "ignore",
  overrides: [
    {
      files: "*.json",
      options: {
        tabWidth: 6,
      },
    },
    {
      files: "*.css",
      options: {
        parser: "css",
      },
    },
  ],
};
