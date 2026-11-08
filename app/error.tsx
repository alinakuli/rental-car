'use client';

import Link from "next/link";
import Container from "@/components/Container/Container";
import css from "./page.module.css";
import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
    
    useEffect(() => {
        console.error(error);
    }, [error]);

  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.heading}>Something went wrong</h1>
        <p className={css.text}>An unexpected error occurred.</p>
        <div className={css.actions}>
          <button type="button" className={css.button} onClick={reset}>
            Try again
          </button>
          <Link href="/" className={css.button}>
            Back to home
          </Link>
        </div>
      </div>
    </Container>
  );
}