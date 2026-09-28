import Image from "next/image";
import { brand } from "@/data/brand";

export function BrandLogo({ inverse = false, eager = false }: { inverse?: boolean; eager?: boolean }) {
  const logo = inverse ? brand.logo.inverse : brand.logo;

  if (brand.logo.isAvailable && logo.isAvailable) {
    return <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} sizes="134px" loading={eager ? "eager" : "lazy"} className="h-auto w-[8.4rem]" />;
  }
  return <span className={inverse ? "text-surface" : "text-foreground"}><span className="block text-lg font-semibold leading-none tracking-[-0.035em]">7 Building</span><span className={`mt-1 block text-[0.625rem] font-bold tracking-[0.2em] uppercase ${inverse ? "text-brand-light" : "text-brand"}`}>Innovation</span></span>;
}
