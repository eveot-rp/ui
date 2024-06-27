import { FC } from '../../../node_modules/react';

interface SelectorProps {
    items?: Array<string>;
    disabled?: boolean;
    onChange?: (text: string, index: number) => void;
}
export declare const TextSelector: FC<SelectorProps>;
export {};
