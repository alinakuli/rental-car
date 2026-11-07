import css from "./NoCarsFound.module.css"
import Image from "next/image"

type Props = {
    onReset: () => void;
};

export default function NoCarsFound({ onReset }: Props) {

    return (
        <div className={css.noCars}>
            <Image
                src="/images/NoCars.png"
                alt="No cats found"
                className={css.image}
                width={414}
                height={388}
            />
            
            <div className={css.message}>
                <h2 className={css.heading}>
                    No cars found
                </h2>
                <p className={css.text}>
                    We couldn`t find any cars that match your current filters. Try changing your search criteria or reset the filters.
                </p>
            </div>

            <button
                type="button"
                className={css.btn}
                onClick={onReset}
            >Reset Filters</button>
        </div>
    )
}