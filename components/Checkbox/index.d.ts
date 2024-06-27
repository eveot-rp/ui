import { FC, PropsWithChildren } from '../../../node_modules/react';

export interface CheckboxProps {
    dataStyle?: 'dark' | 'light';
    disabled?: boolean;
    active?: boolean;
    onClick?: () => void;
}
export declare const Checkbox: FC<PropsWithChildren<CheckboxProps>>;
