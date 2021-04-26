const endpoints = {
  api: {
    spotListenKey: `/api/v3/userDataStream`
  },
  ws: {
    spotTestBase: `	wss://testnet.binance.vision/stream`,
    spotBase: `wss://stream.binance.com:9443/stream`
  }
};

export default endpoints;
