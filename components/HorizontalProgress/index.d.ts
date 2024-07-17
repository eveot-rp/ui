import { FC } from '../../../node_modules/react';

export interface HorizontalProgressProps {
    progress: number;
    disabled?: boolean;
    size: 'sm' | 'md';
}
export declare const HorizontalProgress: FC<HorizontalProgressProps>;
