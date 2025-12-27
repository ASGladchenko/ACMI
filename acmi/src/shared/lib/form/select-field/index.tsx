import { SelectOption } from '@/shared/types';
import { Select, SelectProps } from '@/shared/ui';

import { FieldMode } from '../smart-field';
import { FieldBridge } from '../field-bridge';

type SelectIncomeProps<T extends SelectOption> = Omit<SelectProps<T>, 'value' | 'onChange'>;

export type SelectFieldProps<T extends SelectOption> = SelectIncomeProps<T> & {
  name: string;
  mode?: FieldMode;
};

export const SelectField = <T extends SelectOption>({
  name,
  mode,
  ...rest
}: SelectFieldProps<T>) => {
  return (
    <FieldBridge<T | null, SelectIncomeProps<T>>
      name={name}
      mode={mode}
      extraProps={rest}
      Component={Select<T>}
    />
  );
};
