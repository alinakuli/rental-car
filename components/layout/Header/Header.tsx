import css from "./Header.module.css"

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container/Container";

export default function Header() {
    return (
        <Container>
        <header className={css.header}>
            <Link href="/" className={css.logo}>
                <Image src="/icons/RentalCar.svg" alt="RentalCar" width={104} height={16} priority />
            </Link>
            <ul className={css.nav}>
                <li className={css.item}>
                    <Link href="/" className={css.link}>Home</Link>
                </li>
                <li className={css.item}>
                    <Link href="/catalog" className={css.link}>Catalog</Link>
                </li>
                </ul>
            </header>
        </Container>
    )
 }