import { FC } from 'react';
import './style.scss';

export interface HorizontalProgressProps {
  progress: number;
  disabled?: boolean;
  size: 'sm' | 'md';
}

export const HorizontalProgress: FC<HorizontalProgressProps> = ({ progress = 0, disabled, size = 'md' }) => {
  return (
    <div
      className='ev-horizontal-progress'
      data-disabled={disabled}
      data-size={size}
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
