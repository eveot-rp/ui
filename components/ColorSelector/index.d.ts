import { FC } from '../../../node_modules/react';

export declare const colorsDefault: number[][];
interface SelectorProps {
    perSwitch?: number;
    disabled?: boolean;
    onChange?: (value: number) => void;
}
export declare const ColorSelector: FC<SelectorProps>;
export {};
