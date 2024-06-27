import { JSX } from '../../../node_modules/react';

export interface TooltipProps {
    children: string | JSX.Element;
    callbacks: {
        value: JSX.Element | string;
        callback: {
            mouseMove?: () => void;
            click?: () => void;
            mouseLeave?: () => void;
        };
    }[];
}
/**
 * @deprecated
 */
export declare const DropdownLegacy: ({ children, callbacks }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
