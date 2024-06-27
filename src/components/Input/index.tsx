import { Icon, IconName } from '@components/Icon';
import { TextInfo, TextInfoProps } from '@components/TextInfo';
import { combineRefs } from '@utils/combineRefs';
import { ChangeEvent, forwardRef, MouseEvent, useRef } from 'react';
import './style.scss';

export interface InputProps {
  type?: 'text' | 'number' | 'password';
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  size?: 'xs' | 'sm' | 'md';
  style?: 'light' | 'dark';
  invalid?: boolean;
  disabled?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  textInfo?: TextInfoProps;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  // TODO: понять зачем добавлялось свойство (не используется)
  // autoFocus?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { style = 'dark', size = 'md', type = 'text', invalid, label, textInfo, iconLeft, iconRight, onChange, ...props },
    parentRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const _onChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (type === 'number') {
        const value = Number(event.currentTarget.value);
        event.currentTarget.value = String(value).replace(/[^\d]/g, '');
        if (props.max && value > props.max) {
          event.currentTarget.value = String(props.max);
        } else if (props.min && value < props.min) {
          event.currentTarget.value = String(props.min);
        }
      }
      onChange && onChange(event);
    };

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
            onChange={_onChange}
            onClick={onInputClick}
            type={type !== 'number' ? type : 'text'}
            {...props}
          />
          {iconRight && <Icon name={iconRight} />}
          {textInfo && <TextInfo {...textInfo} />}
        </div>
      </div>
    );
  }
);
