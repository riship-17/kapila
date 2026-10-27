"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

type ErrorProps = { error: Error & { digest?: string }; reset: () => void };

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="pt-14 lg:pt-24">
      <h1 className="text-display">Something went wrong</h1>
            <p className="measure mt-8 text-lead text-ink-secondary">
        This page could not be loaded.{" "}
        <button type="button" onClick={reset} className="link">
          Try again
        </button>
        , or return to the{" "}
        <Link href="/" className="link">
          home page
        </Link>
        .
      </p>
    </Container>
  );
}
