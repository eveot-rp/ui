import '@assets/styles/app.scss';
import { COLORS } from '@constants/colors';
import { VariableColors } from '@type/Colors';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
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
  color?: VariableColors;
  weight?: TypographyWeights;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  size = 'h1',
  color = 'b000',
  weight = '500',
  ...props
}) => {
  const currentColor = color in COLORS ? COLORS[color as keyof typeof COLORS] : color;

  return (
    <span
      style={{
        fontSize: `${TypographySizes[size]}rem`,
        color: currentColor,
        fontWeight: weight,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

