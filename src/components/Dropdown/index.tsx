import { Button } from '@components/Button';
import { useOuterClick } from '@hooks/useOuterClick';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { IconName } from '..';
import './style.scss';

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
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
  className,
  ...props
}) => {
  const { ref } = useOuterClick<HTMLDivElement>(() => onClose && onClose());

  return (
    <div
      className={`ev-dropdown ${className ?? ''}`}
      ref={ref}
      style={{ width: triggerWidth }}
      data-open={open}
      onClick={open ? onClose : onOpen}
      {...props}
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

