import { JSX } from '../../../node_modules/react';

export interface TipProps {
    text: string[];
    tip: string | JSX.Element;
    mode?: "default" | "primary" | "grey";
}
/**
 * @deprecated
 */
export declare const TipLegacy: ({ tip, text, mode }: TipProps) => import("react/jsx-runtime").JSX.Element;
