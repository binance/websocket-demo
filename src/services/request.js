import axios from 'axios';
import { handleResponse, handleError } from './response';

export const get = async url => { 
  return await axios 
    .get(url) 
    .then(handleResponse);
};

export const post = async (url, data, config) => { 
  return await axios.post(url, data, config)
    .then(handleResponse);
};

export const put = async (url, body) => { 
  return await axios
    .put(url, body)
    .then(handleResponse)
    .catch(handleError);
};

export const remove = async (url, body) => { 
  return await axios
    .delete(url, body)
    .then(handleResponse)
    .catch(handleError);
};
