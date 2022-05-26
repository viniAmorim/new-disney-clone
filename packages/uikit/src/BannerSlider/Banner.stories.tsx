import React from 'react';

import { Story, Meta } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from './BannerSlider';

export default {
  title: 'layout/BannerSlider',
  component: BannerSlider,
} as Meta;

const Template: Story<BannerSliderProps> = (args) => <BannerSlider {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      link: '#',
      url: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/gory-pejzazh-priroda-46792.jpg',
    },
    {
      link: '#',
      url: 'https://mobimg.b-cdn.net/pic/v2/gallery/preview/gory-ozera-pejzazh-33751.jpg',
    },
  ],
};
