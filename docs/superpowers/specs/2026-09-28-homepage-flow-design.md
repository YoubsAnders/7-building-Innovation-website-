# Lot visuel 2 — parcours de l’accueil

Plan et lancement validés dans le chat. Périmètre limité à l’accueil ; aucun changement du hero, du header, du footer ou des pages détaillées.

## Ordre
Premier écran → présentation courte → services et secteurs → projets → expertise et permis de bâtir → équipe → méthode → contact.

## Choix
- À propos : introduction resserrée, quatre principes conservés, lien vers la page dédiée.
- Services : quatre prestations mises en avant, autres prestations dans un volet details natif fermé par défaut. Tous les liens restent dans le HTML serveur et accessibles au clavier.
- Secteurs : sous-section des services avec les descriptions et listes validées ; suppression du second grand bloc autonome.
- Projets : remontés avant les expertises, fond blanc pour séparer les services clairs du bloc sombre. Galerie et règles de publication inchangées ; distinction photo/rendu maintenue.
- Expertise et permis : deux sections avec ancres indépendantes, mais fond sombre commun et séparation fine. Points techniques, pièces du dossier et réserve sur l’obtention du permis conservés.
- Méthode : liste numérotée compacte sur fond violet clair après l’équipe.
- Données, assets, SEO, URL et ancres existantes conservés. Aucune dépendance, aucun commit/push.

## Vérification
Lint, build, types, règles métier, tests de production et test spécifique d’ordre des ancres, unicité des identifiants, présence des services et contenus métier.
Revue navigateur mobile/desktop si disponible. Ne pas assimiler vérifications HTML à une validation visuelle.
