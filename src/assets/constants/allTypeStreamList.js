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
    type: 'uFutures',
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
      },
      {
        streamName: 'continuousKline',
        listenKey: false,
        code: '{pair}_{contractType}@continuousKline_{interval}',
        attributeList: ['pair', 'contractType', 'interval']
      },
      {
        streamName: 'miniTicker',
        listenKey: false,
        code: '{usymbol}@miniTicker',
        attributeList: ['usymbol']
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
        code: '{usymbol}@ticker',
        attributeList: ['usymbol']
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
        code: '{usymbol}@bookTicker',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allBookTicker',
        listenKey: false,
        code: '!bookTicker',
        attributeList: []
      },
      {
        streamName: 'forceOrder',
        listenKey: false,
        code: '{usymbol}@forceOrder',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allForceOrder',
        listenKey: false,
        code: '!forceOrder@arr',
        attributeList: []
      },
      {
        streamName: 'partialDepth',
        listenKey: false,
        code: '{usymbol}@depth{levels}@500ms',
        attributeList: ['usymbol', 'levels']
      },
      {
        streamName: 'diffDepth',
        listenKey: false,
        code: '{usymbol}@depth@500ms',
        attributeList: ['usymbol']
      }
    ]
  },
  {
    type: 'cFutures',
    dataSource: 'market',
    streamList: [
      {
        streamName: 'aggregateTrade',
        listenKey: false,
        code: '{csymbol}@aggTrade',
        attributeList: ['csymbol']
      },
      {
        streamName: 'indexPrice',
        listenKey: false,
        code: '{cpair}@indexPrice',
        attributeList: ['cpair']
      },
      {
        streamName: 'markPrice',
        listenKey: false,
        code: '{csymbol}@markPrice',
        attributeList: ['csymbol']
      },
      {
        streamName: 'pairMarkPrice',
        listenKey: false,
        code: '{cpair}@markPrice',
        attributeList: ['cpair']
      },
      {
        streamName: 'kline',
        listenKey: false,
        code: '{csymbol}@kline_{interval}',
        attributeList: ['csymbol', 'interval']
      },
      {
        streamName: 'continuousKline',
        listenKey: false,
        code: '{cpair}_{contractType}@continuousKline_{interval}',
        attributeList: ['cpair', 'contractType', 'interval']
      },
      {
        streamName: 'indexKline',
        listenKey: false,
        code: '{cpair}@indexPriceKline_{interval}',
        attributeList: ['cpair', 'interval']
      },
      {
        streamName: 'markKline',
        listenKey: false,
        code: '{csymbol}@markPriceKline_{interval}',
        attributeList: ['csymbol', 'interval']
      },
      {
        streamName: 'miniTicker',
        listenKey: false,
        code: '{csymbol}@miniTicker',
        attributeList: ['csymbol']
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
        code: '{csymbol}@ticker',
        attributeList: ['csymbol']
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
        code: '{csymbol}@bookTicker',
        attributeList: ['csymbol']
      },
      {
        streamName: 'allBookTicker',
        listenKey: false,
        code: '!bookTicker',
        attributeList: []
      },
      {
        streamName: 'forceOrder',
        listenKey: false,
        code: '{csymbol}@forceOrder',
        attributeList: ['csymbol']
      },
      {
        streamName: 'allForceOrder',
        listenKey: false,
        code: '!forceOrder@arr',
        attributeList: []
      },
      {
        streamName: 'partialDepth',
        listenKey: false,
        code: '{csymbol}@depth{levels}@500ms',
        attributeList: ['csymbol', 'levels']
      },
      {
        streamName: 'diffDepth',
        listenKey: false,
        code: '{csymbol}@depth@500ms',
        attributeList: ['csymbol']
      }
    ]
  }
];

export default allTypeStreamList;
