import css from "./LoadingCars.module.css"

export default function LoadingCars() {
    return (
        <div className={css.window}>
            <div className={css.modal}>
                <h2 className={css.loading}>Loading cars...</h2> 
                <p className={css.message}>Please wait while we fetch the best cars for you</p>
            </div>
        </div>
    )
}