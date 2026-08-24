# Images de projets

## Galerie (visuels publiés)

Les visuels de la galerie sont posés à plat dans ce dossier et déclarés dans `src/data/gallery.ts`.

Convention de nommage : `[nature]-[sujet]-[precision]-[NN].jpg`, en minuscules, sans accent ni espace.

| Préfixe | Nature réelle du visuel |
| --- | --- |
| `chantier-` | Photographie de chantier ou de travaux |
| `expertise-` | Contrôle, inspection ou relevé technique sur ouvrage |
| `rendu-` | Rendu de conception / visualisation architecturale |

Le nom décrit uniquement ce que montre l’image. Aucun nom de client, de projet, de localisation ou d’année n’est
inscrit dans un nom de fichier tant que l’information n’a pas été validée.

Les visuels `rendu-` sont des projections : ils ne doivent jamais être présentés comme des ouvrages livrés.

## Fiches projets (à venir)

Chaque réalisation validée peut disposer de son propre dossier : `public/images/projects/[slug]/`.

Les noms recommandés sont `cover.*`, `gallery-01.*`, `gallery-02.*` et `gallery-03.*`. Ajouter dans `src/data/projects.ts` les chemins exacts, dimensions et textes alternatifs factuels avant publication.

## Règle de confidentialité

Tout fichier placé dans `public/` est servi publiquement, même s’il n’est référencé par aucune page.
Les documents comportant un nom de maître d’ouvrage, une adresse précise ou des références de dossier
ne doivent donc pas y être déposés : voir `assets-sources/plans-clients/`.
