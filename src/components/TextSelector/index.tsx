import { Icon } from '@components/Icon';
import { CSSProperties, FC, HTMLAttributes, useEffect, useState } from 'react';
import './style.scss';

export interface TextSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items?: Array<{
    id: string;
    label: string;
  }>;
  width: CSSProperties['width'];
  disabled?: boolean;
  onChange?: (id: string) => void;
}

export const TextSelector: FC<TextSelectorProps> = ({ items, disabled, onChange, className, width, ...props }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

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
      const text = items ? items[selectedIndex].id : '';
      onChange(text);
    }
  }, [selectedIndex]);

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

