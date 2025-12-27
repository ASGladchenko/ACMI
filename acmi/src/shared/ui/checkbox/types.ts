import { InputHTMLAttributes } from 'react';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type CheckboxCleanedProps = Omit<NativeInputProps, 'type' | 'onChange' | 'value'>;

type CheckBoxBaseProps = CheckboxCleanedProps & {
  name?: string;
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  styleType?: 'check' | 'circle';
};

export type CheckboxRadioOnChange = (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;

export type CheckboxCheckOnChange = (
  value: boolean,
  e: React.ChangeEvent<HTMLInputElement>
) => void;

type CheckboxRadioProps = CheckBoxBaseProps & {
  type?: 'radio';
  value: string | number;
  onChange: CheckboxRadioOnChange;
};

type CheckboxCheckedProps = CheckBoxBaseProps & {
  type?: 'checkbox';
  value?: never;
  onChange: CheckboxCheckOnChange;
};

export type CheckboxProps = CheckboxRadioProps | CheckboxCheckedProps;
