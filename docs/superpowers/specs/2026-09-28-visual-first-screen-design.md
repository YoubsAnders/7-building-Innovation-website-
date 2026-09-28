# Premier lot visuel — 28 septembre 2026

## Validation et périmètre
Le plan et le démarrage du premier lot ont été validés dans le chat. Ce lot couvre uniquement le premier écran et le header partagé. Arrêt pour validation visuelle avant la réorganisation de l’accueil et la déclinaison des autres pages.

## Composition retenue
- Titre : « De la conception à la réalisation. »
- Texte violet clair et blanc sur fond violet profond, sans texte directement sur la photographie.
- Photographie réelle existante « chantier-03 » dans un cadre au ratio réservé 4:3, sans retouche ni voile sombre. Légende issue des données de galerie.
- Deux colonnes sur grand écran ; texte puis image sur mobile.
- Action dominante vers Contact ; lien secondaire vers les services ; lien de découverte vers À propos.
- Logo officiel inchangé sur fond blanc. Coordonnées rapides conservées dans un bandeau compact.
- Navigation desktop : À propos, Services (Tous les services, Expertise, Permis de bâtir), Projets, Équipe, bouton de devis.
- Menu mobile complet conservé. Retour Accueil par le logo et le menu mobile.

## Architecture et protection des acquis
HeroSection reste serveur, utilise les données de galerie et l’ancienneté centralisée.
DesktopServiceMenu isole le menu natif details/summary et ses fermetures Échap/clic extérieur/sortie du focus.
SiteHeader conserve le dialogue mobile accessible et utilise les navigations centralisées.
Aucune nouvelle dépendance, aucune modification des coordonnées, URL, autres sections ou footer. Aucun commit, push ou déploiement.

## Validation
Lint, compilation, types et règles métier. Contrôles HTTP des pages, ancres, images et métadonnées.
Revue visuelle à 320/390/768/1024/1440 px et navigation clavier si le navigateur de contrôle est accessible ; sinon signaler précisément cette limite, sans prétendre à une validation visuelle.
