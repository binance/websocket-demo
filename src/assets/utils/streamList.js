export default [
  {
    streamName: 'aggregateTrade',
    listenKey: false,
    code: '{symbol}@aggTrade'
  },
  {
    streamName: 'trade',
    listenKey: false,
    code: '{symbol}@trade'
  }
];