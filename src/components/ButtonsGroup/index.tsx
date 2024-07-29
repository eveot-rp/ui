import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import './style.scss';

type ButtonsGroupProps = HTMLAttributes<HTMLDivElement>;

export const ButtonsGroup: FC<PropsWithChildren<ButtonsGroupProps>> = ({ children, className, ...props }) => {
  return (
    <div
      className={`ev-buttons-group ${className ?? ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

