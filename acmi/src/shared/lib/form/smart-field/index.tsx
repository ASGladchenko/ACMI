'use client';

import { Field, FastField, FieldProps } from 'formik';

export type FieldMode = 'form' | 'self';

type SmartFieldBaseProps = {
  name: string;
  children?: (props: FieldProps) => React.ReactNode;
};

type SmartFieldFormProps = SmartFieldBaseProps & {
  mode?: 'form';
};

type SmartFieldSelfProps = SmartFieldBaseProps & {
  mode: 'self';
};

export type SmartFieldProps = SmartFieldFormProps | SmartFieldSelfProps;

export const SmartField = ({ mode = 'form', ...rest }: SmartFieldProps) => {
  const Comp = mode === 'self' ? FastField : Field;
  return <Comp {...rest} />;
};
