# 7 Building Innovation

Site institutionnel Next.js, TypeScript et Tailwind CSS. L’accueil conserve ses ancres ; services, équipe, expertises, contact et projets validés disposent de pages dédiées.

## Développement et contrôles

- `npm run dev` : développement.
- `npm run lint` : contrôle du code.
- `npm run build` : génération de production.
- `npm run start` : aperçu de production.
- `node scripts/check-business-rules.mjs` : règles d’ancienneté, publication et métadonnées.
- `npx --no-install tsc --noEmit` : contrôle des types après génération Next.js.

## Sources de vérité et contenus à compléter

Les données éditoriales sont centralisées dans `src/data/` :
- `company.ts` : nom, coordonnées officielles, navigation et ancienneté. Les coordonnées à Douala, deux téléphones, email et WhatsApp sont intégrés. Les réseaux sociaux restent non renseignés.
- `brand.ts` : JPEG officiel inchangé, dimensions et alternative textuelle. La variante claire n’existe pas encore : le footer sombre conserve son identité textuelle.
- `team.ts` : profils validés. Les biographies détaillées, qualifications et le portrait de Leonard restent à fournir.
- `gallery.ts` : visuels fournis, avec distinction entre photographies et rendus de conception.
- `projects.ts` : aucune fiche projet n’est publiée sans validation. La même règle de complétude pilote cartes, pages, paramètres statiques et sitemap. Une fiche exige un titre, une catégorie, une description, un slug lisible et une image documentée avec dimensions. Le drapeau `published` matérialise la validation éditoriale ; il ne vérifie pas les droits à lui seul.
- `credits.ts` : signature Youb’s séparée des coordonnées de l’entreprise.

## Ancienneté

`experienceStartYear` reste à `null` tant que le propriétaire ne confirme pas l’année exacte. Aucun chiffre supposé n’est affiché.
Le calcul est centralisé dans `company.ts`. Après validation, le serveur fournit une valeur initiale compatible avec la génération statique ; le navigateur l’actualise à partir de son année système, au chargement, à la reprise de visibilité et chaque minute, sans API et sans décalage d’hydratation.
Le HTML servi sans JavaScript conserve l’année du build : prévoir un nouveau build au changement d’année pour ce cas et les robots sans JavaScript.

## Contact

`/contact` utilise les coordonnées officielles et propose appel, email et WhatsApp. Il n’existe pas de formulaire de collecte ni de serveur d’envoi. Aucun horaire, position GPS ou délai de réponse n’est inventé.

## Images et identité

Les images passent par `next/image` avec dimensions ou conteneur réservé et tailles adaptées.
Les portraits utilisent des copies WebP sans perte dans `public/images/team/optimized/`. Les PNG originaux restent conservés. Le script optionnel `node scripts/optimize-team-images.mjs` les régénère avec Sharp, déjà fourni dans l’arbre de dépendances Next.js. Aucun logo n’est retouché.
`/sharing-image` génère une image de partage 1200 × 630 à partir du JPEG officiel et du texte validé. Elle utilise `ImageResponse`, dont le rendu image ne passe pas par `next/image`.

## Accessibilité et animation

Menu mobile modal natif : fond inerte, focus contenu, fermeture Échap, restauration du focus et défilement interne. Lien d’évitement vers le contenu, filtres avec état annoncé et contrastes adaptés aux fonds sombres.
Les apparitions légères ne masquent jamais le contenu sans JavaScript. `prefers-reduced-motion` désactive les animations et déplacements décoratifs, y compris si la préférence change pendant la visite.
La palette emploie les tokens violets sémantiques ; les anciens alias navy/orange ont été retirés.

## Mise en ligne et SEO

Avant publication, configurez `NEXT_PUBLIC_SITE_URL` avec l’origine HTTPS officielle puis reconstruisez le site. Aucun domaine de substitution n’est fourni. Cette variable active les canonical, les URL Open Graph/Twitter, l’image de partage, le sitemap et son lien dans robots.txt. Sans elle, le sitemap reste volontairement vide.
Titres et descriptions sont spécifiques aux pages ; un H1 par page. Les slugs inconnus appellent explicitement `notFound()`.
Les données structurées utilisent les seules informations confirmées. Il reste à valider les informations légales, la confidentialité selon les traitements réellement mis en place, l’hébergement et le domaine avant mise en ligne.
