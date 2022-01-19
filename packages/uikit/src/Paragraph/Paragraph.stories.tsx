import React from 'react';

import { Story, Meta } from '@storybook/react';

import Paragraph, { ParagraphProps } from '~/Paragraph';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const DisplayLight = Template.bind({});
DisplayLight.args = {
  children: 'Display',
  size: 'display',
};

export const HeadlineLight = Template.bind({});
HeadlineLight.args = {
  children: 'Headline',
  size: 'headline',
};

export const TitleLight = Template.bind({});
TitleLight.args = {
  children: 'Title',
  size: 'title',
};

export const SubheaderLight = Template.bind({});
SubheaderLight.args = {
  children: 'Subheader',
  size: 'subheader',
};

export const BodyLight = Template.bind({});
BodyLight.args = {
  children: 'Body',
  size: 'body',
};

export const SmallLight = Template.bind({});
SmallLight.args = {
  children: 'Small',
  size: 'small',
};
