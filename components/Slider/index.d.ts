import { ChangeEvent, FC } from '../../../node_modules/react';

interface SliderProps {
    label?: string;
    style?: 'light' | 'dark';
    value?: number;
    step?: number;
    disabled?: boolean;
    min?: number;
    max?: number;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
export declare const Slider: FC<SliderProps>;
export {};
