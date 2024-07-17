import { Icon, IconName } from '@components/Icon';
import { Text } from '@components/Text';
import { FC } from 'react';
import './style.scss';

export interface HintProps {
  tooltip?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
  textLeft?: string;
  textRight?: string;
}

export const Hint: FC<HintProps> = ({ tooltip, iconLeft, iconRight, textLeft, textRight }) => {
  return (
    <div className='ev-hint'>
      {textLeft && (
        <Text
          size='h3'
          className='ev-hint-text'
        >
          {textLeft}
        </Text>
      )}
      <div className='ev-hint-box'>
        {iconLeft && <Icon name={iconLeft} />}
        {tooltip && (
          <Text
            size='h3'
            color='b900'
          >
            {tooltip}
          </Text>
        )}
        {iconRight && <Icon name={iconRight} />}
      </div>
      {textRight && (
        <Text
          size='h3'
          className='ev-hint-text'
        >
          {textRight}
        </Text>
      )}
    </div>
  );
};
