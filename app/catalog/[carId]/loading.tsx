import Loader from "@/components/layout/Loader/Loader"
import css from ".../page.module.css"

export default function Loading() {
    const heading = "Loading car details..."
    const message = "Please wait until we fetch the information about your car of choice."

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