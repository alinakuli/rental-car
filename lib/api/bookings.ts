import { BookingPayload, BookingResponse } from "@/types/booking";
import { api } from "./client";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const createBooking = async ( {carId, ...booking }: BookingPayload):Promise<BookingResponse> => {
    const { data } = await api.post<BookingResponse>(`$${BASE_URL}/cars/${carId}/booking-requests`, booking);

    return data;
}