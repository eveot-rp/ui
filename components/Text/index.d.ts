import { FC, HTMLAttributes, PropsWithChildren } from '../../../node_modules/react';
import { TypographyColors, TypographySizes } from './constants';

type TypographySizes = keyof typeof TypographySizes;
type TypographyColors = keyof typeof TypographyColors;
type TypographyWeights = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
    size?: TypographySizes;
    color?: TypographyColors;
    weight?: TypographyWeights;
}
export declare const Text: FC<PropsWithChildren<TextProps>>;
export {};
