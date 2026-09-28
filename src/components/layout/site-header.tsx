"use client";

import { Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DesktopServiceMenu } from "@/components/layout/desktop-service-menu";
import { BrandLogo } from "@/components/layout/brand-logo";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { company, internalNavigation, primaryNavigation } from "@/data/company";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const primaryPhone = company.contact.phones[0];
  const navigation = pathname === "/" ? primaryNavigation : internalNavigation;
  const desktopNavigation = navigation.filter((item) => ["À propos", "Services", "Projets", "Équipe"].includes(item.label));
  const serviceNavigation = navigation.filter((item) => ["Services", "Expertise", "Permis de bâtir"].includes(item.label));
  const actions = [
    { label: "WhatsApp", mobileLabel: "WhatsApp", href: company.contact.whatsapp.href, icon: MessageCircle, accessibleLabel: "Contacter 7 Building Innovation via WhatsApp", external: true },
    { label: primaryPhone.number, mobileLabel: "Appeler", href: primaryPhone.href, icon: Phone, accessibleLabel: "Appeler 7 Building Innovation", external: false },
    { label: "Email", mobileLabel: "Email", href: `mailto:${company.contact.email}`, icon: Mail, accessibleLabel: "Envoyer un email à 7 Building Innovation", external: false },
  ];

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!isMenuOpen || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const originalOverflow = document.body.style.overflow;
    // Native modal dialog contains focus, makes the background inert and restores focus on close.
    dialog.showModal();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => { if (desktop.matches) dialog.close(); };
    desktop.addEventListener("change", closeOnDesktop);
    closeOnDesktop();
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      document.body.style.overflow = originalOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isMenuOpen]);

  const closeMenu = () => dialogRef.current?.close();
  const isActive = (label: string) => {
    if (label === "Services") return pathname.startsWith("/services");
    if (label === "Projets") return pathname.startsWith("/projets");
    return pathname === internalNavigation.find((item) => item.label === label)?.href;
  };

  return (
    <>
      <div className="bg-brand-deep text-surface">
        <Container className="flex min-h-11 items-center justify-between gap-4 md:min-h-9">
          <div className="flex w-full items-center justify-around gap-2 md:w-auto md:justify-start md:gap-5">
            {actions.map(({ label, mobileLabel, href, icon: Icon, accessibleLabel, external }) => (
              <a key={href} href={href} aria-label={accessibleLabel}
                target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-11 items-center gap-2 px-1 text-xs text-white/85 transition-colors hover:text-white md:min-h-9">
                <Icon aria-hidden="true" className="size-4 shrink-0" />
                <span className="md:hidden">{mobileLabel}</span>
                <span className="hidden md:inline">{label}</span>
              </a>
            ))}
          </div>
          <p className="hidden text-xs text-white/75 md:block">{company.contact.city} · {company.contact.country}</p>
        </Container>
      </div>
      <header className={cn("sticky top-0 z-50 border-b transition-colors", isScrolled ? "border-brand-border bg-surface/95 backdrop-blur" : "border-transparent bg-surface")}>
        <Container className="flex min-h-20 items-center justify-between gap-6">
          <Link href="/" className="shrink-0" aria-label="7 Building Innovation — Accueil"><BrandLogo eager /></Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {desktopNavigation.map((item) => item.label === "Services" ? (
              <DesktopServiceMenu key={item.label} items={serviceNavigation} pathname={pathname} />
            ) : (
              <Link key={item.label} href={item.href} aria-current={isActive(item.label) ? "page" : undefined}
                className={cn("inline-flex min-h-11 items-center text-sm font-medium transition-colors hover:text-brand", isActive(item.label) ? "text-brand" : "text-muted")}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:block"><LinkButton href="/contact">Demander un devis</LinkButton></div>
          <button type="button" aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-haspopup="dialog"
            onClick={() => setIsMenuOpen(true)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-ui-sm border border-brand-border text-foreground lg:hidden">
            <Menu aria-hidden="true" className="size-5" /><span className="sr-only">Ouvrir le menu</span>
          </button>
        </Container>
      </header>
      <dialog ref={dialogRef} id="mobile-navigation" aria-label="Menu principal"
        onClose={() => setIsMenuOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto overscroll-contain border-0 bg-brand-deep p-5 text-surface backdrop:bg-brand-deep">
        <div className="mx-auto flex min-h-full max-w-[var(--container-max)] flex-col">
          <div className="flex items-center justify-between gap-5 pb-6">
            <Link href="/" onClick={closeMenu} aria-label="7 Building Innovation — Accueil"><BrandLogo /></Link>
            <button type="button" onClick={closeMenu} className="flex min-h-11 min-w-11 items-center justify-center rounded-ui-sm border border-white/40 text-white">
              <X aria-hidden="true" className="size-6" /><span className="sr-only">Fermer le menu</span>
            </button>
          </div>
          <nav aria-label="Navigation mobile">
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={closeMenu} aria-current={isActive(item.label) ? "page" : undefined}
                    className={cn("block py-4 text-2xl font-semibold tracking-tight transition-colors hover:text-brand-light", isActive(item.label) && "text-brand-light")}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <LinkButton href="/contact" onClick={closeMenu} className="mt-6 w-full sm:w-fit">Demander un devis</LinkButton>
          </nav>
          <address className="mt-6 border-t border-white/15 pt-5 text-sm leading-6 text-white/80 not-italic">
            <p className="text-xs font-semibold tracking-widest uppercase">Adresse</p>
            <p className="mt-2">{company.contact.address}</p>
          </address>
        </div>
      </dialog>
    </>
  );
}
