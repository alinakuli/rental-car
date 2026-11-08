import { useInfiniteQuery } from "@tanstack/react-query";
import { getCars } from "@/lib/api/cars";
import type { CarFilters } from "@/types/car";

export const useCars = (filters: CarFilters) => {
    
  return useInfiniteQuery({
    queryKey: ["cars", filters],
    queryFn: ({ pageParam }) => getCars(filters, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.page < lastPage.totalPages ? allPages.length + 1 : undefined,
  });
}