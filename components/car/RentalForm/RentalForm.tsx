'use client';

import css from "./RentalForm.module.css"
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as Yup from "yup";
import { Booking } from "@/types/booking";


export default function RentalForm({ carId }: { carId: string }) {
    const queryClient = useQueryClient();

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
        tag: Yup.string()
            .required("Comment is required."),
  });


    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <h3 className={css.title}>Book your car now</h3>
            <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
            
            <label htmlFor="name">Name*</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value="name"
            />
            <label htmlFor="email">Email*</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value="email"
            />

                <button type="submit">Send</button>

            </form>
            

            
    )
}