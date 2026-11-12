'use client';

import css from "./RentalForm.module.css"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import * as Yup from "yup";
import { isAxiosError } from "axios";
import { createBooking } from "@/lib/api/bookings";
import toast from "react-hot-toast";
import { BookingFormData } from "@/types/booking";
import { BsExclamationCircle } from "react-icons/bs";


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
                    placeholder=""
                    className={`${css.input} ${errors.name ? css.errorInput : ""}`}
                    aria-invalid={!!errors.name}
                />
                <label
                    htmlFor="name"
                    className={`${css.label} ${errors.name ? css.errorLabel : ""}`}
                >Name*</label>
                
                {errors.name && <span className={css.error}>{errors.name}</span>}
                {errors.name && <BsExclamationCircle className={css.errorMark} />}
            </div>

            <div className={css.fieldGroup}>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=""
                    className={`${css.input} ${errors.email ? css.errorInput : ""}`}
                    aria-invalid={!!errors.email}
                />
                <label
                    htmlFor="email"
                    className={`${css.label} ${errors.email ? css.errorLabel : ""}`}
                >Email*</label>

                {errors.email && <span className={css.error}>{errors.email}</span>}
                {errors.email && <BsExclamationCircle className={css.errorMark} />}
            </div>

            <div className={css.textareaGroup}>
                <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    placeholder=""
                    className={`${css.textarea} ${errors.comment ? css.errorInput : ""}`}
                    aria-invalid={!!errors.comment}
                />
                <label
                    htmlFor="comment"
                    className={`${css.label} ${errors.comment ? css.errorLabel : ""}`}
                >Comment*</label>
                {errors.comment && <span className={css.error}>{errors.comment}</span>}
                {errors.comment && <BsExclamationCircle className={css.errorMark} />}
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