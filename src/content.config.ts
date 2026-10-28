import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Chaque collection correspond à un dossier ou un fichier de src/content/.
// Ajouter un projet = ajouter un fichier .md dans src/content/projets/.

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    ordre: z.number(),
    publie: z.boolean().default(true),
    organisation: z.string(),
    periode: z.string(),
    titre: z.string(),
    resume: z.string(),
    contexte: z.string(),
    methode: z.string(),
    outils: z.array(z.string()),
    resultat: z.string(),
    lien: z.object({ texte: z.string(), url: z.string().url() }).optional(),
    // Nom du tableau de bord interactif affiché à droite (voir src/components/dash/)
    demo: z.enum(['orange', 'bolt', 'alternants']).optional(),
  }),
});

const passions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/passions' }),
  schema: z.object({
    ordre: z.number(),
    titre: z.string(),
    fiche: z.array(z.object({ cle: z.string(), valeur: z.string() })),
    phrase: z.string().optional(),
    sousTitre: z.string(),
    lecons: z.array(z.object({ titre: z.string(), texte: z.string() })),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    publie: z.boolean().default(true),
  }),
});

const chiffres = defineCollection({
  loader: file('./src/content/chiffres.json'),
  schema: z.object({ ordre: z.number(), valeur: z.string(), libelle: z.string(), note: z.number().optional() }),
});

const bases = defineCollection({
  loader: file('./src/content/bases.json'),
  schema: z.object({ ordre: z.number(), periode: z.string(), organisation: z.string(), role: z.string(), note: z.number().optional(), appris: z.string() }),
});

const etapes = defineCollection({
  loader: file('./src/content/etapes.json'),
  schema: z.object({
    // Date de début en année décimale (2023.85 = novembre 2023) : place le point sur la courbe
    annee: z.number(),
    date: z.string(),
    titre: z.string(),
    texte: z.string(),
    etiquette: z.string(),
  }),
});

const assessfirst = defineCollection({
  loader: file('./src/content/assessfirst.json'),
  schema: z.object({
    ordre: z.number(),
    type: z.enum(['dimension', 'force']),
    dimension: z.string().optional(),
    resultat: z.string().optional(),
    enClair: z.string().optional(),
    citation: z.string().optional(),
    exemple: z.string().optional(),
  }),
});

export const collections = { projets, passions, articles, chiffres, bases, etapes, assessfirst };
