import { FC, PropsWithChildren } from '../../../node_modules/react';

interface CircularProgressProps {
    progress: number;
    max?: number;
    width?: string;
    strokeWidth?: string;
}
export declare const CircularProgress: FC<PropsWithChildren<CircularProgressProps>>;
export {};
