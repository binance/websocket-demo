import React from 'react';
import { StreamMenu, StreamSettingModal } from '../components';

export default {
  title: 'Websocket Demo Page/ StreamMenu',
  component: StreamMenu,
  subcomponent: StreamSettingModal,
  argTypes: {
    actions: undefined
  }
};

const Template = args => <StreamMenu {...args} />;

export const Default = Template.bind({});
