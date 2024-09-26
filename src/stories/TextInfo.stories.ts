import { IconNames } from '@components/Icon';
import { TextInfo } from '@components/TextInfo';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: TextInfo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconLeft: {
      options: IconNames,
    },
    iconRight: {
      options: IconNames,
    },
    bg: {
      type: 'string',
      control: 'color',
    },
    borderColor: {
      type: 'string',
      control: 'color',
    },
  },
  tags: ['autodocs'],
} as Meta<typeof TextInfo>;

export const Default: StoryObj<typeof TextInfo> = {
  args: {
    children: 'Content',
  },
};
