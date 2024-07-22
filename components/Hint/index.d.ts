import { IconName } from '../Icon';
import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface HintProps extends HTMLAttributes<HTMLDivElement> {
    tooltip?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    textLeft?: string;
    textRight?: string;
}
export declare const Hint: FC<HintProps>;
