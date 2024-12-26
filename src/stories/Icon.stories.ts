import { Icon, IconNames } from "@components/Icon";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: {
      options: IconNames,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Icon>;

export const Preview: StoryObj<typeof Icon> = {
  args: {
    name: "TbAlarm",
    size: "10rem",
    color: "white",
  },
};
