'use client';

import { cn } from '@/utils';
import { regExp } from '@/constants';
import { LayOutItem } from '@/types';

import { layoutBlockMock } from './mock';

export interface SetLayOutProps {
  key: string;
  value: string;
  type: 'seats' | 'pitch';
}

export interface LayoutBlockProps {
  id: string;
  error?: string;
  isDisabled?: boolean;
  layoutSummary?: number;
  layout?: Record<string, LayOutItem>;
  setLayout: ({ key, type, value }: SetLayOutProps) => void;
}

export const LayoutBlock = ({
  id,
  error,
  setLayout,
  isDisabled,
  layout = {},
  layoutSummary,
}: LayoutBlockProps) => {
  const inputLabelClass = cn(
    'flex items-baseline gap-2 max-w-30 max-[568px]:w-full max-[568px]:max-w-[calc((100%-16px)/2)]',
    isDisabled && 'cursor-default',
    !isDisabled && 'cursor-pointer hover:bg-white-dark'
  );

  const inputClass =
    'font-roboto text-gray-dark min-w-15 shrink-1 text-[18px] font-bold outline-none disabled:cursor-default';

  const spanClass = 'font-roboto text-gray-dark text-[18px]';

  const handleOnChangeInput = ({ value, type, key }: SetLayOutProps) => {
    if (!regExp.digitsAndEmpty.test(value) || Number(value) > 1000) {
      return;
    }

    setLayout({ value, key, type });
  };

  return (
    <div>
      <p
        className={cn('font-roboto text-gray-dark text-[18px] font-bold', error && 'text-rose-500')}
      >
        Layout: {layoutSummary}
      </p>

      <div className="flex flex-col gap-2 px-2 py-2">
        {layoutBlockMock.map((item, idx) => (
          <div
            key={`${item.text}-${idx}-${id}`}
            className="flex gap-10 max-[568px]:flex-wrap max-[568px]:gap-2"
          >
            <p className="font-roboto text-gray-dark w-67 text-[18px] font-bold max-[568px]:w-full">
              {item.text}
            </p>

            <label className={inputLabelClass}>
              <span className={spanClass}>seats:</span>

              <input
                placeholder="-"
                disabled={isDisabled}
                className={inputClass}
                value={layout?.[item.setter]?.seats}
                onChange={(e) =>
                  handleOnChangeInput({
                    type: 'seats',
                    key: item.setter,
                    value: e.target.value,
                  })
                }
              />
            </label>

            <label className={inputLabelClass}>
              <span className={spanClass}>pitch:</span>

              <input
                placeholder="-"
                disabled={isDisabled}
                className={inputClass}
                value={layout?.[item.setter]?.pitch}
                onChange={(e) =>
                  handleOnChangeInput({
                    type: 'pitch',
                    key: item.setter,
                    value: e.target.value,
                  })
                }
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
