import '@assets/styles/app.scss'
import { FC, PropsWithChildren } from 'react'
import { TypographyColors, TypographySizes } from './constants'

type TypographySizes = keyof typeof TypographySizes
type TypographyColors = keyof typeof TypographyColors
type TypographyWeights = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

type TextProps = {
  size: TypographySizes,
  color?: TypographyColors
  weight?: TypographyWeights
}

export const Text: FC<PropsWithChildren<TextProps>> = ({ children, size = 'h1', color = 'b000', weight = '500' }) => {
  return (
    <span style={{ fontSize: TypographySizes[size], color: TypographyColors[color], fontWeight: weight }}>{ children }</span>
  )
}