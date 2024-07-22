import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
    toggle?: boolean;
    disabled?: boolean;
    onToggle?: () => void;
}
export declare const Switch: FC<SwitchProps>;
