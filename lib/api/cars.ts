import { Car, CarFilters, CarsResponse, CarFilterOptions} from "@/types/car";
import { buildQuery } from "../utils/query";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getFilters = async (): Promise<CarFilterOptions> => {
  const res = await fetch(`${BASE_URL}/cars/filters`);

  return res.json();
} 

export const getCars = async (
  filters: CarFilters,
  page: number,
  perPage: number = 12
): Promise<CarsResponse> => {
  const query = buildQuery({ ...filters, page, perPage });
  const res = await fetch(`${BASE_URL}/cars?${query}`);
  
  return res.json();
}

export const fetchCarById = async (
  id: string,
): Promise<Car> => {
  const res = await fetch(`${BASE_URL}/cars/${id}`);
  
  return res.json();
};