import { FC, PropsWithChildren } from 'react';
import './style.scss';

export interface CircularProgressProps {
  progress: number;
  max?: number;
  width?: string;
  strokeWidth?: string;
}

export const CircularProgress: FC<PropsWithChildren<CircularProgressProps>> = ({
  width = '5rem',
  strokeWidth = '0.3rem',
  progress = 0,
  max = 100,
  children,
}) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - ((progress < max ? progress : max) / max) * circumference;

  return (
    <div
      className='ev-circular-progress'
      style={{ width, height: width }}
    >
      <div className='ev-circular-progress-label'>{children}</div>
      <svg
        className='ev-circular-progress-svg'
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
      >
        <circle
          r={radius}
          cx='50'
          cy='50'
          className='ev-circular-progress-track'
          strokeWidth={strokeWidth}
        />
        <circle
          r={radius}
          cx='50'
          cy='50'
          className='progress'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};
