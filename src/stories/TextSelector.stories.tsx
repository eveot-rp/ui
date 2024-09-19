import { TextSelector } from "@components/TextSelector";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

export default {
  component: TextSelector,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    width: {
      type: "string",
    },
  },
  tags: ["autodocs"],
} as Meta<typeof TextSelector>;

export const Default: StoryObj<typeof TextSelector> = {
  args: {
    items: [
      {
        id: 352,
        label: "Text 1",
      },
      {
        id: 455,
        label: "Text 2",
      },
      {
        id: 643,
        label: "Text 3",
      },
      {
        id: 733,
        label: "Text 4",
      },
    ],
  },
  render: (props) => {
    const [id, setId] = useState(0);

    const onChange = (id: number) => {
      setId(id);
    };

    return <TextSelector {...props} currentId={id} onChange={onChange} />;
  },
};
