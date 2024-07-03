import { IconNames } from '@components/Icon';
import { Input } from '@components/Input';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconLeft: {
      options: IconNames,
    },
    iconRight: {
      options: IconNames,
    },
  },
} as Meta<typeof Input>;

export const Default: StoryObj<typeof Input> = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    description: 'Description',
  },
};
