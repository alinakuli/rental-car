'use client';

import Container from "@/components/Container/Container";
import css from "../page.module.css";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CatalogError({ error, reset }: Props) {
    
    useEffect(() => {
        console.error(error);
    }, [error]);
    
  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.heading}>Something went wrong</h1>
        <p className={css.text}>
          We couldn&apos;t load this page. Please try again.
        </p>
        <button type="button" className={css.button} onClick={reset}>
          Try again
        </button>
      </div>
    </Container>
  );
}