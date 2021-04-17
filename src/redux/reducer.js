import initialState from './initials';
import types from './types';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GENERATE_KEY_SPOT:
      state.listenKey = action.payload;
      break;
    case types.CLEAR_STREAM_MESSAGE:
      state.stream = [];
      break;
    case types.APPEND_STREAM_MESSAGE:
      state.stream = [...state.stream, action.payload];
      break;
    case types.ADD_STREAM_TO_LIST:
      const streamList = [...state.selectedStream];
      if (streamList.indexOf(action.payload) === -1) {
        streamList.push(action.payload);
      }
      state.selectedStream = streamList;
      break;
    default:
      return state;
  }
  return {...state};
};