// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://doriankihouba.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Français par défaut à la racine ; l'anglais sera servi sous /en/ quand il sera prêt.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
