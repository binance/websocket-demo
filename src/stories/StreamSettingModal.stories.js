import React from 'react';
import { StreamSettingModal } from '../components';

export default {
  title: 'Websocket Demo Page/ StreamSettingModal',
  component: StreamSettingModal,
  argTypes: {
    indexKey: '',
    visible: false,
    onOk: undefined,
    onCancel: undefined
  }
};

const Template = args => <StreamSettingModal {...args} />;

export const NoParamAllMarketMiniTicker = Template.bind({});
NoParamAllMarketMiniTicker.args = {
  indexKey: 'spot:4',
  visible: true
};

export const OneParamTrade = Template.bind({});
OneParamTrade.args = {
  indexKey: 'spot:0',
  visible: true
};

export const TwoParamKline = Template.bind({});
TwoParamKline.args = {
  indexKey: 'spot:2',
  visible: true
};
