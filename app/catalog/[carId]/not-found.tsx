import Link from "next/link";
import Container from "@/components/Container/Container";
import css from "./not-found.module.css";

export default function NotFound() {
  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.heading}>Car not found</h1>
        <p className={css.text}>
          The car you are looking for doesn&apos;t exist or is no longer available.
        </p>
        <Link href="/catalog" className={css.button}>
          Back to catalog
        </Link>
      </div>
    </Container>
  );
}