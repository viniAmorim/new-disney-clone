import React from 'react';

import { Story, Meta } from '@storybook/react';

import Link, { LinkProps } from '~/Link';

export default {
  title: 'Form/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Esqueci a senha',
};
