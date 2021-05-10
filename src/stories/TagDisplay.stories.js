import React from 'react';
import { TagDisplay } from '../components';

export default {
  title: 'Websocket Demo Page/ TagDisplay',
  component: TagDisplay,
  argTypes: {
    actions: undefined,
    tags: []
  }
};

const Template = args => <TagDisplay {...args} />;

export const ZeroTag = Template.bind({});

export const OneTag = Template.bind({});
OneTag.args = {
  tags: ['btcusdt@aggTrade']
};

export const ThreeTag = Template.bind({});
ThreeTag.args = {
  tags: ['btcusdt@aggTrade', 'btcusdt@depth', 'bnbusdt@aggTrade']
};
