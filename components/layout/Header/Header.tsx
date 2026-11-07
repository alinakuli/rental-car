import css from "./Header.module.css"

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container/Container";
import NavLinks from "./NavLinks";

export default function Header() {
    return (
        <header className={css.header}>
            <Container>
                <div className={css.inner}>
                    <Link href="/" className={css.logo}>
                        <Image src="/icons/RentalCar.svg" alt="RentalCar" width={104} height={16} priority />
                    </Link>
                    <NavLinks />
                </div>
            </Container>
        </header>
    )
 }