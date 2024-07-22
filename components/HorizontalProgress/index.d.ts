import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface HorizontalProgressProps extends HTMLAttributes<HTMLDivElement> {
    progress: number;
    disabled?: boolean;
    size: "sm" | "md";
}
export declare const HorizontalProgress: FC<HorizontalProgressProps>;
