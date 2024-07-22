import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface ColorSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    perSwitch?: number;
    disabled?: boolean;
    currentIndex: number;
    onChange?: (value: number) => void;
}
export declare const ColorSelector: FC<ColorSelectorProps>;
