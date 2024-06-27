import { JSX } from '../../../node_modules/react';

export interface ModalLegacyLegacyProps {
    title: string | JSX.Element;
    type?: 'confirmation' | 'input' | 'hint';
    onClick: (accepted: boolean, value?: string | number) => void;
    subtitle?: string;
    placeholder?: string;
}
/**
 * @deprecated
 */
export declare const ModalLegacy: ({ title, subtitle, placeholder, type, onClick, }: ModalLegacyLegacyProps) => import("react/jsx-runtime").JSX.Element;
