import { TypographyColors } from '@components/Text';
import { FC, HTMLAttributes } from 'react';
import './style.scss';

export interface HorizontalProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  max?: number;
  disabled?: boolean;
  size?: 'sm' | 'md';
  color: TypographyColors | string;
}

export const HorizontalProgress: FC<HorizontalProgressProps> = ({
  progress = 0,
  max = 100,
  disabled,
  size = 'md',
  className,
  color,
  ...props
}) => {
  return (
    <div
      className={`ev-horizontal-progress ${className ?? ''}`}
      data-disabled={disabled}
      data-size={size}
      {...props}
    >
      <div
        className='progress'
        style={{ color, width: `${(progress / max) * 100}%` }}
      />
    </div>
  );
};

