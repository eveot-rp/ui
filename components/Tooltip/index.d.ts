import { IconName } from '../Icon';
import { FC, PropsWithChildren } from '../../../node_modules/react';

interface TooltipProps {
    text: string;
    align?: 'left' | 'right' | 'top' | 'bottom';
    iconLeft?: IconName;
    iconRight?: IconName;
}
export declare const Tooltip: FC<PropsWithChildren<TooltipProps>>;
export {};
