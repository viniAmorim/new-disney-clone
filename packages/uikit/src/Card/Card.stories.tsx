import React from 'react';

import { Story, Meta } from '@storybook/react';

import Card, { CardProps } from '~/Card';

export default {
  title: 'Layout/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Pixar = Template.bind({});
Pixar.args = {
 src: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpixar.7e1aa55f.png&w=1920&q=75'
};

export const DisneyPlus = Template.bind({});
DisneyPlus.args = {
 src: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdisney-button.bc19a795.png&w=1920&q=75'
};

export const StarWars = Template.bind({});
StarWars.args = {
 src: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstar-wars-button.92957ee4.png&w=1920&q=75'
};

export const NatGeo = Template.bind({});
NatGeo.args = {
 src: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnatgeo-button.f9289957.png&w=1920&q=75'
};

export const Marvel = Template.bind({});
Marvel.args = {
 src: 'http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarvel-button.f2159ecf.png&w=1920&q=75'
};


