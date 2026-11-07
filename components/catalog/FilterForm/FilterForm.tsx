'use client';

import css from "./FilterForm.module.css"
import { CarFilters } from "@/types/car";
import { buildPriceOptions } from "@/lib/utils/price";

import { useId, useState } from "react";
import { useCarFilters } from "@/hooks/useCarFilters";

type Props = {
    onSubmit: (filters: CarFilters) => void;
    onReset: () => void;
}

export default function FilterForm({ onSubmit, onReset }: Props) {
    const id = useId();

    const { data } = useCarFilters();
    const brands = data?.brands ?? [];
    const prices = data ? buildPriceOptions(data.price.min, data.price.max) : [];

    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [minMileage, setMinMileage] = useState("");
    const [maxMileage, setMaxMileage] = useState("");

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({
            brand: brand || undefined,
            price: price || undefined,
            minMileage: minMileage || undefined,
            maxMileage: maxMileage || undefined,
        });
    };

    const handleClear = () => {
        setBrand("");
        setPrice("");
        setMinMileage("");
        setMaxMileage("");
        onReset();
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.row}>
                <div className={css.field}>
                    <label htmlFor={`${id}-brand`} className={css.label}>Car brand</label>
                    <select id={`${id}-brand`} value={brand} onChange={(e) => setBrand(e.target.value)}>
                        <option value="">Choose a brand</option>
                        {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                </div>
                
                <div className={css.field}>
                    <label htmlFor={`${id}-price`} className={css.label}>Price / 1 hour</label>
                    <select id={`${id}-price`} value={price} onChange={(e) => setPrice(e.target.value)}>
                        <option value="">Choose a price</option>
                        {prices.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                </div>

                <div className={css.kmField}>
                    <input
                        type="number"
                        value={minMileage}
                        onChange={(e) => setMinMileage(e.target.value)}
                        placeholder="From"
                    />

                    <input
                        type="number"
                        value={maxMileage}
                        onChange={(e) => setMaxMileage(e.target.value)}
                        placeholder="To"
                    />
                </div>

                <button type="submit" className={css.searchBtn}>Search</button>
            </div>

            <button type="button" className={css.clearBtn} onClick={handleClear}>
                Clear filters
            </button>
        </form>
    )
}