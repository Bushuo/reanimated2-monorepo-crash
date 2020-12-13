var svgTransformer = require('react-native-svg-transformer');
var upstreamTransformer = require('metro-babel-transformer');

module.exports.transform = function ({src, filename, options}) {
  if (filename.endsWith('.svg')) {
    return svgTransformer.transform({src, filename, options});
  } else {
    return upstreamTransformer.transform({src, filename, options});
  }
};
