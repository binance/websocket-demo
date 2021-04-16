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

const actions = {
  generateSpotUserStreamKey
};
export default actions;