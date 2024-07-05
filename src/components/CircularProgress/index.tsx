import { Text } from '@components/Text';
import { FC } from 'react';
import './style.scss';

interface CircularProgressProps {
  label?: string | number;
  progress: number;
  max?: number;
  width?: string;
  strokeWidth?: string;
}

export const CircularProgress: FC<CircularProgressProps> = ({
  label,
  width = '5rem',
  strokeWidth = '0.3rem',
  progress = 0,
  max = 100,
}) => {
  const radius = 40;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / max) * circumference;

  return (
    <div
      className='ev-circular-progress'
      style={{ width, height: width }}
    >
      <Text
        size='h3'
        className='ev-circular-progress-label'
      >
        {label}
      </Text>
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
