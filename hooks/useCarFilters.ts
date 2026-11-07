import { useQuery } from "@tanstack/react-query";
import { getFilters } from "@/lib/api/cars";

export const useCarFilters = () => {
    return useQuery({
        queryKey: ["car-filters"],
        queryFn: getFilters,
        staleTime: Infinity,
    });
}