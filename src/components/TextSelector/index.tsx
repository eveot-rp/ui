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
  currentId?: number;
  reset?: boolean;
  onChange?: (id: number) => void;
}

export const TextSelector: FC<TextSelectorProps> = ({
  items,
  disabled,
  onChange,
  reset,
  className,
  currentId,
  width = '12.5rem',
  ...props
}) => {
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
      const id = items ? items[selectedIndex].id : 0;
      onChange(id);
    }
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [reset]);

  useEffect(() => {
    const findedItem = items?.find((item) => item.id === currentId);
    const index = findedItem ? items?.indexOf(findedItem) : 0;
    setSelectedIndex(index || 0);
  }, [currentId]);

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

