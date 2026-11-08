'use client'

import css from "./LoadingCars.module.css"
import Loader from "@/components/layout/Loader/Loader";
import { useEffect } from "react";

export default function LoadingCars() {
    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, []);
    
    const heading = "Loading cars..."
    const message = "Please wait while we fetch the best cars for you."

    return (
        <div className={css.window}>
            <div className={css.modal}>
                <Loader />
                <h2 className={css.heading}>{heading}</h2> 
                <p className={css.message}>{message}</p>
            </div>
        </div>
    )
}