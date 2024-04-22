import { IconCheckbox } from "../Icons/Icons";
import './Checkbox.scss';

export interface ButtonProps {
  onClick: () => void;
  children: string;
  isActive: boolean;
}

const Checkbox = (
  {
    isActive = false,
    onClick,
    children,
    ...props
  }: ButtonProps) => {

  return (
    <label
      className="ev-checkbox"
      onClick={ onClick }
    >
      <div className={
        [
          "ev-checkbox--box",
          isActive && "ev-checkbox--box_active",
        ].join(' ')
      }
      >
        <IconCheckbox />
      </div>
      <span>
        { children }
      </span>
    </label>
  );
};

export default Checkbox;
