"use client";

import { useSyncExternalStore } from "react";
import { getCompanyExperienceLabel } from "@/data/company";

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 60_000);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener("visibilitychange", onChange);
  };
}
const getCurrentYear = () => new Date().getFullYear();

export function ExperienceLabel({ initialYear, className }: { initialYear: number; className?: string }) {
  const year = useSyncExternalStore(subscribe, getCurrentYear, () => initialYear);
  const label = getCompanyExperienceLabel(year);
  return label ? <p className={className}>{label}</p> : null;
}
