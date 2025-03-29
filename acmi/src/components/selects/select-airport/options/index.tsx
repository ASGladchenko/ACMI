import { Plain } from '@/assets/svg';

import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  isLoading?: boolean;
  onChange: (option: ISelectOption) => void;
}

export const Options = ({ options, isLoading,setIsOpen, onChange }: OptionsProps) => {
  const isEmpty = options.length === 0;

  const onHandleChange = (option: ISelectOption) => {
    onChange(option);
    setIsOpen(false)
  };

  return (
    <div className="bg-white border w-full rounded-[0_0_12px_12px] border-t-0 border-blue-dark px-3 pb-2.5 text-blue-dark">
      {isEmpty && !isLoading && <p className="text-gray-dark w-full text-center">No options</p>}

      {!isEmpty && !isLoading && (
        <div className="overflow-y-auto scroll-bar-mini max-h-[120px]">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => onHandleChange(option)}
              className="text-blue-dark flex items-center leading-[19px] gap-4 text-[16px] py-1 px-1 cursor-pointer hover:bg-slate-300 duration-200 "
            >
              <Plain className="w-6 h-3 shrink-0" />

              <span className="text-[inherit]">{option.text}</span>
            </div>
          ))}
        </div>
      )}

      {isLoading && (
        <div className=" flex items-center justify-center">
          <span className="block w-5 h-5  border-3 border-blue-dark rounded-full border-t-transparent animate-spin duration-1000"></span>
        </div>
      )}
    </div>
  );
};
