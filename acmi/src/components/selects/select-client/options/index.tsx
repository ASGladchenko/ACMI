import { IRenderOptionsProps, ISelectOption } from '../../select-logic/types';

export interface OptionsProps extends IRenderOptionsProps {
  isLoading?: boolean;
  onChange: (option: ISelectOption) => void;
}

export const Options = ({ options, isLoading, onChange }: OptionsProps) => {
  const isEmpty = options.length === 0;

  return (
    <div className="bg-white border w-full rounded-[0_0_12px_12px] border-t-0 border-blue-dark px-3 pb-2.5 text-blue-dark">
      {isEmpty && !isLoading && <p className="text-gray-dark w-full text-center">No options</p>}

      {!isEmpty &&
        !isLoading &&
        options.map((option) => (
          <div
            key={option.value}
            onClick={() => onChange(option)}
            className="leading-[19px] text-[16px] py-1  px-1 cursor-pointer hover:bg-slate-300 duration-200"
          >
            <span className="text-blue-dark text-[inherit">{option.text}</span>
          </div>
        ))}

      {isLoading && (
        <div className=" flex items-center justify-center">
          <span className="block w-5 h-5  border-3 border-blue-dark rounded-full border-t-transparent animate-spin duration-1000"></span>
        </div>
      )}
    </div>
  );
};
