import css from "./Hero.module.css";

import Link from "next/link";
import Container from "@/components/Container/Container";

export default function Hero() {
    return (
        <section className={css.hero} id="Hero">
            <Container>
                <div className={css.banner}>
                    <div className={css.intro} >
                        <h1 className={css.title}>Find your perfect rental car</h1>
                        <h2 className={css.subtitle}>Reliable and budget-friendly rentals for any journey</h2>
                    </div>
                <Link href="/catalog" className={css.btn}>View Catalog</Link>
            </div>
            </Container>
         </section>
     )
 } 