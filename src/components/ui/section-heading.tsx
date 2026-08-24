type SectionHeadingProps = { eyebrow?: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-4 text-sm font-semibold tracking-[0.15em] text-orange uppercase">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate">{description}</p> : null}
    </div>
  );
}
