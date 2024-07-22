import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

export interface CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, "style"> {
    style?: "dark" | "light";
    disabled?: boolean;
    active?: boolean;
    invalid?: boolean;
    onClick?: () => void;
}
export declare const Checkbox: FC<PropsWithChildren<CheckboxProps>>;
