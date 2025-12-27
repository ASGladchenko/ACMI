import { TextArea, TextAreaProps } from '@/shared/ui';

import { FieldMode } from '../smart-field';
import { FieldBridge } from '../field-bridge';

type TextAreaIncomeProps = Omit<TextAreaProps, 'value' | 'onChange'>;

export interface TextAreaFieldProps extends TextAreaIncomeProps {
  name: string;
  mode?: FieldMode;
}

export const TextAreaField = ({ name, mode, ...rest }: TextAreaFieldProps) => {
  return (
    <FieldBridge<string, TextAreaIncomeProps>
      name={name}
      mode={mode}
      extraProps={rest}
      Component={TextArea}
    />
  );
};
