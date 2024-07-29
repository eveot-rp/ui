import { Icon } from '@components/Icon';
import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { colorsDefault } from './constants';
import './style.scss';

export interface ColorSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  perSwitch?: number;
  disabled?: boolean;
  currentIndex?: number;
  onChange?: (value: number) => void;
}

export const ColorSelector: FC<ColorSelectorProps> = ({
  perSwitch = 6,
  disabled,
  onChange,
  className,
  currentIndex,
  ...props
}) => {
  const [value, setValue] = useState(0);

  const updateSwitcher = (variant: 'prev' | 'next') => {
    let nextIndex;
    if (variant === 'prev') {
      nextIndex = (value - 1 + colorsDefault.length) % colorsDefault.length;
    } else {
      nextIndex = (value + 1) % colorsDefault.length;
    }
    setValue(nextIndex);
    onChange && onChange(nextIndex);
  };

  const startColorIndex = (value - Math.floor(perSwitch / 2) + colorsDefault.length) % colorsDefault.length;

  const activeColors = Array.from({ length: perSwitch }, (_, i) => {
    const colorIndex = (startColorIndex + i) % colorsDefault.length;
    return colorsDefault[colorIndex];
  });

  useEffect(() => {
    setValue(currentIndex || 0);
  }, [currentIndex]);

  const onChangeSelectedColor = (colorIndex: number) => {
    const selectedColorIndex = (startColorIndex + colorIndex) % colorsDefault.length;
    setValue(selectedColorIndex);
    onChange && onChange(selectedColorIndex);
  };

  return (
    <div
      className={`ev-color-selector ${className ?? ''}`}
      data-disabled={disabled}
      {...props}
    >
      <Icon
        name='TbSquareArrowLeftFilled'
        size='1.75rem'
        onClick={() => updateSwitcher('prev')}
      />
      <div className='ev-color-selector-colors'>
        {activeColors.map((color, index) => (
          <div
            key={index}
            onClick={() => onChangeSelectedColor(index)}
            style={{ backgroundColor: `rgb(${color.join(', ')})` }}
            className={`ev-components--color-switcher_value ${value === (startColorIndex + index) % colorsDefault.length && 'ev-components--color-switcher_value--active'}`}
          />
        ))}
      </div>
      <Icon
        name='TbSquareArrowRightFilled'
        size='1.75rem'
        onClick={() => updateSwitcher('next')}
      />
    </div>
  );
};

