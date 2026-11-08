import { Car, CarFilters, CarsResponse, CarFilterOptions} from "@/types/car";
import { buildQuery } from "../utils/query";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getFilters = async (): Promise<CarFilterOptions> => {
  const { data } = await axios.get<CarFilterOptions>(`${BASE_URL}/cars/filters`);

  return data;
} 

export const getCars = async (
  filters: CarFilters,
  page: number,
  perPage: number = 12
): Promise<CarsResponse> => {
  const query = buildQuery({ ...filters, page, perPage });
  const { data } = await axios.get<CarsResponse>(`${BASE_URL}/cars?${query}`);
  
  return data;
}

export const getCarById = async (
  id: string,
): Promise<Car> => {
  const res = (await fetch(`${BASE_URL}/cars/${id}`)).json();
  
  return res;
};