import { JSX } from '../../../node_modules/react';

export interface TooltipProps {
    children: string | JSX.Element;
    tip: {
        hint: string | JSX.Element;
        position: 'left' | 'left-top' | 'left-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'right' | 'right-top' | 'right-bottom' | 'top' | 'top-left' | 'top-right';
    };
}
/**
 * @deprecated
 */
export declare const TooltipLegacy: ({ children, tip }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
