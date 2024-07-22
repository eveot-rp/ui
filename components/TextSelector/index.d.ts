import { CSSProperties, FC, HTMLAttributes } from '../../../node_modules/react';

export interface TextSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    items?: Array<{
        id: number;
        label: string;
    }>;
    width?: CSSProperties['width'];
    disabled?: boolean;
    value?: number;
    reset?: () => void;
    onChange?: (id: number) => void;
}
export declare const TextSelector: FC<TextSelectorProps>;
