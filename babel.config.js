module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@': './src',
            '@components': './src/components',
            '@navigators': './src/navigators',
            '@assets': './src/assets',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
