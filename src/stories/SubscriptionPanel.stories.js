import React from 'react';
import { SubscriptionPanel } from '../components';

export default {
  title: 'Websocket Demo Page/ SubscriptionPanel',
  component: SubscriptionPanel,
  argTypes: {
    stream: []
  }
};
const Template = args => <SubscriptionPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  stream: []
};

export const Ticker = Template.bind({});
Ticker.args = {
  stream: [
    `{"e":"bookTicker","u":360286072052,"s":"BNBUSDT","b":"491.292","B":"1.59","a":"491.293","A":"72.27","T":1619338182725,"E":1619338182729}`,
    `{"e":"bookTicker","u":360286071995,"s":"BNBUSDT","b":"491.292","B":"0.27","a":"491.293","A":"72.27","T":1619338182720,"E":1619338182726}`,
    `{"e":"bookTicker","u":360286068937,"s":"BNBUSDT","b":"491.292","B":"1.67","a":"491.293","A":"72.27","T":1619338182516,"E":1619338182521}`,
    `{"e":"bookTicker","u":360286068912,"s":"BNBUSDT","b":"491.292","B":"1.67","a":"491.293","A":"72.18","T":1619338182510,"E":1619338182516}`,
    `{"e":"bookTicker","u":360286064604,"s":"BNBUSDT","b":"491.292","B":"1.67","a":"491.293","A":"72.24","T":1619338182232,"E":1619338182236}`,
    `{"e":"bookTicker","u":360286063942,"s":"BNBUSDT","b":"491.292","B":"1.67","a":"491.293","A":"70.55","T":1619338182200,"E":1619338182205}`,
    `{"e":"bookTicker","u":360286063608,"s":"BNBUSDT","b":"491.292","B":"3.36","a":"491.293","A":"70.55","T":1619338182186,"E":1619338182189}`,
    `{"e":"bookTicker","u":360286063072,"s":"BNBUSDT","b":"491.292","B":"20.36","a":"491.293","A":"70.55","T":1619338182165,"E":1619338182169}`,
    `{"e":"bookTicker","u":360286063064,"s":"BNBUSDT","b":"491.292","B":"18.67","a":"491.293","A":"70.55","T":1619338182165,"E":1619338182169}`,
    `{"e":"bookTicker","u":360286063025,"s":"BNBUSDT","b":"491.292","B":"18.67","a":"491.293","A":"72.04","T":1619338182163,"E":1619338182167}`
  ]
};
