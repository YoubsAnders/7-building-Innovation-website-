import { ScrollReveal } from "@/components/scroll-reveal";

// Remounted on navigation; no DOM wrapper changes the existing layout.
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}<ScrollReveal /></>;
}
