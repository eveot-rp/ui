import { FC } from '../../../node_modules/react';

interface HorizontalProgressProps {
    progress: number;
    disabled?: boolean;
    size: 'sm' | 'md';
}
export declare const HorizontalProgress: FC<HorizontalProgressProps>;
export {};
