import React from 'react';

import { Story, Meta } from '@storybook/react';

import Modal, { ModalProps } from '~/Modal';

export default {
  title: 'Layout/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Open',
  children: 'Children',
  title: 'Nova Oportunidade',
};
