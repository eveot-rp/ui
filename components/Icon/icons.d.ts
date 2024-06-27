import { SVGProps } from '../../../node_modules/react';

/**
 * Для правильной работы компонента, необходимо каждой "кастомной" иконке передавать `props`.
 * Так же основным элементам необходимо задать `fill || stroke: currentColor`, чтобы цвет брался из CSS свойства `color`.
 * @param {SVGSVGElement} fill currentColor
 * @param {SVGSVGElement} stroke currentColor
 */
type EvIconProps = SVGProps<SVGSVGElement>;
export declare const EvDollar: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvFlagRU: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvFlagPL: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvFlagUS: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvWallet: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvSteeringWheel: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvTriangle: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const EvRespect: (props: EvIconProps) => import("react/jsx-runtime").JSX.Element;
export {};
