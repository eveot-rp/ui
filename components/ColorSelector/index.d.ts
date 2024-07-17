import { FC } from '../../../node_modules/react';

export interface ColorSelectorProps {
    perSwitch?: number;
    disabled?: boolean;
    onChange?: (value: number) => void;
}
export declare const ColorSelector: FC<ColorSelectorProps>;
