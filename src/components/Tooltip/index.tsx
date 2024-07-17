import { Icon, IconName } from '@components/Icon';
import { Text } from '@components/Text';
import { FC, PropsWithChildren, useState } from 'react';
import './style.scss';

export interface TooltipProps {
  text: string;
  align?: 'left' | 'right' | 'top' | 'bottom';
  iconLeft?: IconName;
  iconRight?: IconName;
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  align = 'bottom',
  text,
  children,
  iconLeft,
  iconRight,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className='ev-tooltip'
      data-show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <div
        className='ev-tooltip-box'
        data-align={align}
      >
        {iconLeft && <Icon name={iconLeft} />}
        <Text
          size='h3'
          color='b900'
        >
          {text}
        </Text>
        {iconRight && <Icon name={iconRight} />}
      </div>
    </div>
  );
};
