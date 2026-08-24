# Logo officiel attendu

Le logo officiel actuellement utilisé est `logo-7-building-innovation.jpeg`.

Si une variante claire officielle est fournie pour les fonds sombres, la déposer sous le nom `logo-7-building-innovation-light.svg`.

Les dimensions du logo principal sont déclarées dans `src/data/brand.ts`. Le composant `BrandLogo` l’affiche automatiquement avec `next/image` et réserve son ratio afin d’éviter tout décalage de mise en page. Pour le footer, passer `inverse.isAvailable` à `true` uniquement après ajout et validation de la variante claire. Sans variante claire, le footer conserve son fallback lisible.
