interface NumberFormatOptions {
  value: number;
  config?: Intl.NumberFormatOptions;
}

export const getIntlNumberFormat = ({ value, config }: NumberFormatOptions) => {
  return new Intl.NumberFormat('en-GB', config).format(value);
};
