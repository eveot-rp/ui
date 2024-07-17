import { FC } from 'react';
import './style.scss';

export interface SwitchProps {
  toggle?: boolean;
  disabled?: boolean;
  onToggle?: () => void;
}

export const Switch: FC<SwitchProps> = ({ toggle, disabled, onToggle }) => {
  return (
    <div
      className='ev-switch'
      data-toggle={toggle}
      data-disabled={disabled}
      onClick={onToggle}
    >
      <div className='ev-switch-radio'></div>
    </div>
  );
};
