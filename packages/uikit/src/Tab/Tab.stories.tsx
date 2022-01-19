import React from 'react';

import { Story, Meta } from '@storybook/react';

import Tab, { TabProps } from '~/Tab';

export default {
  title: 'Layout/Tab',
  component: Tab,
} as Meta;

const Template: Story<TabProps> = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Observações', 'Arquivos', 'Comunicação'],
  content: [<p>Observações</p>, <p>Arquivos</p>, <p>Comunicação</p>],
};
