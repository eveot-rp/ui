import { CircularProgress } from '@components/CircularProgress';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    progress: {
      control: 'range',
    },
    label: {
      type: 'string',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof CircularProgress>;

export const Default: StoryObj<typeof CircularProgress> = {
  args: {
    progress: 50,
  },
};
