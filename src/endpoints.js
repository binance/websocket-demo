const endpoints = {
  api: {
    spotListenKey: `/api/v3/userDataStream`
  },
  ws: {
    marketBase: streamName => `wss://stream.binance.com:9443/stream?streams=${streamName}`
  }
};

export default endpoints;