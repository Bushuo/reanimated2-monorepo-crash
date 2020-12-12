const {getDefaultConfig} = require('metro-config');
const path = require('path');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();

  const {
    resolver: {sourceExts, assetExts},
  } = defaultConfig;

  return {
    projectRoot: path.resolve(__dirname, '..', '..'),
    transformer: {
      babelTransformerPath: require.resolve('./customTransformer.js'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
