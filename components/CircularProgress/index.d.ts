import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
    progress: number;
    max?: number;
    width?: string;
    radius?: number;
    strokeWidth?: string;
}
export declare const CircularProgress: FC<PropsWithChildren<CircularProgressProps>>;
