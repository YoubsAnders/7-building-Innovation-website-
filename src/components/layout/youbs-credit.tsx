"use client";

import Image from "next/image";
import { youbsCredit } from "@/data/credits";

export function YoubsCredit() {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs leading-5 text-white/45 sm:justify-end">
      <a
        href={youbsCredit.websiteUrl}
        aria-label="Site web de Youb's bientôt disponible"
        title="Site web de Youb's bientôt disponible"
        className="group inline-flex min-h-11 items-center gap-1.5 rounded-sm px-1 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-soft"
        onClick={(event) => {
          if (youbsCredit.websiteUrl === "#") event.preventDefault();
        }}
      >
        <Image
          src={youbsCredit.logo.src}
          alt={youbsCredit.logo.alt}
          width={youbsCredit.logo.width}
          height={youbsCredit.logo.height}
          sizes="60px"
          className="h-5 w-auto object-contain"
        />
        <span>Powered by Youb&apos;s</span>
      </a>
      <span aria-hidden="true">·</span>
      <a
        href={youbsCredit.phoneHref}
        className="inline-flex min-h-11 items-center rounded-sm px-1 text-white/65 transition-colors hover:text-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-soft"
      >
        {youbsCredit.phone}
      </a>
    </div>
  );
}
