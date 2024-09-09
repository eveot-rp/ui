import { TypographyColors } from '../Text';
import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface HorizontalProgressProps extends HTMLAttributes<HTMLDivElement> {
    progress: number;
    max?: number;
    disabled?: boolean;
    size?: 'sm' | 'md';
    color: TypographyColors | string;
}
export declare const HorizontalProgress: FC<HorizontalProgressProps>;
