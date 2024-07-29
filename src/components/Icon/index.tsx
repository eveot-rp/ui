import { FC, HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';
import * as tbicons from 'react-icons/tb';
import * as evicons from './icons';
import './style.scss';

type TablerIconName = keyof typeof tbicons;
type EveotIconName = keyof typeof evicons;
export type IconName = TablerIconName | EveotIconName;

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
  size?: IconBaseProps['size'];
  color?: IconBaseProps['color'];
  onClick?: () => void;
}

type ParsedIcon = {
  type: 'eveot' | 'tabler';
  icon: React.ElementType;
};

export const IconNames = Object.keys(evicons).concat(Object.keys(tbicons));

export const Icon: FC<IconProps> = ({
  name,
  color = 'currentColor',
  size = '1.063rem',
  onClick,
  className,
  ...props
}) => {
  const ParsedIcon: ParsedIcon = {
    type: Object.keys(evicons).includes(name) ? 'eveot' : 'tabler',
    icon: Object.keys(evicons).includes(name) ? evicons[name as EveotIconName] : tbicons[name as TablerIconName],
  };

  if (!ParsedIcon.icon) {
    return <p style={{ color: '#F44336' }}>ICON:ERR</p>;
  }

  return (
    <div
      className={`ev-icon ${className ?? ''}`}
      onClick={onClick}
      {...props}
    >
      {ParsedIcon.type === 'eveot' ? (
        <ParsedIcon.icon
          width={size}
          height={size}
          color={color}
        />
      ) : (
        <ParsedIcon.icon
          size={size}
          color={color}
        />
      )}
    </div>
  );
};

