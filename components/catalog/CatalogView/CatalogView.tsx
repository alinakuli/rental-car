'use client';

import css from "./CatalogView.module.css"
import { useState } from "react";
import { useCars } from "@/hooks/useCars";

import type { CarFilters } from "@/types/car";
import CarCard from "../CarCard/CarCard";
import LoadingCars from "../LoadingCars/LoadingCars";
import NoCarsFound from "../NoCarsFound/NoCarsFound";
import FilterForm from "../FilterForm/FilterForm";
import CatalogError from "@/app/catalog/error";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Container from "@/components/Container/Container";

export default function CatalogView() {
    const [filters, setFilters] = useState<CarFilters>({});
    const [formKey, setFormKey] = useState(0);

    const {
        data,
        error,
        isPending,
        isError,
        refetch,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useCars(filters)

    const cars = data?.pages.flatMap((page) => page.cars) ?? [];

    const handleReset = () => {
        setFilters({});
        setFormKey((k) => k + 1);
    };

    return (
        <section className={css.section}>
            <Container>
                <div className={css.inner}>
                    <FilterForm key={formKey} onSubmit={setFilters} onReset={handleReset}/>
                    
                    {isPending && <LoadingCars />}
                    
                    {isError && (
                        <CatalogError
                            error={error}
                            reset={() => {
                                void refetch();
                            }}
                        />
                    )}
                    
                    {!isPending && !isError && cars.length === 0 &&
                        <NoCarsFound onReset={() => setFilters({})} />
                    }
                    {cars.length > 0 && (
                        <ul className={css.list}>
                            {cars.map((car) => (
                                <li key={car.id} className={css.item}>
                                    <CarCard car={car} />
                                </li>
                            ))}
                        </ul>
                    )}
                    {hasNextPage &&
                        (
                        <LoadMoreBtn onClick={() => fetchNextPage()} loading={isFetchingNextPage} />
                        )
                    }
                </div>
            </Container>
        </section>
    )
}