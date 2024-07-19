import { Icon } from "@components/Icon";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import { colorsDefault } from "./constants";
import "./style.scss";

export interface ColorSelectorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  perSwitch?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

export const ColorSelector: FC<ColorSelectorProps> = ({
  perSwitch,
  disabled,
  onChange,
  className,
  ...props
}) => {
  const [value, setValue] = useState(0);
  const colorsPerSwitch = perSwitch || 7;

  const updateSwitcher = (variant: "prev" | "next") => {
    let nextIndex;
    if (variant === "prev") {
      nextIndex = (value - 1 + colorsDefault.length) % colorsDefault.length;
    } else {
      nextIndex = (value + 1) % colorsDefault.length;
    }
    setValue(nextIndex);
  };

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  const startColorIndex =
    (value - Math.floor(colorsPerSwitch / 2) + colorsDefault.length) %
    colorsDefault.length;

  const activeColors = Array.from({ length: colorsPerSwitch }, (_, i) => {
    const colorIndex = (startColorIndex + i) % colorsDefault.length;
    return colorsDefault[colorIndex];
  });

  return (
    <div
      className={`ev-color-selector ${className}`}
      data-disabled={disabled}
      {...props}
    >
      <Icon
        name="TbSquareArrowLeftFilled"
        size="1.75rem"
        onClick={() => updateSwitcher("prev")}
      />
      <div className="ev-color-selector-colors">
        {activeColors.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              const selectedColorIndex =
                (startColorIndex + index) % colorsDefault.length;
              setValue(selectedColorIndex);
            }}
            style={{ backgroundColor: `rgb(${color.join(", ")})` }}
            className={`ev-components--color-switcher_value ${value === (startColorIndex + index) % colorsDefault.length && "ev-components--color-switcher_value--active"}`}
          />
        ))}
      </div>
      <Icon
        name="TbSquareArrowRightFilled"
        size="1.75rem"
        onClick={() => updateSwitcher("next")}
      />
    </div>
  );
};
