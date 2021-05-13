const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.binance.com',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
  app.use(
    '/fapi',
    createProxyMiddleware({
      target: 'https://fapi.binance.com',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
  app.use(
    '/dapi',
    createProxyMiddleware({
      target: 'https://dapi.binance.com',
      changeOrigin: true,
      logLevel: 'debug'
    })
  );
};
