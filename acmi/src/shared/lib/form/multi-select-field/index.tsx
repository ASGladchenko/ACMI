import { SelectOption } from '@/shared/types';
import { MultiSelect, MultiSelectProps } from '@/shared/ui';

import { FieldMode } from '../smart-field';
import { FieldBridge } from '../field-bridge';

type MultiSelectIncomeProps<T extends SelectOption> = Omit<
  MultiSelectProps<T>,
  'value' | 'onChange'
>;

export type MultiSelectFieldProps<T extends SelectOption> = MultiSelectIncomeProps<T> & {
  name: string;
  mode?: FieldMode;
};

export const MultiSelectField = <T extends SelectOption>({
  name,
  mode,
  ...rest
}: MultiSelectFieldProps<T>) => {
  return (
    <FieldBridge<T[] | null, MultiSelectIncomeProps<T>>
      name={name}
      mode={mode}
      extraProps={rest}
      Component={MultiSelect<T>}
    />
  );
};
