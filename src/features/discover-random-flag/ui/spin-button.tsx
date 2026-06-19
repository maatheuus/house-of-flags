"use client";

import { Button } from "@shared/ui";
import { useDiscover } from "../model/use-discover";

interface SpinButtonProps {
  label: string;
  variant?: "primary" | "ghost";
}

/** Fires the discovery spin → a random country dossier. */
export function SpinButton({ label, variant = "primary" }: SpinButtonProps) {
  const { spin } = useDiscover();
  return (
    <Button variant={variant} onClick={spin}>
      {label}
    </Button>
  );
}
