interface UsePaginationReturns {
  hasMore: boolean;
  nextCursor?: number;
  previousCursor?: number;
}

interface UsePaginationProps {
  totalCount: number;
  itemsPerPage: number;
  currentCursor: number;
}

function usePagination(props: UsePaginationProps): UsePaginationReturns {
  let hasMore = false;
  let currentCursor = props?.currentCursor;
  let nextCursor;
  let previousCursor;

  let totalPages = Math.trunc(props?.totalCount / props?.itemsPerPage);

  if (props?.totalCount % props?.itemsPerPage > 0) {
    totalPages += 1;
  }

  if (props?.currentCursor < totalPages) {
    hasMore = true;
    nextCursor = ++currentCursor;
  }

  if (props?.currentCursor > 1) {
    previousCursor = props?.currentCursor - 1;
  }

  return {
    hasMore,
    nextCursor,
    previousCursor,
  };
}

export type { UsePaginationProps, UsePaginationReturns };
export { usePagination };
