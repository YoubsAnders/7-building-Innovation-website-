// Next.js remonte ce template à chaque navigation : les <main> sont recréés,
// ce qui rejoue l’animation `page-enter` définie dans globals.css.
// Aucun wrapper DOM n’est ajouté, la mise en page flex du body reste intacte.
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
