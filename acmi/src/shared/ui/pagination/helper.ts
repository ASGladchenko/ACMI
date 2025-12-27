export const getVisiblePages = ({
  currentPage,
  totalPages,
  maxVisiblePages,
}: {
  currentPage: number;
  totalPages: number;
  maxVisiblePages: number;
}) => {
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const calcVisiblePage = currentPage <= 4 ? 7 : maxVisiblePages;

  const halfVisible = Math.floor(calcVisiblePage / 2);
  let start = Math.max(1, currentPage - halfVisible);
  const end = Math.min(totalPages, start + calcVisiblePage - 1);

  if (end - start + 1 < calcVisiblePage) {
    start = Math.max(1, end - calcVisiblePage + 1);
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};
