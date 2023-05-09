import { DefinePlugin } from 'webpack';
const dotenv = require('dotenv');

export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/
  webpack(config) {
    const p = JSON.parse(JSON.stringify(dotenv.config().parsed));
    const parsed = {
      ...p,
    };

    config.devServer = { ...config.devServer, port: parsed.REACT_APP_PORT };
    config.plugins.push(
      new DefinePlugin({
        'process.env': JSON.stringify(parsed),
      }),
    );
  },
};
