import React from 'react';

import { Story, Meta } from '@storybook/react';

import Profile, { ProfileProps } from '~/Profile';

export default {
  title: 'Layout/Profile',
  component: Profile,
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://img.freepik.com/vetores-gratis/perfil-de-usuario-feminino-avatar-e-uma-mulher-um-personagem-para-um-protetor-de-tela-com-emocoes_505620-556.jpg?w=826',
  name: 'vini',
};
