import { FC, HTMLAttributes } from '../../../node_modules/react';

export interface CaptchaProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    onFinish?: (success: boolean) => void;
}
export declare const Captcha: FC<CaptchaProps>;
