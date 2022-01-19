import React from 'react';

import { Story, Meta } from '@storybook/react';

import FormControl, { FormControlProps } from '~/FormControl';
import Input from '~/Input';

export default {
  title: 'Form/FormControl',
  component: FormControl,
} as Meta;

const Template: Story<FormControlProps> = (args) => <FormControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label Input text default:',
  children: <Input placeholder="Text content for input" />,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label Input text default:',
  children: <Input isValid={false} placeholder="Text content for input" />,
  error: 'Campo obrigatório',
};
