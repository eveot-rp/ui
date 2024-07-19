import { Icon, IconName } from "@components/Icon";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import "./style.scss";

// "prop?" - because Partial<> broke the doc page
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  style?: "dark" | "light";
  size?: "xs" | "sm" | "md";
  iconLeft?: IconName;
  iconRight?: IconName;
  active?: boolean;
  centered?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  name,
  style = "dark",
  size = "md",
  children,
  iconLeft,
  iconRight,
  disabled,
  centered = true,
  active,
  className,
  ...props
}) => {
  return (
    <button
      name={name}
      className={`ev-button ${className}`}
      data-style={style}
      data-size={size}
      disabled={disabled}
      data-active={active}
      data-centered={centered}
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} />}
      {children}
      {iconRight && <Icon name={iconRight} />}
    </button>
  );
};
