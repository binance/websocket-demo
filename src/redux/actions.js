import types from './types';
import { post } from '../services/request';
import endpoints from '../endpoints';
import { EMPTY_STR, PROD, SPOT, UFUTURES, CFUTURES } from '@constants';
import { isUserStream } from '@common';

const generateSpotUserStreamKey = apiKey => {
  return async dispatch => {
    try {
      const data = await post(endpoints.api.spotListenKey, null, {
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': apiKey
        }
      });
      dispatch({
        type: types.GENERATE_KEY_SPOT,
        payload: data.listenKey
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const convertStream = (dataSource, selectStream, key) => {
  return isUserStream(dataSource) ? [key] : selectStream;
};

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

const subscribeStream = env => {
  return async (dispatch, getState) => {
    const { listenKey, selectedStream } = getState();
    const streams = convertStream(selectedStream.dataSource, selectedStream.codes, listenKey);
    dispatch({
      type: types.CLEAR_STREAM_MESSAGE
    });
    const ws = new WebSocket(getBase(env, selectedStream.type));
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
        if (selectedStream.type === SPOT) ws.close();
      }, 3000);
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

const selectStream = (type, dataSource, code) => {
  return (dispatch, getState) => {
    const { selectedStream } = getState();
    const codes = selectedStream.codes;
    const streamList = [...codes];
    if (
      (selectedStream.dataSource === EMPTY_STR || selectedStream.dataSource === dataSource) &&
      streamList.indexOf(code) === -1
    ) {
      streamList.push(code);
      dispatch({
        type: types.SET_SELECTED_STREAM,
        payload: {
          type: type,
          dataSource: dataSource,
          codes: streamList
        }
      });
    }
  };
};

const selectUserStream = dataSource => {
  return {
    type: types.SET_SELECTED_STREAM,
    payload: {
      dataSource: dataSource,
      codes: ['user data']
    }
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
        dataSource: streamList.length ? selectedStream.dataSource : EMPTY_STR,
        codes: streamList
      }
    });
  };
};

const actions = {
  generateSpotUserStreamKey,
  selectStream,
  selectUserStream,
  removeSelectedStream,
  subscribeStream
};
export default actions;
