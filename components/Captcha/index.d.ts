import { FC } from '../../../node_modules/react';

export interface CaptchaProps {
    value: string;
    onFinish?: (success: boolean) => void;
}
export declare const Captcha: FC<CaptchaProps>;
