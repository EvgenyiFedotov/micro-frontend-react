const { serviceWebpackConfig } = require("./l-libs/webpack-config");

module.exports = serviceWebpackConfig({
  serviceKey: () => "core",
});
