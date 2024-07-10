import { FC, PropsWithChildren } from '../../../node_modules/react';

export interface CheckboxProps {
    style?: 'dark' | 'light';
    disabled?: boolean;
    active?: boolean;
    invalid?: boolean;
    onClick?: () => void;
}
export declare const Checkbox: FC<PropsWithChildren<CheckboxProps>>;
