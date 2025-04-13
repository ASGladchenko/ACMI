export function debounce<Args extends unknown[]>(
  func: (...args: Args) => void,
  delay = 500
): (...args: Args) => void {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Args): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
