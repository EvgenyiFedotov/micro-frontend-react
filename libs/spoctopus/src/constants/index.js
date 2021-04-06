const path = require("path");

const PACKAGE = require("../../package.json");

const PATHS = {
  STORAGE_DIR: "../../_STORAGE",
  STATE_FILE: "./state.json",
  PACKAGE_JSON: "./package.json",
  NODE_MODULES: "./node_modules",
  OPTIONS_FILE: "../../options.json",
};

const SEARCH = {
  PATTERN: "**/package.json",
  IGNORE: ["package.json", "**/node_modules/**"],
};

const SALT = 10;

const ARCHIVE = {
  PATTERN: "**/**",
  IGNORE: ["**/node_modules/**"],
};

module.exports = {
  PACKAGE,
  PATHS,
  SEARCH,
  SALT,
  ARCHIVE,
};