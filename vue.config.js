const path = require('path');

module.exports = {
  // Custom output dist modules (to public)
  outputDir: path.resolve(__dirname, '../public'),
  // untuk CORS
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5000'
      }
    }
  }
}