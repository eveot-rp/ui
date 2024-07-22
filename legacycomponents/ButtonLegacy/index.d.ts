
export interface ButtonProps {
    children: string | JSX.Element | JSX.Element[];
    onClick: () => void;
    disabled?: boolean;
    mode?: "default" | "primary" | "white";
    size?: "sm" | "lg" | "md" | "xlg";
    icon?: {
        value: JSX.Element;
        position: "right" | "left";
    };
}
/**
 * @deprecated
 */
export declare const ButtonLegacy: ({ icon, mode, size, disabled, onClick, children, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
