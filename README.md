# doriankihouba.com

Portfolio de Dorian Kihouba, Data Analyst & Consultant BI. Site statique construit avec [Astro](https://astro.build), hébergé sur Cloudflare Pages.

## Lancer le site sur son ordinateur

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321. Chaque modification enregistrée s'affiche aussitôt.

Pour vérifier la version finale avant de publier :

```bash
npm run build
npm run preview
```

## Modifier le contenu sans toucher au code

Tout le texte du site se trouve dans `src/content/`.

| Je veux… | Fichier à modifier |
|---|---|
| Changer ma disponibilité, mon accroche, mes liens, l'édition | `src/content/site.json` |
| Changer les 4 chiffres clés | `src/content/chiffres.json` |
| Modifier le tableau du chapitre 1 | `src/content/bases.json` |
| Ajouter ou modifier une étape de la courbe (chapitre 2) | `src/content/etapes.json` |
| Ajouter un projet (chapitre 3) | nouveau fichier dans `src/content/projets/` |
| Modifier le futsal ou le JJB | `src/content/passions/` |
| Modifier AssessFirst | `src/content/assessfirst.json` |
| Écrire un article | nouveau fichier dans `src/content/articles/` |
| Remplacer le CV | `public/cv/CV-Dorian-Kihouba.pdf` (garder le même nom) |

### L'ordre d'affichage

Dans les fichiers JSON (`chiffres.json`, `bases.json`, `assessfirst.json`), c'est le champ `ordre` qui décide de la position, pas la place de la ligne dans le fichier : `1` s'affiche en premier. Pour la courbe, `etapes.json` est trié par `annee`.

### Ajouter un projet

Copiez `src/content/projets/02-bolt-food.md`, renommez-le (par exemple `04-memoire.md`) et changez les champs. `ordre` fixe la position. Sans tableau de bord interactif, supprimez la ligne `demo`. Pour préparer un projet sans le montrer, ajoutez `publie: false`.

### Ajouter une étape sur la courbe

Dans `etapes.json`, ajoutez un bloc. `annee` est une année décimale qui place le point sur la courbe : `2027.0` pour janvier 2027, `2027.5` pour juillet.

### Écrire un article

Créez `src/content/articles/mon-article.md` :

```markdown
---
titre: Mon titre
description: Une phrase de résumé.
date: 2026-11-15
---

Le texte, avec des ## intertitres.
```

L'article sera publié à l'adresse `/articles/mon-article`.

## Publier une modification

Une fois le dépôt relié à Cloudflare Pages, chaque envoi sur GitHub met le site à jour en une à deux minutes :

```bash
git add .
git commit -m "Mise à jour de ma disponibilité"
git push
```

Sans le terminal : sur github.com, ouvrez le fichier, cliquez sur le crayon, modifiez, puis cliquez sur « Commit changes ». Le site se met à jour de la même façon.

## Structure

- `src/pages/` : les pages (accueil, article, mentions légales, 404)
- `src/components/` : les sections de la page d'accueil
- `src/components/dash/` : les trois tableaux de bord interactifs (données fictives)
- `src/styles/global.css` : couleurs, polices et éléments communs
- `public/` : fichiers servis tels quels (CV, image de partage, favicon, en-têtes de sécurité)
- `docs/croquis.html` : le croquis validé, non publié

## Sécurité

- Activer l'authentification à deux facteurs sur GitHub et sur Cloudflare.
- Dependabot (`.github/dependabot.yml`) propose chaque semaine les mises à jour des dépendances. Vérifiez que l'aperçu Cloudflare de la demande s'affiche bien, puis fusionnez.
- `public/_headers` définit les en-têtes de sécurité (HTTPS forcé, interdiction de l'affichage dans un cadre, politique de contenu).
- Aucun secret, mot de passe ou clé n'est nécessaire au site : n'en ajoutez jamais dans le dépôt.
- Le CV publié ne contient pas de numéro de téléphone. Vérifiez-le à chaque remplacement.
