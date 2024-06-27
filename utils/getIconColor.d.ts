export type ColorVariant = {
    color: string;
    value?: boolean;
};
export type IconColorVariants = {
    [key: string]: ColorVariant;
};
/**
 * @description use this to make `react-icons` correctly change the color of the **filled** icons
 * @param variant priority works
 */
export declare const getIconColor: (variants: IconColorVariants) => string;
