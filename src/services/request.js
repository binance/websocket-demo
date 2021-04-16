import axios from 'axios';
import { client } from 'websocket';
import { handleResponse, handleError } from './response';

export const get = url => { 
  return axios 
    .get(url) 
    .then(handleResponse);
};

export const post = (url, data, config) => { 
  return axios.post(url, data, config).then(handleResponse) 
    // .catch(handleError); 
};

export const put = (url, body) => { 
  return axios 
    .put(url, body) 
    .then(handleResponse) 
    .catch(handleError); 
};

export const remove = (url, body) => { 
  return axios 
    .delete(url, body) 
    .then(handleResponse) 
    .catch(handleError); 
};

export const wsConnect = (url, key, params) => {
  const ws = new client();
  ws.on('connectFailed', (error) => {
    console.log(`Connect Error: ${error.toString()}`);
  });
  ws.on('connect', (connection) => {
    console.log('Connection established.');
    connection.on('error', (error) => {
      console.log(`Connection Error: ${error.toString()}`);
    });
    if (params) {
      const payload = {
        method: 'SUBSCRIBE',
        params: params
      };
      connection.send(JSON.stringify(payload));
    }
    connection.on('message', (message) => {
      console.log(message);
    });

    setTimeout(() => {
      console.log('Connection closed');
      connection.close();
    }, 60000);
  });
  ws.connect(url);
}