const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api',
    createProxyMiddleware({
      target: 'https://api.binance.com',
      changeOrigin: true,
      logLevel : 'debug'
    })
  );
};
