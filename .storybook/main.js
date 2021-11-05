const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  stories: [
    // '../storybook/stories/**/*.stories.mdx',
    '../storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async config => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
};
