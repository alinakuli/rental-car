export interface BookingFormData {
    name: string;
    email: string;
    comment: string;
}

export interface BookingPayload extends BookingFormData {
    carId: string;
}

export interface BookingResponse {
  message: string;
}