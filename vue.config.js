module.exports = {
    configureWebpack: {        
      devServer: {
        headers: {
          'Access-Control-Expose-Headers': '*'
        }
      }
    },
  }