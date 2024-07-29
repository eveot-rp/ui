import { FC, HTMLAttributes } from 'react';
import './style.scss';

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  toggle?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
}

export const Switch: FC<SwitchProps> = ({ toggle, disabled, onToggle, className, ...props }) => {
  return (
    <div
      className={`ev-switch ${className ?? ''}`}
      data-toggle={toggle}
      data-disabled={disabled}
      onClick={onToggle}
      {...props}
    >
      <div className='ev-switch-radio'></div>
    </div>
  );
};

