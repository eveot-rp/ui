import { IconName } from '../Icon';
import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

export interface TextInfoProps extends HTMLAttributes<HTMLDivElement> {
    active?: boolean;
    disabled?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
    onClick?: () => void;
}
export declare const TextInfo: FC<PropsWithChildren<TextInfoProps>>;
