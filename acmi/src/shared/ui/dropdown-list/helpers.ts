export const sizeToCSSString = (size: string | number) => {
  return typeof size === 'number' ? `${size}px` : size;
};
