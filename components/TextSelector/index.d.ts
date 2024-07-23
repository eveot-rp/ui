import { CSSProperties, FC, HTMLAttributes } from '../../../node_modules/react';

type SelectorItem = {
    id: number;
    label: string;
};
export interface TextSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items: SelectorItem[];
    width?: CSSProperties['width'];
    disabled?: boolean;
    currentId?: number;
    onChange?: (id: number) => void;
}
export declare const TextSelector: FC<TextSelectorProps>;
export {};
