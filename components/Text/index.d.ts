import { Colors } from '../../types/Colors';
import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';
import { TypographySizes } from './constants';

export type TypographySizes = keyof typeof TypographySizes;
export type TypographyWeights = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    /**
     * - h1: 1.5rem (24px)
     * - h2: 1.25rem (20px)
     * - h3: 1rem (16px)
     * - subheading: 0.875rem (14px)
     * - body2: 0.625rem (12px)
     */
    size?: TypographySizes;
    color?: Colors | (string & {});
    weight?: TypographyWeights;
}
export declare const Text: FC<PropsWithChildren<TextProps>>;
