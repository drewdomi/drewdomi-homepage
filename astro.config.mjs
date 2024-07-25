import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), mdx(), sitemap()],
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['en', 'pt-br'],
    routing: {
      redirectToDefaultLocale: true,
    },
  },
})
