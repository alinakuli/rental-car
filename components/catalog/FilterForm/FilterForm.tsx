'use client';

import css from "./FilterForm.module.css"
import { CarFilters } from "@/types/car";
import { buildPriceOptions } from "@/lib/utils/price";

import { useId, useState } from "react";
import { useCarFilters } from "@/hooks/useCarFilters";
import Select from "../Select/Select";

type Props = {
    onSubmit: (filters: CarFilters) => void;
    onReset: () => void;
}

export default function FilterForm({ onSubmit, onReset }: Props) {
    const id = useId();

    const { data } = useCarFilters();
    const brands = data?.brands ?? [];
    const prices = data ? buildPriceOptions(data.price.min, data.price.max) : [];

    const brandOptions = brands.map((b) => ({ value: b, label: b }));
    const priceOptions = prices.map((p) => ({ value: String(p), label: String(p) }));

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
                    <Select value={brand} onChange={setBrand} options={brandOptions} placeholder="Choose a brand" />
                </div>
                
                <div className={css.field}>
                    <label htmlFor={`${id}-price`} className={css.label}>Price / 1 hour</label>
                    <Select value={price} onChange={setPrice} options={priceOptions} placeholder="Choose a price" />
                </div>

                <fieldset className={css.field}>
                    <legend className={css.label}>Car mileage / km</legend>
                    <div className={css.range}>
                        <input
                            type="number"
                            min={0}
                            value={minMileage}
                            onChange={(e) => setMinMileage(e.target.value)}
                            placeholder="From"
                            className={css.from}
                        />
                        <input
                            type="number"
                            min={0}
                            value={maxMileage}
                            onChange={(e) => setMaxMileage(e.target.value)}
                            placeholder="To"
                            className={css.to}
                        />
                    </div>
                </fieldset>

                <button type="submit" className={css.searchBtn}>Search</button>
            </div>

            <button type="button" className={css.clearBtn} onClick={handleClear}>
                Clear filters
            </button>
        </form>
    )
}