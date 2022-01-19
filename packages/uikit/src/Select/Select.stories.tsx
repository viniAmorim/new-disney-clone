import React from 'react';

import { Story, Meta } from '@storybook/react';

import Select, { SelectProps } from '~/Select';
import Button from '~/Button';

export default {
  title: 'Form/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};

export const Error = Template.bind({});
Error.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  isValid: false,
};

export const Children = Template.bind({});
Children.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
  bottomChildren: <Button size="small">cadastrar novo cliente</Button>,
};
