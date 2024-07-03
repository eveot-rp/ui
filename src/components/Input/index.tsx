import { Icon, IconName } from '@components/Icon';
import { TextInfo, TextInfoProps } from '@components/TextInfo';
import { combineRefs } from '@utils/combineRefs';
import { forwardRef, InputHTMLAttributes, MouseEvent, useRef } from 'react';
import './style.scss';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'style' | 'type'> {
  type?: 'text' | 'number' | 'password';
  label?: string;
  description?: string;
  size?: 'xs' | 'sm' | 'md';
  style?: 'light' | 'dark';
  invalid?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  textInfo?: TextInfoProps;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      style = 'dark',
      size = 'md',
      type = 'text',
      invalid,
      label,
      description,
      textInfo,
      iconLeft,
      iconRight,
      onChange,
      ...props
    },
    parentRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onComponentClick = () => {
      if (inputRef.current) {
        const lenght = inputRef.current.value.length;
        inputRef.current.focus();
        inputRef.current.setSelectionRange(lenght, lenght);
      }
    };

    const onInputClick = (event: MouseEvent) => event.stopPropagation();

    return (
      <div
        className='ev-input'
        data-style={style}
        data-invalid={invalid}
        data-size={size}
        onClick={onComponentClick}
      >
        {label && <label>{label}</label>}
        <div className='ev-input-wrapper'>
          {iconLeft && <Icon name={iconLeft} />}
          <input
            ref={combineRefs([parentRef, inputRef])}
            onChange={onChange}
            onClick={onInputClick}
            type={type !== 'number' ? type : 'text'}
            {...props}
          />
          {iconRight && <Icon name={iconRight} />}
          {textInfo && <TextInfo {...textInfo} />}
        </div>
        {description && <span className='ev-input-description'>{description}</span>}
      </div>
    );
  }
);
