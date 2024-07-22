import { Icon } from '@components/Icon';
import { CSSProperties, FC, HTMLAttributes, useEffect, useState } from 'react';
import './style.scss';

export interface TextSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items?: Array<{
    id: number;
    label: string;
  }>;
  width?: CSSProperties['width'];
  disabled?: boolean;
  value?: number;
  reset?: () => void;
  onChange?: (id: number) => void;
}

export const TextSelector: FC<TextSelectorProps> = ({
  items,
  disabled,
  onChange,
  reset,
  className,
  value,
  width = '12.5rem',
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(value || 0);

  const onChangeItem = (variant: 'prev' | 'next') => {
    if (!items) return;
    if (variant === 'prev') {
      setSelectedIndex((selectedIndex + items.length - 1) % items.length);
    } else {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  useEffect(() => {
    if (onChange) {
      const id = items ? items[selectedIndex].id : 0;
      onChange(id);
    }
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [reset]);

  useEffect(() => {
    setSelectedIndex(value || 0);
  }, [value]);

  const findedItem = items?.find((_, index) => index === selectedIndex);
  if (!findedItem) return null;

  return (
    <div
      className={`ev-text-selector ${className}`}
      data-disabled={disabled}
      style={{ width }}
      {...props}
    >
      <Icon
        name='TbSquareArrowLeftFilled'
        size='1.75rem'
        onClick={() => onChangeItem('prev')}
      />
      <div className='ev-text-selector-value'>{findedItem.label}</div>
      <Icon
        name='TbSquareArrowRightFilled'
        size='1.75rem'
        onClick={() => onChangeItem('next')}
      />
    </div>
  );
};

