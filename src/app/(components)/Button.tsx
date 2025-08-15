// src/components/ui/button.tsx
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className = "", ...props }: Props) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md bg-[#ab644b] px-6 py-2 text-white bg-[#72383d] transition ${className}`}
      {...props}
    />
  );
}
