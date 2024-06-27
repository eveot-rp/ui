import { IconName } from '../Icon';
import { FC, MouseEvent, PropsWithChildren } from '../../../node_modules/react';

export interface ButtonProps {
    name?: string;
    style?: 'dark' | 'light';
    size?: 'xs' | 'sm' | 'md';
    iconLeft?: IconName;
    iconRight?: IconName;
    disabled?: boolean;
    active?: boolean;
    centered?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export declare const Button: FC<PropsWithChildren<ButtonProps>>;
