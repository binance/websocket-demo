import initialState from './initials';
import types from './types';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GENERATE_KEY_SPOT:
      state.listenKey = action.payload;
      break;
    default:
      return state;
  }
  return {...state};
};