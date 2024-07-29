import { FC, HTMLAttributes } from 'react';
import './style.scss';

export interface HorizontalProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  disabled?: boolean;
  size: 'sm' | 'md';
}

export const HorizontalProgress: FC<HorizontalProgressProps> = ({
  progress = 0,
  disabled,
  size = 'md',
  className,
  ...props
}) => {
  return (
    <div
      className={`ev-horizontal-progress ${className ?? ''}`}
      data-disabled={disabled}
      data-size={size}
      {...props}
    >
      <div className='ev-horizontal-progress-track'>
        <div
          className='progress'
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

