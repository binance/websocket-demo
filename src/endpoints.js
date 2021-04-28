const endpoints = {
  api: {
    spotListenKey: `/api/v3/userDataStream`
  },
  ws: {
    spotBase: `wss://stream.binance.com:9443/stream`,
    spotTestBase: `	wss://testnet.binance.vision/stream`,
    uFutureBase: `wss://fstream.binance.com/stream`,
    uFutureTestBase: `wss://stream.binancefuture.com/stream`
  }
};

export default endpoints;
