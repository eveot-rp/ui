import { VariableColors } from '../../types/Colors';
import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface HorizontalProgressProps extends HTMLAttributes<HTMLDivElement> {
    progress: number;
    max?: number;
    disabled?: boolean;
    size?: 'sm' | 'md';
    color?: VariableColors;
}
export declare const HorizontalProgress: FC<HorizontalProgressProps>;
