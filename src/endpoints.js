const endpoints = {
  api: {
    spotListenKey: `/api/v3/userDataStream`,
    uFutureListenKey: `/fapi/v1/listenKey`,
    cFutureListenKey: `/dapi/v1/listenKey`
  },
  ws: {
    spotBase: `wss://stream.binance.com:9443/stream`,
    spotTestBase: `	wss://testnet.binance.vision/stream`,
    uFutureBase: `wss://fstream.binance.com/stream`,
    uFutureTestBase: `wss://stream.binancefuture.com/stream`,
    cFutureBase: `wss://dstream.binance.com/stream`,
    cFutureTestBase: `wss://dstream.binancefuture.com/stream`
  }
};

export default endpoints;
