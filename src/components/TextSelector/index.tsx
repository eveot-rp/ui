import { Icon } from '@components/Icon';
import { Text } from '@components/Text';
import { CSSProperties, FC, HTMLAttributes, useEffect, useState } from 'react';
import './style.scss';

type SelectorItem = {
  id: number;
  label: string;
};

export interface TextSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: SelectorItem[];
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
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const onChangeItem = (variant: 'prev' | 'next') => {
    const findedIndex = items.indexOf(selectedItem!);
    if (findedIndex === -1) return;

    if (variant === 'prev') {
      const prevItem = items[(findedIndex + items.length - 1) % items.length];
      onChange && onChange(prevItem.id);
    } else {
      const nextItem = items[(findedIndex + 1) % items.length];
      onChange && onChange(nextItem.id);
    }
  };

  useEffect(() => {
    const findedItem = items.find((item) => item.id === currentId);
    setSelectedItem(findedItem || items[0]);
  }, [items, currentId]);

  return (
    <div
      className={`ev-text-selector ${className ?? ''}`}
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
        {selectedItem?.label}
      </Text>
      <Icon
        name='TbSquareArrowRightFilled'
        size='1.75rem'
        onClick={() => onChangeItem('next')}
      />
    </div>
  );
};

