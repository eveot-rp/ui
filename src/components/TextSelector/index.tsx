import { Icon } from "@components/Icon";
import { FC, HTMLAttributes, useEffect, useState } from "react";
import "./style.scss";

export interface TextSelectorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  items?: Array<string>;
  disabled?: boolean;
  onChange?: (text: string, index: number) => void;
}

export const TextSelector: FC<TextSelectorProps> = ({
  items,
  disabled,
  onChange,
  className,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onChangeItem = (variant: "prev" | "next") => {
    if (!items) return;
    if (variant === "prev") {
      setSelectedIndex((selectedIndex + items.length - 1) % items.length);
    } else {
      setSelectedIndex((selectedIndex + 1) % items.length);
    }
  };

  useEffect(() => {
    if (onChange) {
      const text = items ? items[selectedIndex] : "";
      onChange(text, selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <div
      className={`ev-text-selector ${className}`}
      data-disabled={disabled}
      {...props}
    >
      <Icon
        name="TbSquareArrowLeftFilled"
        size="1.75rem"
        onClick={() => onChangeItem("prev")}
      />
      <div className="ev-text-selector-value">
        {items?.find((_, index) => index === selectedIndex)}
      </div>
      <Icon
        name="TbSquareArrowRightFilled"
        size="1.75rem"
        onClick={() => onChangeItem("next")}
      />
    </div>
  );
};
