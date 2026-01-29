// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from '@catppuccin/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://firelink-library.github.io',
  base: '/siscomp',
  outDir: 'dist',
  publicDir: 'static',
  integrations: [
    starlight({
      title: 'Sistemas computacionais',
      logo: {
        src: './src/assets/logos/logo.png'
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2
      },
      social: [{
        icon: 'github',
        label: 'GitHub',
        href: 'https://github.com/firelink-library/siscomp'
      }],
      plugins: [
        catppuccin({
          dark: { flavor: "macchiato", accent: "mauve" },
          light: { flavor: "latte", accent: "mauve" }
        })
      ],
      sidebar: [
        {
          label: 'Sistemas operacionais',
          autogenerate: { directory: 'so' }, collapsed: true
        },
        {
          label: 'Redes de computadores',
          autogenerate: { directory: 'redes' }, collapsed: true
        },
        {
          label: 'Sistemas distribuídos',
          autogenerate: { directory: 'distribuidos' }, collapsed: true
        },
        {
          label: 'Concorrência e paralelismo',
          autogenerate: { directory: 'paralelismo' }, collapsed: true
        },
      ],
    }),
  ],
});
