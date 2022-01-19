import React from 'react';

import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '~/Button';

export default {
  title: 'Form/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const MediumSolid = Template.bind({});
MediumSolid.args = {
  children: 'Medium solid',
  size: 'medium',
  variant: 'solid',
};

export const MediumSolidLoading = Template.bind({});
MediumSolidLoading.args = {
  children: 'Medium solid',
  size: 'medium',
  variant: 'solid',
  isLoading: true,
  disabled: true,
};

export const SmallSolid = Template.bind({});
SmallSolid.args = {
  children: 'Small solid',
  size: 'small',
  variant: 'solid',
};

export const SmallSolidLoading = Template.bind({});
SmallSolidLoading.args = {
  children: 'Small solid',
  size: 'small',
  variant: 'solid',
  isLoading: true,
  disabled: true,
};

export const MediumGhost = Template.bind({});
MediumGhost.args = {
  children: 'Medium ghost',
  size: 'medium',
  variant: 'ghost',
};

export const MediumGhostLoading = Template.bind({});
MediumGhostLoading.args = {
  children: 'Medium ghost',
  size: 'medium',
  variant: 'ghost',
  isLoading: true,
  disabled: true,
};

export const SmallGhost = Template.bind({});
SmallGhost.args = {
  children: 'Small ghost',
  size: 'small',
  variant: 'ghost',
};

export const SmallGhostLoading = Template.bind({});
SmallGhostLoading.args = {
  children: 'Small ghost',
  size: 'small',
  variant: 'ghost',
  isLoading: true,
  disabled: true,
};
