import { ArrowUpRight } from "lucide-react";
import { founder, otherTeamMembers } from "@/data/team";
import { FounderContactLink } from "@/components/team/founder-contact-link";
import { TeamPortrait } from "@/components/team/founder-profile";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

// Sélection : les membres dont la photographie réelle est disponible sont mis en avant ;
// les autres restent cités pour ne perdre aucun nom, sans placeholder visuel dans cet aperçu.
export function TeamSection() {
  const portraitMembers = otherTeamMembers.filter((member) => member.image).slice(0, 4);
  const listedMembers = otherTeamMembers.filter((member) => !member.image).slice(0, 3);

  return (
    <section id="equipe" className="scroll-mt-24 bg-surface py-[var(--space-section)]">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <FounderContactLink compact />
        <div>
          <p className="text-sm font-semibold tracking-[0.15em] text-brand uppercase">Équipe</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl">Une expertise portée par des professionnels.</h2>
          <p className="mt-6 text-xl font-semibold tracking-[-0.03em] text-foreground">{founder.name}</p>
          <p className="mt-2 text-sm font-semibold text-brand">{founder.position}</p>
          {founder.bioShort ? <p className="mt-5 max-w-xl leading-7 text-muted">{founder.bioShort}</p> : null}

          {portraitMembers.length ? (
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {portraitMembers.map((member) => (
                <li key={member.id}>
                  <TeamPortrait member={member} compact sizes="(max-width: 639px) 45vw, 170px" className="border border-brand-border" />
                  <p className="mt-3 text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="mt-1 text-xs text-muted">{member.position}</p>
                </li>
              ))}
            </ul>
          ) : null}

          {listedMembers.length ? (
            <ul className="mt-7 grid gap-x-6 gap-y-3 border-t border-brand-border pt-5 sm:grid-cols-3">
              {listedMembers.map((member) => (
                <li key={member.id}>
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="mt-1 text-xs text-muted">{member.position}</p>
                </li>
              ))}
            </ul>
          ) : null}

          <LinkButton href="/equipe" variant="secondary" className="mt-8">Découvrir toute l’équipe <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></LinkButton>
        </div>
      </Container>
    </section>
  );
}
