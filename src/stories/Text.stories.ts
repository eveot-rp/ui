import { Text } from '@components/Text';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Text,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      type: 'string',
      control: 'color',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof Text>;

export const Default: StoryObj<typeof Text> = {
  args: {
    children: 'Text',
  },
};
