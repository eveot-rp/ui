import { Icon } from "@components/Icon";
import { CSSProperties, FC, HTMLAttributes, PropsWithChildren } from "react";
import "./style.scss";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClose" | "style"> {
  title?: string;
  description?: string;
  show?: boolean;
  width?: CSSProperties["width"];
  style?: "dark" | "light";
  image?: string | null;
  backdrop?: boolean;
  centered?: boolean;
  padding?: CSSProperties["padding"];
  onClose?: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  title,
  centered = "true",
  padding,
  show,
  style = "dark",
  backdrop = true,
  image = null,
  description,
  children,
  width,
  className,
  onClose,
}) => {
  const closeIconColor = style === "dark" ? "#515356" : "#242629";
  const placeholderIconColor = style === "dark" ? "#242629" : "#D7D7D7";

  return (
    <div
      className={`ev-modal ${className ?? ""}`}
      data-show={show}
      data-style={style}
      data-centered={centered}
    >
      {backdrop && <div className="ev-modal-backdrop" onClick={onClose} />}
      <div className="ev-modal-wrapper" style={{ width, padding }}>
        {(title || description) && (
          <div className="ev-modal-header">
            <div className="header-info-close-button">
              <div className="header-image-title">
                {image === undefined ||
                  (image !== null && (
                    <div className="modal-image">
                      {image ? (
                        <img src={image} />
                      ) : (
                        <Icon
                          name="TbPhotoFilled"
                          size="3.4375rem"
                          color={placeholderIconColor}
                        />
                      )}
                    </div>
                  ))}
                <h1>{title}</h1>
              </div>
              {onClose && (
                <div className="close-button" onClick={onClose}>
                  <Icon
                    name="TbSquareXFilled"
                    size="1.5rem"
                    color={closeIconColor}
                  />
                </div>
              )}
            </div>
            <p>{description}</p>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
