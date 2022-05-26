import React from 'react';

import { Story, Meta } from '@storybook/react';

import MovieCard, { MovieCardProps } from './MovieCard';

export default {
  title: 'Layout/MovieCard',
  component: MovieCard,
} as Meta;

const Template: Story<MovieCardProps> = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://th.bing.com/th/id/OIP.diUxrcj1bEWrhCFXVt8-xgHaEK?pid=ImgDet&rs=1',
};
