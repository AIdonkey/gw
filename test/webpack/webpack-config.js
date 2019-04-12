module.exports = {
  mode: 'production',
  entry: {
    'instance1': './instance1',
    'instance2': './instance2'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'commons',
          chunks: 'initial',
          minSize: 100
        }
      }
    }
  },
  output: {
    filename: '[name].js'
  }
}
