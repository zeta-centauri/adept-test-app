import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface UseInfiniteScrollProps {
  hasMore: boolean;
  isLoading: boolean;
  page: number;
  limit: number;
  threshold: number;
  onLoadMore: (page: number, limit: number) => void;
}

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  page,
  limit,
  onLoadMore,
  threshold,
}: UseInfiniteScrollProps) => {
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      onLoadMore(page, limit);
    }
  }, [inView]);

  return { ref };
};
