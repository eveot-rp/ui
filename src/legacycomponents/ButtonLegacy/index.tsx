import "./Button.scss";

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
  disabled?: boolean;
  mode?: "default" | "primary" | "white";
  size?: "sm" | "lg" | "md" | "xlg";
  icon?: {
    value: JSX.Element;
    position: "right" | "left";
  };
}
/**
 * @deprecated
 */
export const ButtonLegacy = ({
  icon,
  mode = "default",
  size = "lg",
  disabled = false,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[
        "ev-button-legacy",
        `ev-button-mode--${mode}`,
        `ev-button-size--${size}`,
        disabled && `ev-button-disabled--${mode}`,
      ].join(" ")}
    >
      {icon && icon.position === "left" && icon.value}
      {children}
      {icon && icon.position === "right" && icon.value}
    </button>
  );
};
