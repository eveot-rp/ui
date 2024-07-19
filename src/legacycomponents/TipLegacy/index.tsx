import { JSX } from "react";
import "./TipLegacy.scss";

export interface TipProps {
  text: string[];
  tip: string | JSX.Element;
  mode?: "default" | "primary" | "grey";
}
/**
 * @deprecated
 */
export const TipLegacy = ({ tip, text, mode = "default" }: TipProps) => {
  return (
    <div className={["ev-tip-legacy", `ev-tip-mode--${mode}`].join(" ")}>
      <p>{text[0]}</p>
      <div>{tip}</div>
      {text[1] && <p>{text[1]}</p>}
    </div>
  );
};
