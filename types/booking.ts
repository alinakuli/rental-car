export type BookingPayload = {
    carId: string,
    name: string,
    email: string,
    comment: string,
}

export interface BookingResponse {
  message: string;
}