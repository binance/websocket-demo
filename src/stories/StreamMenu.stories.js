import React from 'react';
import { StreamMenu, StreamSettingModal } from '../components';

export default {
  title: 'Websocket Demo Page/ StreamMenu',
  component: StreamMenu,
  subcomponent: StreamSettingModal,
  argTypes: {
    actions: undefined,
    type: ''
  }
};

const Template = args => <StreamMenu {...args} />;

export const Spot = Template.bind({});
Spot.args = {
  type: 'spot'
};

export const UsdsMFutures = Template.bind({});
UsdsMFutures.args = {
  type: 'uFutures'
};

export const CoinMFutures = Template.bind({});
CoinMFutures.args = {
  type: 'cFutures'
};
