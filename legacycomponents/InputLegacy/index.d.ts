import { ChangeEvent } from '../../../node_modules/react';

export interface ButtonProps {
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    name: string;
    placeholder?: string;
    type?: "number" | "text" | "password";
    size?: "sm" | "lg" | "md";
}
/**
 * @deprecated
 */
export declare const InputLegacy: ({ size, placeholder, value, name, type, onChange, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
