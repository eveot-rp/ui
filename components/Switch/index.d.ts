import { FC } from '../../../node_modules/react';

export interface SwitchProps {
    toggle?: boolean;
    disabled?: boolean;
    onToggle?: () => void;
}
export declare const Switch: FC<SwitchProps>;
