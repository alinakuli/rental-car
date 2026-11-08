import css from "./Loader.module.css"
import { Oval } from "react-loader-spinner"

export default function Loader() {
    return <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#00AAD4"
                    secondaryColor="#F7F7F7"
                    ariaLabel="tail-spin-loading"
                    strokeWidth={3}
                    wrapperStyle={{}}
                    wrapperClass={css.loading}
                />
}