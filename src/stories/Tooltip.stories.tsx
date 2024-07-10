import { Button } from '@components/Button';
import { IconNames } from '@components/Icon';
import { Tooltip } from '@components/Tooltip';
import { Meta, StoryObj } from '@storybook/react';

export default {
  component: Tooltip,
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
  },
} as Meta<typeof Tooltip>;

export const Preview: StoryObj<typeof Tooltip> = {
  args: {
    text: 'Tooltip text',
  },
  render: (props) => (
    <Tooltip {...props}>
      <Button size='sm'>Tooltip</Button>
    </Tooltip>
  ),
};
