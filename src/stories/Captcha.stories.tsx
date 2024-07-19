import { Captcha } from "@components/Captcha";
import { Meta, StoryObj } from "@storybook/react";

export default {
  component: Captcha,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Captcha>;

export const Default: StoryObj<typeof Captcha> = {
  args: {
    value: "240DGE",
  },
  render: (props) => {
    return (
      <Captcha
        {...props}
        onFinish={(success) => alert(`Captcha success: ${success}`)}
      />
    );
  },
};
