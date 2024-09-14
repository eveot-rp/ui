import { CSSProperties, FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClose" | "style"> {
    title?: string;
    description?: string;
    show?: boolean;
    width?: CSSProperties["width"];
    style?: "dark" | "light";
    image?: string | null;
    backdrop?: boolean;
    centered?: boolean;
    padding?: CSSProperties["padding"];
    onClose?: () => void;
}
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
