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
      },
      {
        streamName: 'kline',
        listenKey: false,
        code: '{symbol}@kline_{interval}',
        attributeList: ['symbol', 'interval']
      },
      {
        streamName: 'miniTicker',
        listenKey: false,
        code: '{symbol}@miniTicker',
        attributeList: ['symbol']
      },
      {
        streamName: 'allMarketMiniTicker',
        listenKey: false,
        code: '!miniTicker@arr',
        attributeList: []
      },
      {
        streamName: 'ticker',
        listenKey: false,
        code: '{symbol}@ticker',
        attributeList: ['symbol']
      },
      {
        streamName: 'allMarketTicker',
        listenKey: false,
        code: '!ticker@arr',
        attributeList: []
      },
      {
        streamName: 'bookTicker',
        listenKey: false,
        code: '{symbol}@bookTicker',
        attributeList: ['symbol']
      },
      {
        streamName: 'allBookTicker',
        listenKey: false,
        code: '!bookTicker',
        attributeList: []
      },
      {
        streamName: 'partialBookDepth',
        listenKey: false,
        code: '{symbol}@depth{levels}',
        attributeList: ['symbol', 'levels']
      },
      {
        streamName: 'diffBookDepth',
        listenKey: false,
        code: '{symbol}@depth',
        attributeList: ['symbol']
      }
    ]
  },
  {
    type: 'spot',
    dataSource: 'user',
    streamList: [
      {
        streamName: 'userStream',
        listenKey: true,
        code: '',
        attributeList: []
      }
    ]
  },
  {
    type: 'u_futures',
    dataSource: 'market',
    streamList: [
      {
        streamName: 'aggregateTrade',
        listenKey: false,
        code: '{usymbol}@aggTrade',
        attributeList: ['usymbol']
      },
      {
        streamName: 'markPriceStream',
        listenKey: false,
        code: '{usymbol}@markPrice',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allMarkPriceStream',
        listenKey: false,
        code: '!markPrice@arr',
        attributeList: []
      },
      {
        streamName: 'kline',
        listenKey: false,
        code: '{usymbol}@kline_{interval}',
        attributeList: ['usymbol', 'interval']
      }
    ]
  }
];

export default allTypeStreamList;
