import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), mdx(), sitemap()],
  output: 'server',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['en', 'pt-BR'],
    routing: {
      redirectToDefaultLocale: true,
    },
  },
})
