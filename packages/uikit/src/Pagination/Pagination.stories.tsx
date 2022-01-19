import React from 'react';

import { Story, Meta } from '@storybook/react';

import Pagination, { PaginationProps } from '~/Pagination';

export default {
  title: 'Layout/Pagination',
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const One = Template.bind({});
One.args = {
  size: 10,
  current: 1,
};

export const Two = Template.bind({});
Two.args = {
  size: 10,
  current: 2,
};

export const Six = Template.bind({});
Six.args = {
  size: 10,
  current: 6,
};

export const Nine = Template.bind({});
Nine.args = {
  size: 10,
  current: 9,
};

export const Ten = Template.bind({});
Ten.args = {
  size: 10,
  current: 10,
};
