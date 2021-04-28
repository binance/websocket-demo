import initialState from './initials';
import types from './types';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GENERATE_KEY_SPOT:
      state.listenKey = payload;
      break;
    case types.CLEAR_STREAM_MESSAGE:
      state.stream = [];
      break;
    case types.APPEND_STREAM_MESSAGE:
      state.stream = [...state.stream, payload];
      break;
    case types.SET_SELECTED_STREAM:
      state.selectedStream = {
        type: payload.type,
        dataSource: payload.dataSource,
        codes: payload.codes
      };
      break;
    default:
      return state;
  }
  return { ...state };
}
