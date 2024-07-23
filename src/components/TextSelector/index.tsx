import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
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
  onChange?: (id: number) => void;
}

export const TextSelector: FC<TextSelectorProps> = ({
  items,
  disabled,
  onChange,
  className,
  currentId,
  width = '12.5rem',
  ...props
}) => {
  const [findedIndex, setFindedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(findedIndex);

  const onChangeItem = (variant: 'prev' | 'next') => {
    if (!onChange) return;

    if (variant === 'prev') {
      setSelectedIndex((selectedIndex + items.length - 1) % items.length);
      onChange(items[selectedIndex].id);
    } else {
      setSelectedIndex((selectedIndex + 1) % items.length);
      onChange(items[selectedIndex].id);
    }
  };

  useEffect(() => {
    const findedIndex = items.findIndex((item) => item.id === currentId);
    const currentIndex = findedIndex !== -1 ? findedIndex : 0;
    setFindedIndex(currentIndex);
  }, [currentId]);

  useEffect(() => {
    if (items[findedIndex]) {
      setSelectedIndex(findedIndex);
    }
  }, [findedIndex]);

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
      <Text
        className='ev-text-selector-value'
        size='subheading'
      >
        {items[selectedIndex] && items[selectedIndex].label}
      </Text>
      <Icon
        name='TbSquareArrowRightFilled'
        size='1.75rem'
        onClick={() => onChangeItem('next')}
      />
    </div>
  );
};

