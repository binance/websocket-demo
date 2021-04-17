const allTypeStreamList = [
  {
    type: 'spot',
    dataSource: 'market',
    streamList: [
      {
        streamName: 'aggregateTrade',
        listenKey: false,
        code: '{symbol}@aggTrade',
        attributeList: ['symbol']
      },
      {
        streamName: 'trade',
        listenKey: false,
        code: '{symbol}@trade',
        attributeList: ['symbol']
      }
    ]
  }
];

export default allTypeStreamList;