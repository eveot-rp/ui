import { IconName } from '../Icon';
import { FC, PropsWithChildren } from '../../../node_modules/react';

export interface TextInfoProps {
    active?: boolean;
    disabled?: boolean;
    iconLeft?: IconName;
    iconRight?: IconName;
    onClick?: () => void;
}
export declare const TextInfo: FC<PropsWithChildren<TextInfoProps>>;
