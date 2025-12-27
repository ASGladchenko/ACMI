export const getVisiblePages = ({
  totalPages,
  currentPage,
  maxVisiblePages,
}: {
  totalPages: number;
  currentPage: number;
  maxVisiblePages: number;
}) => {
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  let calcVisiblePage = maxVisiblePages;

  const distanceFromEnd = totalPages - currentPage;

  if (currentPage <= 4 || distanceFromEnd <= 4) {
    calcVisiblePage = maxVisiblePages + 2;
  }

  const halfVisible = Math.floor(calcVisiblePage / 2);
  let start = Math.max(1, currentPage - halfVisible);
  let end = Math.min(totalPages, start + calcVisiblePage - 1);

  if (end - start + 1 < calcVisiblePage) {
    start = Math.max(1, end - calcVisiblePage + 1);
  }

  if (distanceFromEnd < calcVisiblePage) {
    start = Math.max(1, totalPages - calcVisiblePage + 1);
    end = totalPages;
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};
