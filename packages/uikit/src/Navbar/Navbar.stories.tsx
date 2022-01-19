import React from 'react';

import { Story, Meta } from '@storybook/react';

import Navbar, { NavbarProps } from '~/Navbar';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = args => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: 'Painel',
      link: '/painel',
      active: true,
    },
    {
      label: 'Perfil',
      link: '/perfil',
    },
  ],
};
