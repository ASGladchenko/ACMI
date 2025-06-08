import { FieldMetaProps } from 'formik';

export const controlFormikError = <T>(meta: FieldMetaProps<T>, name: string, label?: string) => {
  const error = meta && meta.touched && meta.error;

  if (!error || !name) return undefined;

  return error.replace(name, label || 'Value');
};
