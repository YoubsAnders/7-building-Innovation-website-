# Portraits de l’équipe

Ajouter uniquement des photos validées, sans téléchargement ni génération de remplacement.

Noms de fichiers attendus : `tiam-levi.*`, `loick.*`, `geraldin.*`, `jires.*`, `augustin.*` et `leonard.*`
(minuscules, tirets, sans espace ni accent).

Lorsqu’un portrait est disponible, renseigner son chemin exact, son texte alternatif et ses dimensions
dans `src/data/team.ts`. Tant que `image` vaut `null`, le placeholder « Portrait à venir » reste affiché.

## Cadrage

Les portraits sont rendus dans un cadre **4:5** (`TeamPortrait`), placeholder compris, afin que la grille
reste régulière. Les trois photographies actuelles sont nativement en 1122×1402, soit exactement 4:5 :
elles ne subissent donc aucun recadrage.

Si un futur portrait n’est pas en 4:5, renseigner `objectPosition` dans son objet `image`
(par exemple `objectPosition: "center 25%"`) pour éviter un visage coupé. Ne jamais retoucher le fichier source.

## Portraits manquants

`jires`, `augustin`, `leonard`.
