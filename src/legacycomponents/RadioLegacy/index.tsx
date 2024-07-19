import "./RadioLegacy.scss";

export interface RadioLegacyProps {
  isActive: boolean;
}
/**
 * @deprecated
 */
export const RadioLegacy = ({ isActive = false }: RadioLegacyProps) => {
  return (
    <label className="ev-radio-legacy">
      <div
        className={[
          "ev-radio-legacy--box",
          isActive && "ev-radio-legacy--box_active",
        ].join(" ")}
      >
        <div />
      </div>
    </label>
  );
};
