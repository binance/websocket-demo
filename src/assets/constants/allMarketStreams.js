const allMarketStreams = [
  {
    type: 'spot',
    streamList: [
      {
        streamName: 'aggregateTrade',
        code: '{symbol}@aggTrade',
        attributeList: ['symbol']
      },
      {
        streamName: 'trade',
        code: '{symbol}@trade',
        attributeList: ['symbol']
      },
      {
        streamName: 'kline',
        code: '{symbol}@kline_{interval}',
        attributeList: ['symbol', 'interval']
      },
      {
        streamName: 'miniTicker',
        code: '{symbol}@miniTicker',
        attributeList: ['symbol']
      },
      {
        streamName: 'allMarketMiniTicker',
        code: '!miniTicker@arr',
        attributeList: []
      },
      {
        streamName: 'ticker',
        code: '{symbol}@ticker',
        attributeList: ['symbol']
      },
      {
        streamName: 'allMarketTicker',
        code: '!ticker@arr',
        attributeList: []
      },
      {
        streamName: 'bookTicker',
        code: '{symbol}@bookTicker',
        attributeList: ['symbol']
      },
      {
        streamName: 'allBookTicker',
        code: '!bookTicker',
        attributeList: []
      },
      {
        streamName: 'partialBookDepth',
        code: '{symbol}@depth{levels}',
        attributeList: ['symbol', 'levels']
      },
      {
        streamName: 'diffBookDepth',
        code: '{symbol}@depth',
        attributeList: ['symbol']
      }
    ]
  },
  {
    type: 'uFutures',
    streamList: [
      {
        streamName: 'aggregateTrade',
        code: '{usymbol}@aggTrade',
        attributeList: ['usymbol']
      },
      {
        streamName: 'markPriceStream',
        code: '{usymbol}@markPrice',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allMarkPriceStream',
        code: '!markPrice@arr',
        attributeList: []
      },
      {
        streamName: 'kline',
        code: '{usymbol}@kline_{interval}',
        attributeList: ['usymbol', 'interval']
      },
      {
        streamName: 'continuousKline',
        code: '{pair}_{contractType}@continuousKline_{interval}',
        attributeList: ['pair', 'contractType', 'interval']
      },
      {
        streamName: 'miniTicker',
        code: '{usymbol}@miniTicker',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allMarketMiniTicker',
        code: '!miniTicker@arr',
        attributeList: []
      },
      {
        streamName: 'ticker',
        code: '{usymbol}@ticker',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allMarketTicker',
        code: '!ticker@arr',
        attributeList: []
      },
      {
        streamName: 'bookTicker',
        code: '{usymbol}@bookTicker',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allBookTicker',
        code: '!bookTicker',
        attributeList: []
      },
      {
        streamName: 'forceOrder',
        code: '{usymbol}@forceOrder',
        attributeList: ['usymbol']
      },
      {
        streamName: 'allForceOrder',
        code: '!forceOrder@arr',
        attributeList: []
      },
      {
        streamName: 'partialDepth',
        code: '{usymbol}@depth{levels}@500ms',
        attributeList: ['usymbol', 'levels']
      },
      {
        streamName: 'diffDepth',
        code: '{usymbol}@depth@500ms',
        attributeList: ['usymbol']
      }
    ]
  },
  {
    type: 'cFutures',
    streamList: [
      {
        streamName: 'aggregateTrade',
        code: '{csymbol}@aggTrade',
        attributeList: ['csymbol']
      },
      {
        streamName: 'indexPrice',
        code: '{cpair}@indexPrice',
        attributeList: ['cpair']
      },
      {
        streamName: 'markPrice',
        code: '{csymbol}@markPrice',
        attributeList: ['csymbol']
      },
      {
        streamName: 'pairMarkPrice',
        code: '{cpair}@markPrice',
        attributeList: ['cpair']
      },
      {
        streamName: 'kline',
        code: '{csymbol}@kline_{interval}',
        attributeList: ['csymbol', 'interval']
      },
      {
        streamName: 'continuousKline',
        code: '{cpair}_{contractType}@continuousKline_{interval}',
        attributeList: ['cpair', 'contractType', 'interval']
      },
      {
        streamName: 'indexKline',
        code: '{cpair}@indexPriceKline_{interval}',
        attributeList: ['cpair', 'interval']
      },
      {
        streamName: 'markKline',
        code: '{csymbol}@markPriceKline_{interval}',
        attributeList: ['csymbol', 'interval']
      },
      {
        streamName: 'miniTicker',
        code: '{csymbol}@miniTicker',
        attributeList: ['csymbol']
      },
      {
        streamName: 'allMarketMiniTicker',
        code: '!miniTicker@arr',
        attributeList: []
      },
      {
        streamName: 'ticker',
        code: '{csymbol}@ticker',
        attributeList: ['csymbol']
      },
      {
        streamName: 'allMarketTicker',
        code: '!ticker@arr',
        attributeList: []
      },
      {
        streamName: 'bookTicker',
        code: '{csymbol}@bookTicker',
        attributeList: ['csymbol']
      },
      {
        streamName: 'allBookTicker',
        code: '!bookTicker',
        attributeList: []
      },
      {
        streamName: 'forceOrder',
        code: '{csymbol}@forceOrder',
        attributeList: ['csymbol']
      },
      {
        streamName: 'allForceOrder',
        code: '!forceOrder@arr',
        attributeList: []
      },
      {
        streamName: 'partialDepth',
        code: '{csymbol}@depth{levels}@500ms',
        attributeList: ['csymbol', 'levels']
      },
      {
        streamName: 'diffDepth',
        code: '{csymbol}@depth@500ms',
        attributeList: ['csymbol']
      }
    ]
  }
];

export default allMarketStreams;
