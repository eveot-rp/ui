import { Button } from "@components/Button";
import { Dropdown } from "@components/Dropdown";
import { IconNames } from "@components/Icon";
import { Meta, StoryObj } from "@storybook/react";
import { MouseEvent, useState } from "react";

export default {
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    triggerIcon: {
      options: IconNames,
    },
  },
  tags: ["autodocs"],
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    label: "Dropdown Text",
  },
  render: (props) => {
    const [test, setTest] = useState(false);

    const onButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
      console.log(`click button with ${event.currentTarget.name} name`);
    };

    return (
      <Dropdown
        {...props}
        open={test}
        onOpen={() => setTest(true)}
        onClose={() => setTest(false)}
      >
        <Button name="1" iconLeft="TbCellSignal3" onClick={onButtonClick}>
          1
        </Button>
        <Button name="2" iconLeft="TbAccessPointOff" onClick={onButtonClick}>
          2
        </Button>
        <Button name="3" iconLeft="TbAirBalloon" onClick={onButtonClick}>
          3
        </Button>
        <Button name="4" iconLeft="EvFlagPL" onClick={onButtonClick}>
          4
        </Button>
      </Dropdown>
    );
  },
};
