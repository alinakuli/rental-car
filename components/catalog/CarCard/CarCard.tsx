import css from "./CarCard.module.css"
import type { Car } from "@/types/car"

import Image from "next/image"
import Link from "next/link"

export default function CarCard({ car }: { car: Car }) {

    return (
        <div className={css.card}>
            <Image
                src={car.img}
                alt={`An image of ${car.brand} ${car.model}`}
                width={244}
                height={268}
                className={css.image}
            />
            <div className={css.info}>

                <div className={css.header}>
                    <h3 className={css.title}>
                        {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
                    </h3>
                    <p className={css.price}>${car.rentalPrice}</p>
                </div>

                    <ul className={css.details}>
                        <div className={css.location}>
                            <li className={css.item}>{car.location.city}</li>
                            <li className={css.item}>{car.location.country}</li>
                            <li className={css.item}>{car.rentalCompany}</li>
                        </div>
                        <div className={css.distance}>
                            <li className={css.item}>{car.type}</li>
                            <li className={css.item}>{car.mileage} km</li>
                        </div>
                    </ul>
            </div>

            <Link
                href={`/catalog/${car.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={css.btn}
            >
                Read more
            </Link>
        </div>
    )
}