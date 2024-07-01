import { Modal } from '@components/Modal';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
    },
    width: {
      type: 'string',
    }
  },
} as Meta<typeof Modal>;

export const Static: StoryObj<typeof Modal> = {
  args: {
    image: undefined,
    title: 'Label',
    description: 'Description',
    absolute: false,
    backdrop: false,
    show: true,
  }
};

export const FullScreen: StoryObj<typeof Modal> = {
  args: {
    image: undefined,
    title: 'Label',
    description: 'Description',
    absolute: true,
    backdrop: true,
    show: true,
  }
};