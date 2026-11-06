import css from "./CarCard.module.css"

// import Image from "next/image";

export default function CarCard() {

    // const image = "Image";
    const model = "Model, Year";
    const price = "50$";
    const city = "City";
    const country = "Country";
    const rental = "Rental";
    const km = "1000km";

    return (
        <div className={css.card}>
            {/* <Image src='' alt={}/> */}
            <div className={css.image}>text</div>
            <div className={css.info}>
                <p className={css.model}>{model}</p>
                <p className={css.price}>{price}</p>

                <div className={css.details}>
                    <ul className={css.location}>
                        <li className={css.city}>{city}</li>
                        <li className={css.country}>{country}</li>
                        <li className={css.rental}>{rental}</li>
                    </ul>
                    <ul className={css.distance}>
                        <li className={css.item}>Suv</li>
                        <li className={css.distance}>{km}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}