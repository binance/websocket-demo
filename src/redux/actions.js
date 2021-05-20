import types from './types';
import endpoints from '../endpoints';
import { EMPTY_STR, PROD, SPOT, UFUTURES, CFUTURES } from '@constants';

const getBase = (env, type) => {
  switch (type) {
    case SPOT:
      return env === PROD ? endpoints.ws.spotBase : endpoints.ws.spotTestBase;
    case UFUTURES:
      return env === PROD ? endpoints.ws.uFutureBase : endpoints.ws.uFutureTestBase;
    case CFUTURES:
      return env === PROD ? endpoints.ws.cFutureBase : endpoints.ws.cFutureTestBase;
    default:
      return EMPTY_STR;
  }
};

const subscribeUserStream = (listenKey, env) => {
  return async (dispatch, getState) => {
    const { selectedUserStream } = getState();
    dispatch(subscribeStream(env, selectedUserStream, [listenKey]));
  };
};

const subscribeMarketStream = env => {
  return async (dispatch, getState) => {
    const { selectedStream } = getState();
    dispatch(subscribeStream(env, selectedStream.type, selectedStream.codes));
  };
};

const subscribeStream = (env, type, streams) => {
  return async dispatch => {
    dispatch({
      type: types.CLEAR_STREAM_MESSAGE
    });
    const path = `${getBase(env, type)}?streams=${streams.join('/')}`;
    dispatch({
      type: types.SET_BASE_STREAM_PATH,
      payload: path
    });
    const ws = new WebSocket(path);
    ws.onerror = wsOnError;
    ws.onclose = wsOnClose;
    ws.onopen = function () {
      console.log('Connection established.');
      ws.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: streams,
          id: 1
        })
      );
      setTimeout(() => {
        ws.send(
          JSON.stringify({
            method: 'UNSUBSCRIBE',
            params: streams,
            id: 1
          })
        );
        ws.close();
        dispatch({
          type: types.APPEND_STREAM_MESSAGE,
          payload: 'End of subscription.'
        });
      }, 5000);
    };
    ws.onmessage = function (e) {
      if (e.type === 'error') {
        wsOnError(e);
      } else {
        dispatch({
          type: types.APPEND_STREAM_MESSAGE,
          payload: e.data
        });
      }
    };
  };
};

const wsOnError = err => {
  console.log('Connection error.', err);
};
const wsOnClose = () => {
  console.log('Connection closed.');
};

const isSameType = (type, selectedStream) => {
  return selectedStream.type === EMPTY_STR || selectedStream.type === type;
};

const selectStream = (type, code) => {
  return (dispatch, getState) => {
    const { selectedStream } = getState();
    const codes = selectedStream.codes;
    const streamList = [...codes];
    if (isSameType(type, selectedStream) && streamList.indexOf(code) === -1) {
      streamList.push(code);
      dispatch({
        type: types.SET_SELECTED_STREAM,
        payload: {
          type: type,
          codes: streamList
        }
      });
    }
  };
};

const selectUserStream = type => {
  return {
    type: types.SET_USER_STREAM,
    payload: { type: type }
  };
};

const removeSelectedStream = code => {
  return (dispatch, getState) => {
    const { selectedStream } = getState();
    const codes = selectedStream.codes;
    const streamList = [...codes];
    const index = streamList.indexOf(code);
    streamList.splice(index, 1);
    dispatch({
      type: types.SET_SELECTED_STREAM,
      payload: {
        type: streamList.length ? selectedStream.type : EMPTY_STR,
        codes: streamList
      }
    });
  };
};

const removeAllSelectedStream = () => {
  return dispatch => {
    dispatch({
      type: types.SET_SELECTED_STREAM,
      payload: {
        type: EMPTY_STR,
        codes: []
      }
    });
  };
};

const actions = {
  selectStream,
  selectUserStream,
  removeSelectedStream,
  removeAllSelectedStream,
  subscribeMarketStream,
  subscribeUserStream
};
export default actions;
