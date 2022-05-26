import React from 'react';

import { Story, Meta } from '@storybook/react';

import CategoryCard, { CategoryCardProps } from '~/CategoryCard';

export default {
  title: 'Layout/CategoryCard',
  component: CategoryCard,
} as Meta;

const Template: Story<CategoryCardProps> = (args) => <CategoryCard {...args} />;

export const Pixar = Template.bind({});
Pixar.args = {
 src: 'https://external-preview.redd.it/hVHq5-zVIg1nzniCzYJ92Df3wsdLpIgPMNAqIef-aLg.png?auto=webp&s=d249ee045be075b4f78a94a62dcb54ee33c01605'
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


