'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

const links = [
    { href: "/", label: "Home" },
    { href: "/catalog", label: "Catalog" },
];

export default function NavLinks() {
    const pathname = usePathname();
    
    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);
    
    return (
        <nav>
            <ul className={css.nav}>
                {links.map(({ href, label }) => (
                    <li key={href} className={css.item}>
                        <Link
                            href={href}
                            className={`${css.link} ${isActive(href) ? css.active : ""}`}
                            aria-current={isActive(href) ? "page" : undefined}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}