import { Button } from '@components/Button';
import { useOuterClick } from '@hooks/useOuterClick';
import { FC, PropsWithChildren } from 'react';
import { IconName } from '..';
import './style.scss';

export interface DropdownProps {
  open?: boolean;
  label?: string;
  triggerSize?: 'xs' | 'sm' | 'md';
  triggerCentered?: boolean;
  triggerIcon?: IconName;
  triggerWidth?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
  label,
  triggerIcon,
  triggerWidth = '13.125rem',
  triggerSize = 'sm',
  triggerCentered = false,
  open,
  children,
  onOpen,
  onClose,
}) => {
  const { ref } = useOuterClick<HTMLDivElement>(() => onClose && onClose());

  return (
    <div
      className='ev-dropdown'
      ref={ref}
      style={{ width: triggerWidth }}
      data-open={open}
      onClick={open ? onClose : onOpen}
    >
      <Button
        iconLeft={triggerIcon}
        iconRight='TbCaretDownFilled'
        size={triggerSize}
        centered={triggerCentered}
      >
        {label}
      </Button>
      <div className='ev-dropdown-content'>{children}</div>
    </div>
  );
};
