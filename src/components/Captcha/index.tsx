import { FC, useCallback, useEffect, useState } from 'react';
import './style.scss';

export interface CaptchaProps {
  value: string;
  onFinish?: (success: boolean) => void;
}

export const Captcha: FC<CaptchaProps> = ({ value, onFinish }) => {
  const [captchaSuccess, setCaptchaSuccess] = useState(true);
  const [captchaFinished, setCaptchaFinished] = useState(false);
  const array = value.toUpperCase().split('');
  const [inputArray, setInputArray] = useState<string[]>([]);
  const [symbolIndex, setSymbolIndex] = useState(-1);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!captchaSuccess || captchaFinished) return;
      event.stopPropagation();
      setInputArray((prev) => [...prev, event.key.toUpperCase()]);
    },
    [captchaSuccess, captchaFinished]
  );

  useEffect(() => {
    if (inputArray.length === 0) return;
    const keyInclude = array.join('').includes(inputArray.join(''));
    if (keyInclude && inputArray.length === array.length) {
      setCaptchaFinished(true);
    } else if (!keyInclude) {
      setCaptchaSuccess(false);
      setCaptchaFinished(true);
    }
    setSymbolIndex((prev) => prev + 1);
  }, [inputArray]);

  useEffect(() => {
    if (onFinish && captchaFinished) onFinish(captchaSuccess);
  }, [onFinish, captchaSuccess, captchaFinished]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return (
    <div className='ev-captcha'>
      {array.map((symbol, index) => (
        <div
          key={index}
          className='ev-captcha-value'
          data-active={index <= symbolIndex}
          data-success={captchaSuccess}
        >
          {symbol}
        </div>
      ))}
    </div>
  );
};
