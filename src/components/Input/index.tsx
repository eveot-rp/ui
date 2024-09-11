import { Icon, IconName } from "@components/Icon";
import { TextInfo, TextInfoProps } from "@components/TextInfo";
import { combineRefs } from "@utils/combineRefs";
import {
  forwardRef,
  InputHTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useRef,
} from "react";
import "./style.scss";

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "style" | "type"
  > {
  type?: "text" | "number" | "password";
  label?: string;
  description?: string;
  size?: "xs" | "sm" | "md";
  style?: "light" | "dark";
  invalid?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  textInfo?: TextInfoProps;
}

export const Input = forwardRef<
  HTMLInputElement,
  PropsWithChildren<InputProps>
>(
  (
    {
      style = "dark",
      size = "md",
      type = "text",
      invalid,
      label,
      description,
      textInfo,
      iconLeft,
      iconRight,
      onChange,
      children,
      className,
      ...props
    },
    parentRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onComponentClick = useCallback(
      (event: MouseEvent) => {
        event.stopPropagation();
        if (inputRef.current) {
          const lenght = inputRef.current.value.length;
          inputRef.current.focus();
          inputRef.current.setSelectionRange(lenght, lenght);
        }
      },
      [inputRef.current]
    );

    const onInputClick = (event: MouseEvent) => event.stopPropagation();

    return (
      <div
        className={`ev-input ${className ?? ""}`}
        data-style={style}
        data-invalid={invalid}
        data-size={size}
      >
        {label && <label>{label}</label>}
        <div className="ev-input-wrapper" onClick={onComponentClick}>
          {iconLeft && <Icon name={iconLeft} />}
          <input
            ref={combineRefs([parentRef, inputRef])}
            onChange={onChange}
            onClick={onInputClick}
            type={type !== "number" ? type : "text"}
            {...props}
          />
          {iconRight && <Icon name={iconRight} />}
          {textInfo && (
            <TextInfo {...textInfo} style={{ whiteSpace: "nowrap" }} />
          )}
          {children}
        </div>
        {description && (
          <span className="ev-input-description">{description}</span>
        )}
      </div>
    );
  }
);
