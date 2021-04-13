const webpackConfigService = require("../libs/webpack-config/service");

module.exports = webpackConfigService(
  {},
  {
    serviceKey: "auth",
    modulesFederation: [
      {
        name: "auth",
        filename: "remote.js",
        exposes: {
          "./App": "./exposes/app.ts",
          "./guard": "./exposes/guard.ts",
        },
      },
    ],
  }
);
