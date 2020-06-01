const path = require('path')

module.exports = {
  publicPath: './',
  devServer: {
    port: '8888'
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/styles/variables.less')
      ]
    }
  }
}
