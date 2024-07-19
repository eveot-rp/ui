import { InputLegacy } from "@legacycomponents/InputLegacy";
import { JSX, useState } from "react";
import { ButtonLegacy } from "../ButtonLegacy";
import "./ModalLegacy.scss";

export interface ModalLegacyLegacyProps {
  title: string | JSX.Element;
  type?: "confirmation" | "input" | "hint";
  onClick: (accepted: boolean, value?: string | number) => void;
  subtitle?: string;
  placeholder?: string;
}
/**
 * @deprecated
 */
export const ModalLegacy = ({
  title,
  subtitle,
  placeholder = "Placeholder",
  type = "confirmation",
  onClick,
}: ModalLegacyLegacyProps) => {
  const [text, setText] = useState("");

  return (
    <div
      className={["ev-modal-legacy", `ev-modal-legacy",-mode--${type}`].join(
        " ",
      )}
    >
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      {type === "input" && (
        <InputLegacy
          placeholder={placeholder}
          onChange={(e) => setText(e.target.value)}
          value={text}
          size="lg"
          name="ModalLegacyLegacy"
        />
      )}
      <div className="ev-ModalLegacyLegacy-buttons">
        {type !== "hint" && (
          <ButtonLegacy
            mode="default"
            size="lg"
            onClick={() => onClick(false, text)}
          >
            Отменить
          </ButtonLegacy>
        )}
        <ButtonLegacy
          mode="primary"
          size="lg"
          onClick={() => onClick(true, text)}
        >
          {type === "hint" ? "Понятно" : "Подтвердить"}
        </ButtonLegacy>
      </div>
    </div>
  );
};
