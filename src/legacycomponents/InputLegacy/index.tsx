import { ChangeEvent } from "react";
import "./InputLegacy.scss";

export interface ButtonProps {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  placeholder?: string;
  type?: "number" | "text" | "password";
  size?: "sm" | "lg" | "md";
}
/**
 * @deprecated
 */
export const InputLegacy = ({
  size = "md",
  placeholder,
  value,
  name,
  type,
  onChange,
}: ButtonProps) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      onChange={(event) => onChange(event)}
      className={["ev-input-legacy", `ev-input-legacy-size--${size}`].join(" ")}
      placeholder={placeholder}
    />
  );
};
