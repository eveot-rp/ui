import { IconName } from '../Icon';
import { TextInfoProps } from '../TextInfo';
import { InputHTMLAttributes } from '../../../node_modules/react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style' | 'type'> {
    type?: 'text' | 'number' | 'password';
    label?: string;
    description?: string;
    size?: 'xs' | 'sm' | 'md';
    style?: 'light' | 'dark';
    invalid?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
    textInfo?: TextInfoProps;
}
export declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & {
    children?: import('../../../node_modules/react').ReactNode | undefined;
} & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
