import { InputBase, InputBaseProps } from '@/shared/ui';

import { FieldMode } from '../smart-field';
import { FieldBridge } from '../field-bridge';

type InputIncomeProps = Omit<InputBaseProps, 'value' | 'onChange'>;

export interface InputFieldProps extends InputIncomeProps {
  name: string;
  mode?: FieldMode;
}

export const InputField = ({ name, mode, ...rest }: InputFieldProps) => {
  return (
    <FieldBridge<string, InputIncomeProps>
      name={name}
      mode={mode}
      extraProps={rest}
      Component={InputBase}
    />
  );
};
