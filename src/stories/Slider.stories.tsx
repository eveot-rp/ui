import { Slider } from "@components/Slider";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export default {
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof Slider>;

export const Default: StoryObj<typeof Slider> = {
  args: {
    label: "Label",
    value: 30,
  },
  render: (props) => {
    const [value, setValue] = useState(0);

    return (
      <Slider
        {...props}
        value={value}
        onChange={(event) => setValue(Number(event.currentTarget.value))}
      />
    );
  },
};
