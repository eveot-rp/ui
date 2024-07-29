import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';
import { IconName } from '..';

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
export declare const Dropdown: FC<PropsWithChildren<DropdownProps>>;
