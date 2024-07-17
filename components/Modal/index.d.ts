import { CSSProperties, FC, PropsWithChildren } from '../../../node_modules/react';

export interface ModalProps {
    title?: string;
    description?: string;
    show?: boolean;
    width?: CSSProperties['width'];
    style?: 'dark' | 'light';
    image?: string | null;
    backdrop?: boolean;
    centered?: boolean;
    padding?: CSSProperties['padding'];
    className?: string;
    onClose?: () => void;
}
export declare const Modal: FC<PropsWithChildren<ModalProps>>;
