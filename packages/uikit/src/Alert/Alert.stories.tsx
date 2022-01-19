import React from 'react';

import { Story, Meta } from '@storybook/react';

import Alert, { AlertProps } from '~/Alert';

export default {
  title: 'Form/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  children:
    'Solicitação de senha enviada com sucesso. Em breve você receberá um e-mail com um link para criar uma nova senha.',
  appearance: 'success',
};
