import { FC, HTMLAttributes } from '../../../node_modules/react';
import { IconBaseProps } from 'react-icons';

import * as tbicons from 'react-icons/tb';
import * as evicons from './icons';
type TablerIconName = keyof typeof tbicons;
type EveotIconName = keyof typeof evicons;
export type IconName = TablerIconName | EveotIconName;
export interface IconProps extends HTMLAttributes<HTMLDivElement> {
    name: IconName;
    size?: IconBaseProps['size'];
    color?: IconBaseProps['color'];
    onClick?: () => void;
}
export declare const IconNames: string[];
export declare const Icon: FC<IconProps>;
export {};
