import { FC } from '../../../node_modules/react';

export interface TextSelectorProps {
    items?: Array<string>;
    disabled?: boolean;
    onChange?: (text: string, index: number) => void;
}
export declare const TextSelector: FC<TextSelectorProps>;
