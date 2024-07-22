import { TextSelector } from '@components/TextSelector';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: TextSelector,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      type: 'string',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof TextSelector>;

export const Default: StoryObj<typeof TextSelector> = {
  args: {
    items: [
      {
        id: 352,
        label: 'Text 1',
      },
      {
        id: 455,
        label: 'Text 2',
      },
      {
        id: 3,
        label: 'Text 3',
      },
    ],
  },
};
