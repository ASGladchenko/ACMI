import { SelectOption } from '@/shared/types';
import { FieldMode, FieldBridge } from '@/shared/lib';

import { SelectDictionary, SelectDictionaryProps } from '../select-dictionary';

type SelectDictionaryIncomeProps = Omit<SelectDictionaryProps, 'value' | 'onChange'>;

export type SelectDictionaryFieldProps = SelectDictionaryIncomeProps & {
  name: string;
  mode?: FieldMode;
};

export const SelectDictionaryField = ({ name, mode, ...rest }: SelectDictionaryFieldProps) => {
  return (
    <FieldBridge<SelectOption | null, SelectDictionaryIncomeProps>
      name={name}
      mode={mode}
      extraProps={rest}
      Component={SelectDictionary}
    />
  );
};
