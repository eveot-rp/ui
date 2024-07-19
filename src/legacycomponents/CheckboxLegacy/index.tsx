import { IconCheckbox } from "../IconsLegacy";
import "./Checkbox.scss";

export interface ButtonProps {
  onClick: () => void;
  children: string;
  isActive: boolean;
}
/**
 * @deprecated
 */
export const CheckboxLegacy = ({
  isActive = false,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <label className="ev-checkbox-legacy" onClick={onClick}>
      <div
        className={[
          "ev-checkbox--box",
          isActive && "ev-checkbox--box_active",
        ].join(" ")}
      >
        <IconCheckbox />
      </div>
      <span>{children}</span>
    </label>
  );
};
