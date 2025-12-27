import { SelectOption } from '@/shared/types';
import { FieldMode, FieldBridge } from '@/shared/lib';
import { MultiSelectDictionary, MultiSelectDictionaryProps } from '../multi-select-dictionary';

type MultiSelectDictionaryIncomeProps = Omit<MultiSelectDictionaryProps, 'value' | 'onChange'>;

export type MultiSelectDictionaryFieldProps = MultiSelectDictionaryIncomeProps & {
  name: string;
  mode?: FieldMode;
};

export const MultiSelectDictionaryField = ({
  name,
  mode,
  ...rest
}: MultiSelectDictionaryFieldProps) => {
  return (
    <FieldBridge<SelectOption[] | null, MultiSelectDictionaryIncomeProps>
      name={name}
      mode={mode}
      extraProps={rest}
      Component={MultiSelectDictionary}
    />
  );
};
