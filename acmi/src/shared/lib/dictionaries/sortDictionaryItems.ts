export function sortDictionaryItems<T>(
  items: readonly T[],
  getLabel: (item: T) => string | null | undefined,
  locale: string = 'en'
): T[] {
  return [...items].sort((a, b) =>
    (getLabel(a) ?? '').localeCompare(getLabel(b) ?? '', locale, { sensitivity: 'base' })
  );
}
