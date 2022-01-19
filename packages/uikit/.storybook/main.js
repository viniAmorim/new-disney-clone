const babel = require('@babel/core')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon',
  ],
  babel: async (options) => {
    const babelConfig = babel.loadPartialConfig({ configFile: require.resolve('../babel.config.js'),  })

    try {
      options.presets = babelConfig.options.presets;
      options.plugins = babelConfig.options.plugins;
    } catch (error) {
      console.error(`Error trying to overwrite babel config: \n${JSON.stringify(error)}`)
    }

    return options;
  },
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};
