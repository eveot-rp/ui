import { Icon } from '@components/Icon';
import { CSSProperties, FC, HTMLAttributes, useEffect, useState } from 'react';
import './style.scss';

export interface TextSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: Array<{
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
  console.log('main render', selectedIndex);

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
      console.log('onChange render');
      const id = items ? items[selectedIndex].id : 0;
      onChange(id);
    }
  }, [selectedIndex]);

  useEffect(() => {
    console.log('reset render');
    setSelectedIndex(0);
  }, [reset]);

  useEffect(() => {
    if (!items) return;
    console.log('currentId render');
    const findedItem = items?.find((item) => item.id === currentId);
    const index = findedItem ? items.indexOf(findedItem) : 0;
    setSelectedIndex(index);
  }, [currentId]);

  console.log('end render', selectedIndex);

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
      <div className='ev-text-selector-value'>{items[selectedIndex].label}</div>
      <Icon
        name='TbSquareArrowRightFilled'
        size='1.75rem'
        onClick={() => onChangeItem('next')}
      />
    </div>
  );
};

