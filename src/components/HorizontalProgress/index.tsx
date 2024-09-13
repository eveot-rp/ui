import { COLORS } from '@constants/colors';
import { VariableColors } from '@type/Colors';
import { FC, HTMLAttributes } from 'react';
import './style.scss';

export interface HorizontalProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  max?: number;
  disabled?: boolean;
  size?: 'sm' | 'md';
  color?: VariableColors;
}

export const HorizontalProgress: FC<HorizontalProgressProps> = ({
  progress = 0,
  max = 100,
  disabled,
  size = 'md',
  className,
  color = 'p500',
  ...props
}) => {
  const currentColor = color in COLORS ? COLORS[color as keyof typeof COLORS] : color;

  return (
    <div
      className={`ev-horizontal-progress ${className ?? ''}`}
      data-disabled={disabled}
      data-size={size}
      {...props}
    >
      <div
        className='progress'
        style={{ color: currentColor, width: `${(progress / max) * 100}%` }}
      />
    </div>
  );
};

