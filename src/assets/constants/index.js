export { default as allMarketStreams } from './allMarketStreams.js';
export { default as symbols } from './symbols.js';
export { default as futuresSymbols } from './futuresSymbols.js';
export { default as cSymbols } from './cSymbols.js';
export { default as pairs } from './pairs.js';
export { default as cPairs } from './cPairs.js';
export const EMPTY_STR = '';
export const levels = [5, 10, 20];
export const intervals = [
  '1m',
  '3m',
  '5m',
  '15m',
  '30m',
  '1h',
  '2h',
  '4h',
  '6h',
  '8h',
  '12h',
  '1d',
  '3d',
  '1w',
  '1M'
];
export const SYMBOL = 'symbol';
export const USYMBOL = 'usymbol';
export const CSYMBOL = 'csymbol';
export const PAIR = 'pair';
export const CPAIR = 'cpair';
export const CONTRACT_TYPE = 'contractType';
export const INTERVAL = 'interval';
export const LEVEL = 'levels';
export const TESTNET = 'testnet';
export const PROD = 'prod';
export const SPOT = 'spot';
export const UFUTURES = 'uFutures';
export const CFUTURES = 'cFutures';
export const contractTypes = ['perpetual', 'current_quarter', 'next_quarter'];
