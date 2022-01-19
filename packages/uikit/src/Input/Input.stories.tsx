import React from 'react';

import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from '~/Input';

export default {
  title: 'Form/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Text content for input',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Text content for input',
  isValid: false,
};

export const Mask = Template.bind({});
Mask.args = {
  placeholder: 'Text content for input',
  format: '(##) ####-####',
  mask: '_',
};
