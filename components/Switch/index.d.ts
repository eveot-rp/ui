import { FC, HTMLAttributes } from '../../../node_modules/react';
import { VariableColors } from '../../types/Colors';

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md";
    radio?: {
        color: VariableColors;
        colorHover: VariableColors;
        colorActive: VariableColors;
        colorDisabled: VariableColors;
    };
    background?: {
        color: VariableColors;
        colorHover: VariableColors;
        colorActive: VariableColors;
        colorDisabled: VariableColors;
    };
    toggle?: boolean;
    disabled?: boolean;
    onToggle?: () => void;
}
export declare const Switch: FC<SwitchProps>;
