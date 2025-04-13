'use client';

export const LoadMore = ({ onClick, isLoading }: { onClick: () => void; isLoading: boolean }) => {
  return (
    <button
      onClick={onClick}
      className="border-blue-dark text-blue-dark flex w-full cursor-pointer items-center justify-center gap-4 rounded-xl border p-5"
    >
      LoadMore
      {isLoading && (
        <span className="border-blue-dark block h-6 w-6 animate-spin rounded-full border-4 border-b-transparent duration-300"></span>
      )}
    </button>
  );
};
