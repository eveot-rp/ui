import { Icon, IconName } from '@components/Icon';
import { VariableColors } from '@type/Colors';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import './style.scss';

export interface TextInfoProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  disabled?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  size?: 'xs' | 'sm' | 'md';
  bg?: VariableColors;
  borderColor?: VariableColors;
  onClick?: () => void;
}

export const TextInfo: FC<PropsWithChildren<TextInfoProps>> = ({
  active,
  disabled,
  iconLeft,
  iconRight,
  children,
  onClick,
  size = 'xs',
  bg = 'b400',
  borderColor = 'b300',
  className,
  ...props
}) => {
  const _onClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <div
      className={`ev-text-info ${className ?? ''}`}
      data-active={active}
      data-disabled={disabled}
      data-size={size}
      onClick={_onClick}
      style={{ background: bg, borderColor }}
      {...props}
    >
      {iconLeft && <Icon name={iconLeft} />}
      <p>{children}</p>
      {iconRight && <Icon name={iconRight} />}
    </div>
  );
};

