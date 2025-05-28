type ParamsValue = string | undefined;

export const prepareQueryParams = (arr: { key: string; value: ParamsValue }[]) => {
  return arr.reduce((acc, item) => {
    if (item.value) {
      if (!acc) {
        acc += `?${item.key}=${item.value}`;
      } else {
        acc += `&${item.key}=${item.value}`;
      }
    }

    return acc;
  }, '');
};
