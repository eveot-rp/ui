import { IconName } from '../Icon';
import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    align?: "left" | "right" | "top" | "bottom";
    iconLeft?: IconName;
    iconRight?: IconName;
}
export declare const Tooltip: FC<PropsWithChildren<TooltipProps>>;
