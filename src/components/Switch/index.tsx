import { FC, HTMLAttributes } from "react";
import "./style.scss";
import { COLORS } from "@constants/colors";
import { VariableColors } from "@type/Colors";

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md";
  radio?: {
    color: VariableColors;
    colorHover: VariableColors;
    colorActive: VariableColors;
    colorDisabled: VariableColors;
  };
  background?: {
    color: VariableColors;
    colorHover: VariableColors;
    colorActive: VariableColors;
    colorDisabled: VariableColors;
  };
  toggle?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
}

export const Switch: FC<SwitchProps> = ({
  size = "md",
  background = {
    color: "b500",
    colorHover: "b400",
    colorActive: "p500",
    colorDisabled: "b500",
  },
  radio = {
    color: "b300",
    colorHover: "b200",
    colorActive: "b000",
    colorDisabled: "b300",
  },
  toggle,
  disabled,
  onToggle,
  className,
  ...props
}) => {
  return (
    <div
      className={`ev-switch ${className ?? ""}`}
      data-size={size}
      data-toggle={toggle}
      data-disabled={disabled}
      onClick={onToggle}
      style={{
        // @ts-ignore
        "--backColor":
          background.color in COLORS
            ? COLORS[background.color as keyof typeof COLORS]
            : background.color,
        "--backColorHover":
          background.colorHover in COLORS
            ? COLORS[background.colorHover as keyof typeof COLORS]
            : background.colorHover,
        "--backColorActive":
          background.colorActive in COLORS
            ? COLORS[background.colorActive as keyof typeof COLORS]
            : background.colorActive,
        "--backColorDisabled":
          background.colorDisabled in COLORS
            ? COLORS[background.colorDisabled as keyof typeof COLORS]
            : background.colorDisabled,
        "--radioColor":
          radio.color in COLORS
            ? COLORS[radio.color as keyof typeof COLORS]
            : radio.color,
        "--radioColorHover":
          radio.colorHover in COLORS
            ? COLORS[radio.colorHover as keyof typeof COLORS]
            : radio.colorHover,
        "--radioColorActive":
          radio.colorActive in COLORS
            ? COLORS[radio.colorActive as keyof typeof COLORS]
            : radio.colorActive,
        "--radioColorDisabled":
          radio.colorDisabled in COLORS
            ? COLORS[radio.colorDisabled as keyof typeof COLORS]
            : radio.colorDisabled,
      }}
      {...props}
    >
      <div className="ev-switch-radio"></div>
    </div>
  );
};
