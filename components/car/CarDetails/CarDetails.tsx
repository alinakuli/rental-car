import css from "./CarDetails.module.css"
import {
    IoLocationOutline,
    IoCalendarOutline,
    IoCarSportOutline
 } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import { PiRoadHorizon } from "react-icons/pi";
import { getArticle } from "@/lib/utils/format";

import type { Car } from "@/types/car";
import Image from "next/image";
import Container from "@/components/Container/Container";
import RentalForm from "../RentalForm/RentalForm";

type Props = {
    car: Car;
}

export default function CarDetails({ car }: Props) {
    const article = getArticle(car.img);

    return (
        <section className={css.section}>
            <Container>
                <div className={css.inner}>
                        <Image
                            src={car.img}
                            alt={`An image of ${car.brand} ${car.model}`}
                            width={640}
                            height={512}
                            className={css.image}
                        />
                    <RentalForm carId={car.id} />
                    <div className={css.about}>
                        <div className={css.details}>
                            <h2 className={css.heading}>
                                {car.brand} {car.model}, {car.year}
                                <span className={css.article}>Article: {article}</span>
                            </h2>
                            <p className={css.location}>
                                <IoLocationOutline /> {car.location.city}, {car.location.country}
                            </p>
                            <p className={css.price}>${car.rentalPrice}</p>
                            <p className={css.description}>{car.description}</p>
                        </div>
                        <div className={css.info}>
                            <div className={css.column}>
                                <h3 className={css.subheading}>Rental Conditions:</h3>
                                <ul className={css.list}>
                                    {car.rentalConditions.map((condition) => (
                                        <li key={condition} className={css.item}>
                                            <IoIosCheckmarkCircleOutline /> {condition}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    
                            <div className={css.column}>
                                <h3 className={css.subheading}>Car Specifications:</h3>
                                <ul className={css.list}>
                                    <li className={css.item}>
                                        <IoCalendarOutline /> Year: {car.year}
                                    </li>
                                    <li className={css.item}>
                                        <IoCarSportOutline /> Type: {car.type}
                                    </li>
                                    <li className={css.item}>
                                        <BsFuelPump /> Fuel Consumption: {car.fuelConsumption}
                                    </li>
                                    <li className={css.item}>
                                        <GoGear /> Engine: {car.engine}
                                    </li>
                                    <li className={css.item}>
                                        <PiRoadHorizon /> Mileage: {car.mileage} km
                                    </li>
                                </ul>
                            </div>
                    
                            <div className={css.column}>
                                <h3 className={css.subheading}>Features</h3>
                                <ul className={css.list}>
                                    {[...car.features].map((item) => (
                                        <li key={item} className={css.item}>
                                            <IoIosCheckmarkCircleOutline /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}