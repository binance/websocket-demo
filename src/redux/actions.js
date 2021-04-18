import types from './types';
import { post } from '../services/request';
import endpoints from '../endpoints';

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

const toLowerCase = selectStream => {
  return selectStream.map(stream => stream.replace(/([A-Z]+)@/, symbol => symbol.toLowerCase()));
};

const subscribeMarketStream = () => {
  return async (dispatch, getState) => {
    const { selectedStream } = getState();
    const lowerCaseStreams = toLowerCase(selectedStream);
    dispatch({
      type: types.CLEAR_STREAM_MESSAGE
    });
    const ws = new WebSocket(endpoints.ws.spotBase);
    ws.onerror = wsOnError;
    ws.onclose = wsOnClose;
    ws.onopen = function () {
      console.log('Connection established.');
      ws.send(
        JSON.stringify({
          method: 'SUBSCRIBE',
          params: lowerCaseStreams,
          id: 1
        })
      );
      setTimeout(() => {
        ws.send(
          JSON.stringify({
            method: 'UNSUBSCRIBE',
            params: lowerCaseStreams,
            id: 1
          })
        );
      }, 2000);
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

const selectStream = code => {
  return (dispatch, getState) => {
    const { selectedStream } = getState();
    const streamList = [...selectedStream];
    if (streamList.indexOf(code) === -1) {
      streamList.push(code);
      dispatch({
        type: types.SET_SELECTED_STREAM,
        payload: streamList
      });
    }
  };
};

const removeSelectedStream = code => {
  return (dispatch, getState) => {
    const { selectedStream } = getState();
    const streamList = [...selectedStream];
    const index = streamList.indexOf(code);
    streamList.splice(index, 1);
    dispatch({
      type: types.SET_SELECTED_STREAM,
      payload: streamList
    });
  };
};

const actions = {
  generateSpotUserStreamKey,
  selectStream,
  removeSelectedStream,
  subscribeMarketStream
};
export default actions;
