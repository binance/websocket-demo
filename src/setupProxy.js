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
    '/t/api',
    createProxyMiddleware({
      target: 'https://testnet.binance.vision',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/t/api': '/api'
      }
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
    '/t/fapi',
    createProxyMiddleware({
      target: 'https://testnet.binancefuture.com',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/t/fapi': '/fapi'
      }
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
  app.use(
    '/t/dapi',
    createProxyMiddleware({
      target: 'https://testnet.binancefuture.com',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/t/dapi': '/dapi'
      }
    })
  );
};
