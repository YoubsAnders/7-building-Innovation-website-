import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkButtonProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; variant?: "primary" | "secondary" | "dark" };

export function LinkButton({ children, className, variant = "primary", ...props }: LinkButtonProps) {
  return (
    <Link className={cn(
      "inline-flex min-h-11 items-center justify-center rounded-ui-sm px-5 text-sm font-semibold transition-[color,background-color,border-color,transform] [transition-duration:var(--transition-base)] [transition-timing-function:var(--ease-soft)] hover:-translate-y-px active:translate-y-0",
      variant === "primary" ? "bg-brand text-surface hover:bg-brand-hover" : variant === "dark" ? "bg-surface text-brand-dark hover:bg-brand-soft" : "border border-brand-border bg-surface text-brand hover:border-brand hover:bg-brand-soft",
      className,
    )} {...props}>
      {children}
    </Link>
  );
}
