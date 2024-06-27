import '@assets/styles/app.scss';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { TypographyColors, TypographySizes } from './constants';

type TypographySizes = keyof typeof TypographySizes;
type TypographyColors = keyof typeof TypographyColors;
type TypographyWeights = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  size: TypographySizes;
  color?: TypographyColors;
  weight?: TypographyWeights;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  size = 'h1',
  color = 'b000',
  weight = '500',
  ...props
}) => {
  return (
    <span
      style={{ fontSize: TypographySizes[size], color: TypographyColors[color], fontWeight: weight }}
      {...props}
    >
      {children}
    </span>
  );
};
