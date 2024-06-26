const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
require("@rushstack/eslint-config/patch/modern-module-resolution");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
    "@rushstack/eslint-config/profile/web-app",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [".*.js", "node_modules/"],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "@rushstack/typedef-var": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
