import initialState from './initials';
import types from './types';
import produce from 'immer';

const reducer = produce((draft, { type, payload }) => {
  switch (type) {
    case types.CLEAR_STREAM_MESSAGE:
      draft.stream = [];
      break;
    case types.APPEND_STREAM_MESSAGE:
      draft.stream.push(payload);
      break;
    case types.SET_SELECTED_STREAM:
      draft.selectedStream = {
        type: payload.type,
        codes: payload.codes
      };
      break;
    case types.SET_USER_STREAM:
      draft.selectedUserStream = payload.type;
      break;
    case types.SET_BASE_STREAM_PATH:
      draft.path = payload;
      break;
    default:
      break;
  }
}, initialState);

export default reducer;
