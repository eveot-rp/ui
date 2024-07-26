import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import './style.scss';

export interface CircularProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
  max?: number;
  width?: string;
  radius?: number;
  strokeWidth?: string;
  showTrack?: boolean;
  maxTrack?: number;
}

export const CircularProgress: FC<PropsWithChildren<CircularProgressProps>> = ({
  width = '5rem',
  strokeWidth = '0.3rem',
  progress = 0,
  max = 100,
  radius = 47,
  children,
  className,
  maxTrack = 100,
  showTrack = true,
  color = 'white',
  ...props
}) => {
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - ((progress < max ? progress : max) / max) * circumference;
  const strokeTrackDashoffset = circumference - (maxTrack / max) * circumference;

  return (
    <div
      className={`ev-circular-progress ${className}`}
      style={{ width, color, height: width }}
      {...props}
    >
      <div className='ev-circular-progress-label'>{children}</div>
      <svg
        className='ev-circular-progress-svg'
        width='100%'
        height='100%'
        viewBox='0 0 100 100'
      >
        {showTrack && (
          <circle
            r={radius}
            cx='-50'
            cy='50'
            className='ev-circular-progress-track'
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeTrackDashoffset}
          />
        )}
        <circle
          r={radius}
          cx='50'
          cy='50'
          className='progress'
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeWidth={strokeWidth}
          stroke='currentColor'
        />
      </svg>
    </div>
  );
};

