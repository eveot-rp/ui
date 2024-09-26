import { IconName } from '../Icon';
import { VariableColors } from '../../types/Colors';
import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

export interface TextInfoProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    disabled?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
    size?: 'xs' | 'sm' | 'md';
    bg?: VariableColors;
    borderColor?: VariableColors;
    onClick?: () => void;
}
export declare const TextInfo: FC<PropsWithChildren<TextInfoProps>>;
