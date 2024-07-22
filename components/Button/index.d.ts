import { IconName } from '../Icon';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from '../../../node_modules/react';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
    style?: "dark" | "light";
    size?: "xs" | "sm" | "md";
    iconLeft?: IconName;
    iconRight?: IconName;
    active?: boolean;
    centered?: boolean;
}
export declare const Button: FC<PropsWithChildren<ButtonProps>>;
