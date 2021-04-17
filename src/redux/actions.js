import types from './types';
import { post } from '../services/request';
import endpoints from '../endpoints';

const generateSpotUserStreamKey = (apiKey) => {
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
    } catch(error) {
      console.log(error);
    } 
  }
}

const subscribeMarketStream = () => {
  return async (dispatch, getState) => {
    const { selectedStream } = getState();
    dispatch({
      type: types.CLEAR_STREAM_MESSAGE,
    });
    const payload = [];
    // call ws
    dispatch({
      type: types.APPEND_STREAM_MESSAGE,
      payload: payload
    });

  }
};

const selectStream = (code) => {
  return {
    type: types.ADD_STREAM_TO_LIST,
    payload: code
  }
};

const actions = {
  generateSpotUserStreamKey,
  selectStream,
  subscribeMarketStream
};
export default actions;