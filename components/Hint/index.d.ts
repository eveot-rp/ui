import { IconName } from '../Icon';
import { FC } from '../../../node_modules/react';

export interface HintProps {
    tooltip?: string;
    iconLeft?: IconName;
    iconRight?: IconName;
    textLeft?: string;
    textRight?: string;
}
export declare const Hint: FC<HintProps>;
