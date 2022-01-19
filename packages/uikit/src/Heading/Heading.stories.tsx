import React from 'react';

import { Story, Meta } from '@storybook/react';

import Heading, { HeadingProps } from '~/Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const DisplayHeavy = Template.bind({});
DisplayHeavy.args = {
  children: 'Display',
  size: 'display',
};

export const HeadlineHeavy = Template.bind({});
HeadlineHeavy.args = {
  children: 'Headline',
  size: 'headline',
};

export const TitleHeavy = Template.bind({});
TitleHeavy.args = {
  children: 'Title',
  size: 'title',
};

export const SubheaderHeavy = Template.bind({});
SubheaderHeavy.args = {
  children: 'Subheader',
  size: 'subheader',
};

export const BodyHeavy = Template.bind({});
BodyHeavy.args = {
  children: 'Body',
  size: 'body',
};

export const SmallHeavy = Template.bind({});
SmallHeavy.args = {
  children: 'Small',
  size: 'small',
};
