'use client';

import css from "./RentalForm.module.css"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { isAxiosError } from "axios";
import { createBooking } from "@/lib/api/bookings";
import toast from "react-hot-toast";
import { BookingFormData } from "@/types/booking";


export default function RentalForm({ carId }: { carId: string }) {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const { mutate, isPending } = useMutation({
        mutationFn: (values: BookingFormData) => createBooking({ carId, ...values }),
    });

    const Schema = Yup.object().shape({
        name: Yup.string()
            .trim()
            .min(2, "Please enter your full name.")
            .matches(/^[\p{L}\s'’-]+$/u, "Please enter your full name.")
            .required("Please enter your full name."),
        email: Yup.string()
            .trim()
            .email("Please enter your email")
            .required("Please enter your email."),
        comment: Yup.string()
            .required("Comment is required."),
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const values = Object.fromEntries(new FormData(form)) as unknown as BookingFormData;
        
        try {
            const validValues = await Schema.validate(values, { abortEarly: false });
            setErrors({});
            
            mutate(validValues, {
                onSuccess: (data) => {
                    toast.success(data.message);
                    form.reset();
                },
                onError: (error) => {
                    const message = isAxiosError(error)
                        ? error.response?.data?.message
                        : undefined;
                    toast.error(message ?? "Something went wrong. Please try again.");
                },
            });
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const fieldErrors: Record<string, string> = {};
                err.inner.forEach((e) => {
                    if (e.path && !fieldErrors[e.path]) {
                        fieldErrors[e.path] = e.message;
                    }
                });
                setErrors(fieldErrors);
            }
        }
    };


    return (
        <form
            className={css.form}
            onSubmit={handleSubmit}
            noValidate
        >
            <h3 className={css.title}>Book your car now</h3>
            <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
            
            <div className={css.fieldGroup}>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className={css.input}
                    aria-invalid={!!errors.name}
                />
                {errors.comment && <span className={css.error}>{errors.comment}</span>}
            </div>

            <div className={css.fieldGroup}>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className={css.input}
                    aria-invalid={!!errors.email}
                />
                {errors.comment && <span className={css.error}>{errors.comment}</span>}
            </div>

            <div className={css.fieldGroup}>
                <textarea
                    id="comment"
                    name="comment"
                    rows={5}
                    placeholder="Comment*"
                    className={css.textarea}
                    aria-invalid={!!errors.comment}
                />
                {errors.comment && <span className={css.error}>{errors.comment}</span>}
            </div>

            <button
                type="submit"
                className={css.btn}
                disabled={isPending}
            >
                {isPending ? "Sending..." : "Send"}
            </button>

            </form>
            

            
    )
}