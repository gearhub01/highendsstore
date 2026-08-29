# Nouveau logo Highends Store

## Objectif
Remplacer le favicon/logo actuel (manette fine linéaire) par un logo **manette gaming géométrique abstraite**, cohérent avec l'esthétique cyberpunk du site (néon cyan `#00E5E5`, fond sombre `#0F172A`, accent violet `#A855F7`).

## Livrables
1. **Logo source** (`src/assets/logo-highends.png`) : manette stylisée, formes géométriques épurées, lueur néon, fond transparent pour pouvoir être réutilisée sur différents supports.
2. **Favicon** (`public/favicon.png`) : version 64×64 px sur fond sombre, optimisée pour les onglets navigateurs.
3. **Mise à jour des références** :
   - `index.html` pointe vers le nouveau `favicon.png`.
   - Suppression de l'ancien favicon obsolète s'il existe encore.
   - Optionnel : utilisation du logo dans `Navbar.tsx` et `Footer.tsx` à la place de l'icône Lucide `Gamepad2` pour renforcer l'identité visuelle.

## Contraintes
- Pas de texte dans le logo (sauf éventuellement un monogramme très discret) pour rester lisible en favicon.
- Fond transparent pour le logo source ; fond sombre pour le favicon.
- Respect de la charte : pas de dégradés génériques, pas de violet/indigo dominant, le cyan reste la couleur principale.
- Pas de régression SEO : le `type="image/png"` et le chemin `/favicon.png` sont conservés.

## Étapes
1. Générer le logo source avec `imagegen` (prompt précis : manette géométrique abstraite, lignes épaisses, néon cyan, fond transparent).
2. Convertir/redimensionner en favicon 64×64 avec ImageMagick.
3. Remplacer `public/favicon.png` et ajouter `src/assets/logo-highends.png`.
4. Mettre à jour `index.html` si nécessaire (vérifier le lien existant).
5. Optionnel : remplacer l'icône `Gamepad2` par le logo image dans la navbar et le footer.
6. Vérifier visuellement le rendu dans le navigateur (onglet + header).
