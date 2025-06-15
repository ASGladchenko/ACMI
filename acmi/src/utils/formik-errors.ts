import { FieldMetaProps } from 'formik';

export const controlFormikError = <T>(
  meta: FieldMetaProps<T>,
  name: string,
  label?: string
): string | undefined => {
  const error = meta && meta.touched && meta.error;

  if (!error || !name) return undefined;

  if (typeof error === 'string') {
    return error?.replace(name, label || 'Value');
  }

  if (typeof error === 'object' && error !== null) {
    const firstError = Object.values(error)[0];

    if (typeof firstError === 'string') {
      return firstError.replace(name, label || 'Value');
    }
    return String(firstError);
  }

  return undefined;
};
