const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@common': path.resolve(__dirname, '../src/assets/common'),
          '@constants': path.resolve(__dirname, '../src/assets/constants'),
          '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../src/assets/icons.js')
        }
      }
    };
  }
};
